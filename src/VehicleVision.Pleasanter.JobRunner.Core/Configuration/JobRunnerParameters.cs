using System.Text.RegularExpressions;

namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public sealed partial class JobRunnerParameters
{
    public string AuthorizationCheckColumn { get; init; } = "CheckA";

    public string PythonExecutablePath { get; init; } = "python";

    public bool AllowPlainTextPasswordHashForDevelopment { get; init; }

    public void Validate()
    {
        if (string.IsNullOrWhiteSpace(AuthorizationCheckColumn))
        {
            throw new ParameterLoadException("JobRunner.json must define AuthorizationCheckColumn.");
        }

        if (!IdentifierRegex().IsMatch(AuthorizationCheckColumn))
        {
            throw new ParameterLoadException(
                "AuthorizationCheckColumn must be a simple identifier such as CheckA.");
        }

        if (string.IsNullOrWhiteSpace(PythonExecutablePath))
        {
            throw new ParameterLoadException("JobRunner.json must define PythonExecutablePath.");
        }
    }

    [GeneratedRegex("^[A-Za-z_][A-Za-z0-9_]*$", RegexOptions.CultureInvariant)]
    private static partial Regex IdentifierRegex();
}
