namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public sealed class HangfireRdsParameters
{
    public const string MemoryDbms = "Memory";

    public string Dbms { get; init; } = MemoryDbms;

    public string ConnectionString { get; init; } = string.Empty;

    public bool UsesMemoryStorage()
    {
        return string.IsNullOrWhiteSpace(Dbms)
            || string.Equals(Dbms, MemoryDbms, StringComparison.OrdinalIgnoreCase);
    }

    public SupportedDbms GetDbms()
    {
        if (Enum.TryParse<SupportedDbms>(Dbms, ignoreCase: true, out var parsed))
        {
            return parsed;
        }

        throw new ParameterLoadException(
            $"Unsupported HangfireRds Dbms value '{Dbms}'. Supported values are Memory, SQLServer, and PostgreSQL.");
    }

    public void Validate()
    {
        if (UsesMemoryStorage())
        {
            return;
        }

        var dbms = GetDbms();
        if (dbms is SupportedDbms.MySQL)
        {
            throw new ParameterLoadException(
                "HangfireRds does not support MySQL storage in this project. Use Memory, SQLServer, or PostgreSQL.");
        }

        if (dbms is not SupportedDbms.SQLServer and not SupportedDbms.PostgreSQL)
        {
            throw new ParameterLoadException(
                "HangfireRds currently supports SQLServer and PostgreSQL only. Use Memory, SQLServer, or PostgreSQL.");
        }

        if (string.IsNullOrWhiteSpace(ConnectionString))
        {
            throw new ParameterLoadException(
                "HangfireRds.json must define ConnectionString when Dbms is SQLServer or PostgreSQL.");
        }
    }
}
