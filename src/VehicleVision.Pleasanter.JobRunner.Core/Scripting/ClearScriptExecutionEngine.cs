using Microsoft.ClearScript;
using Microsoft.ClearScript.V8;
using VehicleVision.Pleasanter.JobRunner.Core.Data;

namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public sealed class ClearScriptExecutionEngine : IScriptExecutionEngine
{
    private const string BootstrapScript = """
        (() => {
            const encodeObject = value => JSON.stringify(value ?? {});
            const formatValue = value => {
                if (value === undefined) return "undefined";
                if (typeof value === "string") return value;
                try {
                    const json = JSON.stringify(value);
                    return json === undefined ? String(value) : json;
                } catch {
                    return String(value);
                }
            };
            const formatValues = values => values.map(formatValue).join(" ");

            globalThis.console = {
                log: (...values) => __jobrunnerContext.Log(formatValues(values)),
                info: (...values) => __jobrunnerContext.Info(formatValues(values)),
                warn: (...values) => __jobrunnerContext.Warn(formatValues(values)),
                error: (...values) => __jobrunnerContext.Error(formatValues(values))
            };

            globalThis.context = {
                get jobName() { return __jobrunnerContext.JobName; },
                get JobName() { return __jobrunnerContext.JobName; },
                get language() { return __jobrunnerContext.Language; },
                get Language() { return __jobrunnerContext.Language; },
                now: () => new Date(__jobrunnerContext.NowIso()),
                Now: () => new Date(__jobrunnerContext.NowIso()),
                log: (...values) => __jobrunnerContext.Log(formatValues(values)),
                Log: (...values) => __jobrunnerContext.Log(formatValues(values)),
                info: (...values) => __jobrunnerContext.Info(formatValues(values)),
                Info: (...values) => __jobrunnerContext.Info(formatValues(values)),
                warn: (...values) => __jobrunnerContext.Warn(formatValues(values)),
                Warn: (...values) => __jobrunnerContext.Warn(formatValues(values)),
                error: (...values) => __jobrunnerContext.Error(formatValues(values)),
                Error: (...values) => __jobrunnerContext.Error(formatValues(values))
            };

            globalThis.items = {
                get: (tableName, keyColumnName, keyValue) =>
                    JSON.parse(__jobrunnerItems.GetJson(tableName, keyColumnName, keyValue)),
                Get: (tableName, keyColumnName, keyValue) =>
                    JSON.parse(__jobrunnerItems.GetJson(tableName, keyColumnName, keyValue)),
                where: (tableName, columnName, value, limit = 100) =>
                    JSON.parse(__jobrunnerItems.WhereJson(tableName, columnName, value, limit)),
                Where: (tableName, columnName, value, limit = 100) =>
                    JSON.parse(__jobrunnerItems.WhereJson(tableName, columnName, value, limit)),
                query: (sql, parameters = {}) =>
                    JSON.parse(__jobrunnerItems.QueryJson(sql, encodeObject(parameters))),
                Query: (sql, parameters = {}) =>
                    JSON.parse(__jobrunnerItems.QueryJson(sql, encodeObject(parameters))),
                execute: (sql, parameters = {}) =>
                    __jobrunnerItems.Execute(sql, encodeObject(parameters)),
                Execute: (sql, parameters = {}) =>
                    __jobrunnerItems.Execute(sql, encodeObject(parameters)),
                update: (tableName, keyColumnName, keyValue, values) =>
                    __jobrunnerItems.Update(tableName, keyColumnName, keyValue, encodeObject(values)),
                Update: (tableName, keyColumnName, keyValue, values) =>
                    __jobrunnerItems.Update(tableName, keyColumnName, keyValue, encodeObject(values)),
                insert: (tableName, values) =>
                    __jobrunnerItems.Insert(tableName, encodeObject(values)),
                Insert: (tableName, values) =>
                    __jobrunnerItems.Insert(tableName, encodeObject(values))
            };
        })();
        """;

    private readonly IDbConnectionFactory? _connectionFactory;

    public ClearScriptExecutionEngine()
    {
    }

    public ClearScriptExecutionEngine(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory ?? throw new ArgumentNullException(nameof(connectionFactory));
    }

    public ScriptLanguage Language => ScriptLanguage.ClearScript;

    public async Task ExecuteAsync(
        ScriptExecutionRequest request,
        TextWriter output,
        CancellationToken cancellationToken = default)
    {
        if (request.Language != Language)
        {
            throw new ArgumentException($"Unsupported language '{request.Language}'.", nameof(request));
        }

        cancellationToken.ThrowIfCancellationRequested();

        using var engine = CreateEngine(cancellationToken);
        engine.AddHostObject("__jobrunnerContext", new ClearScriptHostContext(request, output));
        engine.AddHostObject("__jobrunnerItems", CreateItemsHost());
        engine.Execute("__jobrunner_bootstrap.js", BootstrapScript);

        try
        {
            engine.Execute(request.Name ?? "jobrunner-clearscript.js", request.Code);
            await output.FlushAsync(cancellationToken);
        }
        catch (ScriptInterruptedException ex) when (cancellationToken.IsCancellationRequested)
        {
            throw new OperationCanceledException("ClearScript execution was canceled.", ex, cancellationToken);
        }
        catch (ScriptEngineException ex)
        {
            var details = string.IsNullOrWhiteSpace(ex.ErrorDetails) ? ex.Message : ex.ErrorDetails;
            await output.WriteLineAsync(details);
            throw new ScriptExecutionException("ClearScript execution failed.", ex);
        }
    }

    private static V8ScriptEngine CreateEngine(CancellationToken cancellationToken)
    {
        var engine = new V8ScriptEngine(
            V8ScriptEngineFlags.EnableDateTimeConversion
            | V8ScriptEngineFlags.EnableArrayConversion
            | V8ScriptEngineFlags.EnableStringifyEnhancements);

        engine.ContinuationCallback = () => !cancellationToken.IsCancellationRequested;
        return engine;
    }

    private object CreateItemsHost()
    {
        return _connectionFactory is null
            ? new DisabledClearScriptItemsHost()
            : new ClearScriptItemsHost(_connectionFactory);
    }
}
