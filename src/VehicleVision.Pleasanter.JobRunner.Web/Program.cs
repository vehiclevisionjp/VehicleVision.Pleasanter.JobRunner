using Hangfire;
using Hangfire.Console;
using Hangfire.MemoryStorage;
using VehicleVision.Pleasanter.JobRunner.Core.Authentication;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;
using VehicleVision.Pleasanter.JobRunner.Core.Data;
using VehicleVision.Pleasanter.JobRunner.Core.Scripting;
using VehicleVision.Pleasanter.JobRunner.Web.Jobs;

var builder = WebApplication.CreateBuilder(args);

var parameterDirectory = JsonParameterLoader.GetDefaultParameterDirectory(builder.Environment.ContentRootPath);
builder.Services.AddSingleton<IParameterLoader>(_ => new JsonParameterLoader(parameterDirectory));
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

app.UseAuthorization();

app.MapRazorPages();

app.Run();
