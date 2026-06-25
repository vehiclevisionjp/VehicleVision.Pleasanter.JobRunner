using System.Text.RegularExpressions;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;

namespace VehicleVision.Pleasanter.JobRunner.Core.Data;

public sealed partial class SqlDialect
{
    private SqlDialect(SupportedDbms dbms)
    {
        Dbms = dbms;
    }

    public SupportedDbms Dbms { get; }

    public static SqlDialect For(SupportedDbms dbms) => new(dbms);

    public string QuoteIdentifier(string identifier)
    {
        if (string.IsNullOrWhiteSpace(identifier) || !IdentifierRegex().IsMatch(identifier))
        {
            throw new ArgumentException($"Invalid SQL identifier '{identifier}'.", nameof(identifier));
        }

        return Dbms switch
        {
            SupportedDbms.SQLServer => $"[{identifier}]",
            SupportedDbms.PostgreSQL => $"\"{identifier}\"",
            SupportedDbms.MySQL => $"`{identifier}`",
            _ => throw new NotSupportedException($"Unsupported Dbms '{Dbms}'.")
        };
    }

    public string Qualified(string alias, string identifier)
    {
        if (string.IsNullOrWhiteSpace(alias) || !IdentifierRegex().IsMatch(alias))
        {
            throw new ArgumentException($"Invalid SQL alias '{alias}'.", nameof(alias));
        }

        return $"{alias}.{QuoteIdentifier(identifier)}";
    }

    [GeneratedRegex("^[A-Za-z_][A-Za-z0-9_]*$", RegexOptions.CultureInvariant)]
    private static partial Regex IdentifierRegex();
}
