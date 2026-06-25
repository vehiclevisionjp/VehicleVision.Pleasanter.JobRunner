using System.Text.RegularExpressions;

namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public sealed partial class JobRunnerParameters
{
    public string? AuthorizationCheckColumn { get; init; }

    public string? UsersAuthorizationCheckColumn { get; init; }

    public string? GroupsAuthorizationCheckColumn { get; init; }

    public string? DeptsAuthorizationCheckColumn { get; init; }

    public string PythonExecutablePath { get; init; } = "python";

    public bool AllowPlainTextPasswordHashForDevelopment { get; init; }

    public string GetUsersAuthorizationCheckColumn() => ResolveCheckColumn(UsersAuthorizationCheckColumn);

    public string GetGroupsAuthorizationCheckColumn() => ResolveCheckColumn(GroupsAuthorizationCheckColumn);

    public string GetDeptsAuthorizationCheckColumn() => ResolveCheckColumn(DeptsAuthorizationCheckColumn);

    public void Validate()
    {
        ValidateCheckColumn(GetUsersAuthorizationCheckColumn(), nameof(UsersAuthorizationCheckColumn));
        ValidateCheckColumn(GetGroupsAuthorizationCheckColumn(), nameof(GroupsAuthorizationCheckColumn));
        ValidateCheckColumn(GetDeptsAuthorizationCheckColumn(), nameof(DeptsAuthorizationCheckColumn));

        if (string.IsNullOrWhiteSpace(PythonExecutablePath))
        {
            throw new ParameterLoadException("JobRunner.json must define PythonExecutablePath.");
        }
    }

    private string ResolveCheckColumn(string? tableSpecificColumn)
    {
        if (!string.IsNullOrWhiteSpace(tableSpecificColumn))
        {
            return tableSpecificColumn;
        }

        if (!string.IsNullOrWhiteSpace(AuthorizationCheckColumn))
        {
            return AuthorizationCheckColumn;
        }

        return "CheckA";
    }

    private static void ValidateCheckColumn(string value, string settingName)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            throw new ParameterLoadException($"JobRunner.json must define {settingName}.");
        }

        if (!IdentifierRegex().IsMatch(value))
        {
            throw new ParameterLoadException($"{settingName} must be a simple identifier such as CheckA.");
        }
    }

    [GeneratedRegex("^[A-Za-z_][A-Za-z0-9_]*$", RegexOptions.CultureInvariant)]
    private static partial Regex IdentifierRegex();
}
