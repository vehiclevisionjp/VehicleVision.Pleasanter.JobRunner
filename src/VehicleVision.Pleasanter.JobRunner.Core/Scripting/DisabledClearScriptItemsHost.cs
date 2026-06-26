namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public sealed class DisabledClearScriptItemsHost
{
    public string GetJson(string tableName, string keyColumnName, object? keyValue) => throw CreateException();

    public string WhereJson(string tableName, string columnName, object? value, int limit = 100) => throw CreateException();

    public string QueryJson(string sql, string parametersJson) => throw CreateException();

    public int Execute(string sql, string parametersJson) => throw CreateException();

    public int Update(string tableName, string keyColumnName, object? keyValue, string valuesJson) => throw CreateException();

    public int Insert(string tableName, string valuesJson) => throw CreateException();

    private static ScriptExecutionException CreateException()
    {
        return new ScriptExecutionException("ClearScript items methods require a configured Pleasanter database connection.");
    }
}
