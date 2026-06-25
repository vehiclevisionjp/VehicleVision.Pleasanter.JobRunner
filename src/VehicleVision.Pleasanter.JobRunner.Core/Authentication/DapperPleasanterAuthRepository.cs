using System.Data;
using System.Data.Common;
using Dapper;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;
using VehicleVision.Pleasanter.JobRunner.Core.Data;

namespace VehicleVision.Pleasanter.JobRunner.Core.Authentication;

public sealed class DapperPleasanterAuthRepository : IPleasanterAuthRepository
{
    private readonly IDbConnectionFactory _connectionFactory;
    private readonly SqlDialect _dialect;
    private readonly string _usersAuthorizationCheckColumn;
    private readonly string _groupsAuthorizationCheckColumn;
    private readonly string _deptsAuthorizationCheckColumn;

    public DapperPleasanterAuthRepository(
        IDbConnectionFactory connectionFactory,
        JobRunnerParameters parameters)
    {
        _connectionFactory = connectionFactory ?? throw new ArgumentNullException(nameof(connectionFactory));
        ArgumentNullException.ThrowIfNull(parameters);
        parameters.Validate();

        _dialect = SqlDialect.For(_connectionFactory.Dbms);
        _usersAuthorizationCheckColumn = parameters.GetUsersAuthorizationCheckColumn();
        _groupsAuthorizationCheckColumn = parameters.GetGroupsAuthorizationCheckColumn();
        _deptsAuthorizationCheckColumn = parameters.GetDeptsAuthorizationCheckColumn();
    }

    public async Task<PleasanterUserRecord?> FindUserByLoginIdAsync(
        string loginId,
        CancellationToken cancellationToken = default)
    {
        const string authorizationAlias = "AuthorizationValue";
        var sql = $"""
            SELECT
                {_dialect.Qualified("u", "UserId")} AS UserId,
                {_dialect.Qualified("u", "LoginId")} AS LoginId,
                {_dialect.Qualified("u", "PasswordHash")} AS PasswordHash,
                {_dialect.Qualified("u", "DeptId")} AS DeptId,
                {_dialect.Qualified("u", _usersAuthorizationCheckColumn)} AS {authorizationAlias}
            FROM {_dialect.QuoteIdentifier("Users")} AS u
            WHERE {_dialect.Qualified("u", "LoginId")} = @LoginId
            """;

        using var connection = _connectionFactory.CreateConnection();
        await OpenAsync(connection, cancellationToken);

        var row = await connection.QuerySingleOrDefaultAsync<UserAuthRow>(new CommandDefinition(
            sql,
            new { LoginId = loginId },
            cancellationToken: cancellationToken));

        return row is null
            ? null
            : new PleasanterUserRecord(
                row.UserId,
                row.LoginId,
                row.PasswordHash,
                row.DeptId,
                DbValueConverter.ToBoolean(row.AuthorizationValue));
    }

    public async Task<bool> HasAuthorizedGroupAsync(long userId, CancellationToken cancellationToken = default)
    {
        var sql = $"""
            SELECT {_dialect.Qualified("g", _groupsAuthorizationCheckColumn)} AS AuthorizationValue
            FROM {_dialect.QuoteIdentifier("Groups")} AS g
            INNER JOIN {_dialect.QuoteIdentifier("Members")} AS m
                ON {_dialect.Qualified("m", "GroupId")} = {_dialect.Qualified("g", "GroupId")}
            WHERE {_dialect.Qualified("m", "UserId")} = @UserId
            """;

        using var connection = _connectionFactory.CreateConnection();
        await OpenAsync(connection, cancellationToken);

        var values = await connection.QueryAsync<AuthorizationValueRow>(new CommandDefinition(
            sql,
            new { UserId = userId },
            cancellationToken: cancellationToken));

        return values.Any(row => DbValueConverter.ToBoolean(row.AuthorizationValue));
    }

    public async Task<bool> IsDeptAuthorizedAsync(long deptId, CancellationToken cancellationToken = default)
    {
        var sql = $"""
            SELECT {_dialect.Qualified("d", _deptsAuthorizationCheckColumn)} AS AuthorizationValue
            FROM {_dialect.QuoteIdentifier("Depts")} AS d
            WHERE {_dialect.Qualified("d", "DeptId")} = @DeptId
            """;

        using var connection = _connectionFactory.CreateConnection();
        await OpenAsync(connection, cancellationToken);

        var row = await connection.QuerySingleOrDefaultAsync<AuthorizationValueRow>(new CommandDefinition(
            sql,
            new { DeptId = deptId },
            cancellationToken: cancellationToken));

        return DbValueConverter.ToBoolean(row?.AuthorizationValue);
    }

    private static async Task OpenAsync(IDbConnection connection, CancellationToken cancellationToken)
    {
        if (connection is DbConnection dbConnection)
        {
            await dbConnection.OpenAsync(cancellationToken);
            return;
        }

        connection.Open();
    }

    private sealed class UserAuthRow
    {
        public long UserId { get; init; }

        public string LoginId { get; init; } = string.Empty;

        public string PasswordHash { get; init; } = string.Empty;

        public long? DeptId { get; init; }

        public object? AuthorizationValue { get; init; }
    }

    private sealed class AuthorizationValueRow
    {
        public object? AuthorizationValue { get; init; }
    }
}
