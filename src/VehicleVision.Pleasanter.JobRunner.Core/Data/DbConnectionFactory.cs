using System.Data;
using Microsoft.Data.SqlClient;
using MySqlConnector;
using Npgsql;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;

namespace VehicleVision.Pleasanter.JobRunner.Core.Data;

public sealed class DbConnectionFactory : IDbConnectionFactory
{
    private readonly RdsParameters _parameters;

    public DbConnectionFactory(RdsParameters parameters)
    {
        _parameters = parameters ?? throw new ArgumentNullException(nameof(parameters));
        _parameters.Validate();
        Dbms = _parameters.GetDbms();
    }

    public SupportedDbms Dbms { get; }

    public IDbConnection CreateConnection()
    {
        return Dbms switch
        {
            SupportedDbms.SQLServer => new SqlConnection(_parameters.UserConnectionString),
            SupportedDbms.PostgreSQL => new NpgsqlConnection(_parameters.UserConnectionString),
            SupportedDbms.MySQL => new MySqlConnection(_parameters.UserConnectionString),
            _ => throw new NotSupportedException($"Unsupported Dbms '{Dbms}'.")
        };
    }
}

