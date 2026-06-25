using Hangfire;
using Hangfire.Console;
using Hangfire.MemoryStorage;
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
builder.Services.AddSingleton<IParameterLoader>(_ =>
{
    var jsonLoader = new JsonParameterLoader(parameterDirectory);
    return new ConfigurationParameterLoader(jsonLoader, builder.Configuration);
});
builder.Services.AddSingleton(sp => sp.GetRequiredService<IParameterLoader>().LoadRds());
builder.Services.AddSingleton(sp => sp.GetRequiredService<IParameterLoader>().LoadJobRunner());
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

builder.Services.AddHangfire(configuration => configuration
    .SetDataCompatibilityLevel(CompatibilityLevel.Version_180)
    .UseSimpleAssemblyNameTypeSerializer()
    .UseRecommendedSerializerSettings()
    .UseMemoryStorage()
    .UseConsole());
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

public partial class Program;
