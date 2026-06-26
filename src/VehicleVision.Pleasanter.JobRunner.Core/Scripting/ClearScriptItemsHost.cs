using System.Data;
using System.Text.Json;
using Dapper;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;
using VehicleVision.Pleasanter.JobRunner.Core.Data;

namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public sealed class ClearScriptItemsHost
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);

    private readonly IDbConnectionFactory _connectionFactory;
    private readonly SqlDialect _dialect;

    public ClearScriptItemsHost(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory ?? throw new ArgumentNullException(nameof(connectionFactory));
        _dialect = SqlDialect.For(_connectionFactory.Dbms);
    }

    public string GetJson(string tableName, string keyColumnName, object? keyValue)
    {
        var rows = QueryRows(BuildSelectByColumnSql(tableName, keyColumnName, 1), new { Value = keyValue });
        return Serialize(rows.FirstOrDefault());
    }

    public string WhereJson(string tableName, string columnName, object? value, int limit = 100)
    {
        var rows = QueryRows(BuildSelectByColumnSql(tableName, columnName, ClampLimit(limit)), new { Value = value });
        return Serialize(rows);
    }

    public string QueryJson(string sql, string parametersJson)
    {
        EnsureSql(sql);
        var rows = QueryRows(sql, ParseParameters(parametersJson));
        return Serialize(rows);
    }

    public int Execute(string sql, string parametersJson)
    {
        EnsureSql(sql);
        using var connection = OpenConnection();
        return connection.Execute(sql, ParseParameters(parametersJson));
    }

    public int Update(string tableName, string keyColumnName, object? keyValue, string valuesJson)
    {
        var values = ParseParameters(valuesJson);
        var valueNames = values.ParameterNames.ToArray();
        if (valueNames.Length == 0)
        {
            throw new ScriptExecutionException("items.update requires at least one value.");
        }

        var parameters = new DynamicParameters();
        parameters.Add("keyValue", keyValue);

        var assignments = new List<string>();
        for (var i = 0; i < valueNames.Length; i++)
        {
            var parameterName = $"value{i}";
            assignments.Add($"{_dialect.QuoteIdentifier(valueNames[i])} = @{parameterName}");
            parameters.Add(parameterName, values.Get<object?>(valueNames[i]));
        }

        var sql = $"""
            UPDATE {_dialect.QuoteIdentifier(tableName)}
            SET {string.Join(", ", assignments)}
            WHERE {_dialect.QuoteIdentifier(keyColumnName)} = @keyValue
            """;

        using var connection = OpenConnection();
        return connection.Execute(sql, parameters);
    }

    public int Insert(string tableName, string valuesJson)
    {
        var values = ParseParameters(valuesJson);
        var valueNames = values.ParameterNames.ToArray();
        if (valueNames.Length == 0)
        {
            throw new ScriptExecutionException("items.insert requires at least one value.");
        }

        var columns = valueNames
            .Select(name => _dialect.QuoteIdentifier(name))
            .ToArray();
        var parameterNames = valueNames
            .Select(name => $"@{name}")
            .ToArray();

        var sql = $"""
            INSERT INTO {_dialect.QuoteIdentifier(tableName)} ({string.Join(", ", columns)})
            VALUES ({string.Join(", ", parameterNames)})
            """;

        using var connection = OpenConnection();
        return connection.Execute(sql, values);
    }

    private string BuildSelectByColumnSql(string tableName, string columnName, int limit)
    {
        var table = _dialect.QuoteIdentifier(tableName);
        var column = _dialect.QuoteIdentifier(columnName);

        return _connectionFactory.Dbms == SupportedDbms.SQLServer
            ? $"SELECT TOP ({limit}) * FROM {table} WHERE {column} = @Value"
            : $"SELECT * FROM {table} WHERE {column} = @Value LIMIT {limit}";
    }

    private IReadOnlyList<IDictionary<string, object?>> QueryRows(string sql, object? parameters)
    {
        using var connection = OpenConnection();
        return connection.Query(sql, parameters)
            .Select(row => NormalizeRow((IDictionary<string, object?>)row))
            .ToArray();
    }

    private IDbConnection OpenConnection()
    {
        var connection = _connectionFactory.CreateConnection();
        connection.Open();
        return connection;
    }

    private static IDictionary<string, object?> NormalizeRow(IDictionary<string, object?> row)
    {
        return row.ToDictionary(pair => pair.Key, pair => NormalizeDbValue(pair.Value));
    }

    private static object? NormalizeDbValue(object? value)
    {
        if (value is null or DBNull)
        {
            return null;
        }

        if (value is DateTime dateTime)
        {
            return dateTime.ToString("O");
        }

        if (value is DateTimeOffset dateTimeOffset)
        {
            return dateTimeOffset.ToString("O");
        }

        if (value is byte[] bytes)
        {
            return Convert.ToBase64String(bytes);
        }

        return value;
    }

    private static DynamicParameters ParseParameters(string parametersJson)
    {
        var parameters = new DynamicParameters();
        if (string.IsNullOrWhiteSpace(parametersJson) || parametersJson == "null")
        {
            return parameters;
        }

        using var document = JsonDocument.Parse(parametersJson);
        if (document.RootElement.ValueKind != JsonValueKind.Object)
        {
            throw new ScriptExecutionException("SQL parameters must be a JSON object.");
        }

        foreach (var property in document.RootElement.EnumerateObject())
        {
            parameters.Add(property.Name, ConvertJsonElement(property.Value));
        }

        return parameters;
    }

    private static object? ConvertJsonElement(JsonElement element)
    {
        return element.ValueKind switch
        {
            JsonValueKind.Null => null,
            JsonValueKind.True => true,
            JsonValueKind.False => false,
            JsonValueKind.String => element.GetString(),
            JsonValueKind.Number when element.TryGetInt64(out var integer) => integer,
            JsonValueKind.Number when element.TryGetDecimal(out var number) => number,
            JsonValueKind.Array => element.GetRawText(),
            JsonValueKind.Object => element.GetRawText(),
            _ => null
        };
    }

    private static string Serialize(object? value) => JsonSerializer.Serialize(value, JsonOptions);

    private static void EnsureSql(string sql)
    {
        if (string.IsNullOrWhiteSpace(sql))
        {
            throw new ScriptExecutionException("SQL must not be empty.");
        }
    }

    private static int ClampLimit(int limit) => Math.Clamp(limit, 1, 1000);
}
