using Hangfire;
using Hangfire.Console;
using Hangfire.MemoryStorage;
using Hangfire.PostgreSql;
using Hangfire.SqlServer;
using Microsoft.AspNetCore.Authentication.Cookies;
using VehicleVision.Pleasanter.JobRunner.Core.Authentication;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;
using VehicleVision.Pleasanter.JobRunner.Core.Data;
using VehicleVision.Pleasanter.JobRunner.Core.Scripting;
using VehicleVision.Pleasanter.JobRunner.Web.Jobs;
using VehicleVision.Pleasanter.JobRunner.Web.Security;

var builder = WebApplication.CreateBuilder(args);

if (builder.Environment.IsDevelopment())
{
    builder.Configuration.AddUserSecrets<Program>(optional: true);
}

var parameterDirectory = JsonParameterLoader.GetDefaultParameterDirectory(builder.Environment.ContentRootPath);
var parameterLoader = new ConfigurationParameterLoader(
    new JsonParameterLoader(parameterDirectory),
    builder.Configuration);
var rdsParameters = parameterLoader.LoadRds();
var hangfireRdsParameters = parameterLoader.LoadHangfireRds();
var jobRunnerParameters = parameterLoader.LoadJobRunner();

builder.Services.AddSingleton<IParameterLoader>(parameterLoader);
builder.Services.AddSingleton(rdsParameters);
builder.Services.AddSingleton(hangfireRdsParameters);
builder.Services.AddSingleton(jobRunnerParameters);
builder.Services.AddSingleton<IDbConnectionFactory, DbConnectionFactory>();
builder.Services.AddScoped<IPleasanterAuthRepository, DapperPleasanterAuthRepository>();
builder.Services.AddSingleton<IPasswordHashVerifier>(sp =>
{
    var parameters = sp.GetRequiredService<JobRunnerParameters>();
    return new PleasanterPasswordHashVerifier(parameters.AllowPlainTextPasswordHashForDevelopment);
});
builder.Services.AddScoped<PleasanterAuthService>();

builder.Services.AddSingleton<IScriptExecutionEngine, CSharpScriptExecutionEngine>();
builder.Services.AddSingleton<IScriptExecutionEngine>(sp =>
{
    var parameters = sp.GetRequiredService<JobRunnerParameters>();
    return new PythonScriptExecutionEngine(parameters.PythonExecutablePath);
});
builder.Services.AddSingleton<IScriptExecutionEngine>(sp =>
{
    var connectionFactory = sp.GetRequiredService<IDbConnectionFactory>();
    return new ClearScriptExecutionEngine(connectionFactory);
});
builder.Services.AddSingleton<ScriptExecutionDispatcher>();
builder.Services.AddTransient<ScriptJob>();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.Cookie.Name = "VehicleVision.JobRunner.Auth";
        options.LoginPath = "/Account/Login";
        options.AccessDeniedPath = "/Account/Login";
        options.SlidingExpiration = true;
    });
builder.Services.AddAuthorization();

builder.Services.AddHangfire(configuration =>
{
    configuration
        .SetDataCompatibilityLevel(CompatibilityLevel.Version_180)
        .UseSimpleAssemblyNameTypeSerializer()
        .UseRecommendedSerializerSettings();

    UseConfiguredHangfireStorage(configuration, hangfireRdsParameters);

    configuration.UseConsole();
});
builder.Services.AddHangfireServer();

builder.Services.AddRazorPages();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseHangfireDashboard("/hangfire", new DashboardOptions
{
    DashboardTitle = "JobRunner Hangfire",
    Authorization = new[] { new CookieDashboardAuthorizationFilter() }
});

app.MapRazorPages();

app.Run();

static void UseConfiguredHangfireStorage(IGlobalConfiguration configuration, HangfireRdsParameters parameters)
{
    if (parameters.UsesMemoryStorage())
    {
        configuration.UseMemoryStorage();
        return;
    }

    switch (parameters.GetDbms())
    {
        case SupportedDbms.SQLServer:
            configuration.UseSqlServerStorage(parameters.ConnectionString);
            break;
        case SupportedDbms.PostgreSQL:
            configuration.UsePostgreSqlStorage(
                options => options.UseNpgsqlConnection(parameters.ConnectionString));
            break;
        default:
            throw new ParameterLoadException(
                "HangfireRds currently supports SQLServer and PostgreSQL only. Use Memory, SQLServer, or PostgreSQL.");
    }
}

public partial class Program;
