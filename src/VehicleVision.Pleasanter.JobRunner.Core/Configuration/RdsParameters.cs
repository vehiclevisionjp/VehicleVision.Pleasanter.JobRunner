namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public sealed class RdsParameters
{
    public string Dbms { get; init; } = string.Empty;

    public string UserConnectionString { get; init; } = string.Empty;

    public SupportedDbms GetDbms()
    {
        if (Enum.TryParse<SupportedDbms>(Dbms, ignoreCase: true, out var parsed))
        {
            return parsed;
        }

        throw new ParameterLoadException(
            $"Unsupported Dbms value '{Dbms}'. Supported values are SQLServer, PostgreSQL, and MySQL.");
    }

    public void Validate()
    {
        _ = GetDbms();

        if (string.IsNullOrWhiteSpace(UserConnectionString))
        {
            throw new ParameterLoadException("Rds.json must define UserConnectionString.");
        }
    }
}
