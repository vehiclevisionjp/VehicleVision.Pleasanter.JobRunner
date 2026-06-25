namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public sealed class ScriptExecutionDispatcher
{
    private readonly IReadOnlyDictionary<ScriptLanguage, IScriptExecutionEngine> _engines;

    public ScriptExecutionDispatcher(IEnumerable<IScriptExecutionEngine> engines)
    {
        _engines = engines.ToDictionary(x => x.Language);
    }

    public Task ExecuteAsync(
        ScriptExecutionRequest request,
        TextWriter output,
        CancellationToken cancellationToken = default)
    {
        if (!_engines.TryGetValue(request.Language, out var engine))
        {
            throw new ScriptExecutionException($"No script engine is registered for '{request.Language}'.");
        }

        return engine.ExecuteAsync(request, output, cancellationToken);
    }
}
