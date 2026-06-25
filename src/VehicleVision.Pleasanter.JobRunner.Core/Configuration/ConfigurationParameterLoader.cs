using Microsoft.Extensions.Configuration;

namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public sealed class ConfigurationParameterLoader : IParameterLoader
{
    private readonly IParameterLoader _inner;
    private readonly IConfiguration _configuration;

    public ConfigurationParameterLoader(IParameterLoader inner, IConfiguration configuration)
    {
        _inner = inner ?? throw new ArgumentNullException(nameof(inner));
        _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
    }

    public RdsParameters LoadRds()
    {
        var json = _inner.LoadRds();
        var merged = new RdsParameters
        {
            Dbms = GetFirst("JobRunner:Rds:Dbms", "Rds:Dbms") ?? json.Dbms,
            UserConnectionString = GetFirst(
                "JobRunner:Rds:UserConnectionString",
                "Rds:UserConnectionString") ?? json.UserConnectionString
        };

        merged.Validate();
        return merged;
    }

    public JobRunnerParameters LoadJobRunner()
    {
        var json = _inner.LoadJobRunner();
        var merged = new JobRunnerParameters
        {
            AuthorizationCheckColumn = GetFirst(
                "JobRunner:AuthorizationCheckColumn",
                "JobRunner:Authorization:CheckColumn") ?? json.AuthorizationCheckColumn,
            UsersAuthorizationCheckColumn = GetFirst(
                "JobRunner:UsersAuthorizationCheckColumn",
                "JobRunner:Authorization:UsersCheckColumn") ?? json.UsersAuthorizationCheckColumn,
            GroupsAuthorizationCheckColumn = GetFirst(
                "JobRunner:GroupsAuthorizationCheckColumn",
                "JobRunner:Authorization:GroupsCheckColumn") ?? json.GroupsAuthorizationCheckColumn,
            DeptsAuthorizationCheckColumn = GetFirst(
                "JobRunner:DeptsAuthorizationCheckColumn",
                "JobRunner:Authorization:DeptsCheckColumn") ?? json.DeptsAuthorizationCheckColumn,
            PythonExecutablePath = GetFirst("JobRunner:PythonExecutablePath") ?? json.PythonExecutablePath,
            AllowPlainTextPasswordHashForDevelopment = GetFirst("JobRunner:AllowPlainTextPasswordHashForDevelopment") is { } allowPlainText
                ? ParseBoolean(allowPlainText, "JobRunner:AllowPlainTextPasswordHashForDevelopment")
                : json.AllowPlainTextPasswordHashForDevelopment
        };

        merged.Validate();
        return merged;
    }

    private string? GetFirst(params string[] keys)
    {
        foreach (var key in keys)
        {
            var value = _configuration[key];
            if (!string.IsNullOrWhiteSpace(value))
            {
                return value;
            }
        }

        return null;
    }

    private static bool ParseBoolean(string value, string settingName)
    {
        if (bool.TryParse(value, out var parsed))
        {
            return parsed;
        }

        if (int.TryParse(value, out var number))
        {
            return number != 0;
        }

        throw new ParameterLoadException($"{settingName} must be true or false.");
    }
}
