using VehicleVision.Pleasanter.JobRunner.Core.Scripting;

namespace VehicleVision.Pleasanter.JobRunner.Tests.Scripting;

public sealed class ClearScriptExecutionEngineTests
{
    [Fact]
    public async Task ExecuteAsync_ExposesConsoleAndContext()
    {
        var engine = new ClearScriptExecutionEngine();
        using var output = new StringWriter();
        var request = new ScriptExecutionRequest(
            ScriptLanguage.ClearScript,
            """
            context.log("job=" + context.jobName);
            console.log({ total: 2 + 3 });
            context.warn("careful");
            """,
            "clear-test");

        await engine.ExecuteAsync(request, output);

        var text = output.ToString();
        Assert.Contains("job=clear-test", text);
        Assert.Contains("{\"total\":5}", text);
        Assert.Contains("[warn] careful", text);
    }

    [Fact]
    public async Task ExecuteAsync_WhenScriptThrows_WritesDetailsAndWrapsException()
    {
        var engine = new ClearScriptExecutionEngine();
        using var output = new StringWriter();
        var request = new ScriptExecutionRequest(
            ScriptLanguage.ClearScript,
            "throw new Error('boom');",
            "broken-clear-test");

        var exception = await Assert.ThrowsAsync<ScriptExecutionException>(
            () => engine.ExecuteAsync(request, output));

        Assert.Equal("ClearScript execution failed.", exception.Message);
        Assert.Contains("boom", output.ToString());
    }
}
