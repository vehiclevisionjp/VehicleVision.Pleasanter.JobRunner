using System.Globalization;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using Microsoft.CodeAnalysis.Scripting;

namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public sealed class CSharpScriptExecutionEngine : IScriptExecutionEngine
{
    private static readonly SemaphoreSlim ConsoleRedirectLock = new(1, 1);

    private static readonly ScriptOptions Options = ScriptOptions.Default
        .AddReferences(
            typeof(object).Assembly,
            typeof(Console).Assembly,
            typeof(Enumerable).Assembly,
            typeof(Task).Assembly)
        .AddImports(
            "System",
            "System.Collections.Generic",
            "System.Globalization",
            "System.IO",
            "System.Linq",
            "System.Threading",
            "System.Threading.Tasks");

    public ScriptLanguage Language => ScriptLanguage.CSharp;

    public async Task ExecuteAsync(
        ScriptExecutionRequest request,
        TextWriter output,
        CancellationToken cancellationToken = default)
    {
        if (request.Language != Language)
        {
            throw new ArgumentException($"Unsupported language '{request.Language}'.", nameof(request));
        }

        await ConsoleRedirectLock.WaitAsync(cancellationToken);
        var previousOut = Console.Out;
        var previousError = Console.Error;

        try
        {
            Console.SetOut(output);
            Console.SetError(output);

            var result = await CSharpScript.EvaluateAsync<object?>(
                request.Code,
                Options,
                cancellationToken: cancellationToken);

            if (result is not null)
            {
                await output.WriteLineAsync(Convert.ToString(result, CultureInfo.InvariantCulture));
            }
        }
        catch (CompilationErrorException ex)
        {
            foreach (var diagnostic in ex.Diagnostics)
            {
                await output.WriteLineAsync(diagnostic.ToString());
            }

            throw new ScriptExecutionException("C# script compilation failed.", ex);
        }
        finally
        {
            Console.SetOut(previousOut);
            Console.SetError(previousError);
            ConsoleRedirectLock.Release();
        }
    }
}
