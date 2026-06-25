namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public interface IScriptExecutionEngine
{
    ScriptLanguage Language { get; }

    Task ExecuteAsync(
        ScriptExecutionRequest request,
        TextWriter output,
        CancellationToken cancellationToken = default);
}
