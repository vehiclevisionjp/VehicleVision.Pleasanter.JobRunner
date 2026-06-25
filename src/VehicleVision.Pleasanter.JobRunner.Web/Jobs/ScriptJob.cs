using Hangfire.Server;
using VehicleVision.Pleasanter.JobRunner.Core.Scripting;

namespace VehicleVision.Pleasanter.JobRunner.Web.Jobs;

public sealed class ScriptJob
{
    private readonly ScriptExecutionDispatcher _dispatcher;

    public ScriptJob(ScriptExecutionDispatcher dispatcher)
    {
        _dispatcher = dispatcher;
    }

    public async Task RunAsync(ScriptExecutionRequest request, PerformContext? context = null)
    {
        using var writer = new HangfireConsoleTextWriter(context);
        await writer.WriteLineAsync($"Starting {request.Language} script: {request.Name ?? "untitled"}");
        await _dispatcher.ExecuteAsync(request, writer);
        await writer.WriteLineAsync("Script completed.");
    }
}
