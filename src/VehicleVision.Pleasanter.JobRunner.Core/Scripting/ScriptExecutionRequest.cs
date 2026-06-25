namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public sealed record ScriptExecutionRequest(
    ScriptLanguage Language,
    string Code,
    string? Name = null);
