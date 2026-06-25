using VehicleVision.Pleasanter.JobRunner.Core.Authentication;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;
using VehicleVision.Pleasanter.JobRunner.Core.Data;

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
