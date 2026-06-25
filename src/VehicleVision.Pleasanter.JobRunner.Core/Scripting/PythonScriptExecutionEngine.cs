using System.Diagnostics;
using System.Text;

namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public sealed class PythonScriptExecutionEngine : IScriptExecutionEngine
{
    private readonly string _pythonExecutablePath;

    public PythonScriptExecutionEngine(string pythonExecutablePath)
    {
        if (string.IsNullOrWhiteSpace(pythonExecutablePath))
        {
            throw new ArgumentException("Python executable path must not be empty.", nameof(pythonExecutablePath));
        }

        _pythonExecutablePath = pythonExecutablePath;
    }

    public ScriptLanguage Language => ScriptLanguage.Python;

    public async Task ExecuteAsync(
        ScriptExecutionRequest request,
        TextWriter output,
        CancellationToken cancellationToken = default)
    {
        if (request.Language != Language)
        {
            throw new ArgumentException($"Unsupported language '{request.Language}'.", nameof(request));
        }

        var tempPath = Path.Combine(Path.GetTempPath(), $"jobrunner-{Guid.NewGuid():N}.py");
        await File.WriteAllTextAsync(tempPath, request.Code, Encoding.UTF8, cancellationToken);

        try
        {
            await RunPythonAsync(tempPath, output, cancellationToken);
        }
        finally
        {
            TryDelete(tempPath);
        }
    }

    private async Task RunPythonAsync(
        string scriptPath,
        TextWriter output,
        CancellationToken cancellationToken)
    {
        using var process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = _pythonExecutablePath,
                RedirectStandardError = true,
                RedirectStandardOutput = true,
                StandardErrorEncoding = Encoding.UTF8,
                StandardOutputEncoding = Encoding.UTF8,
                UseShellExecute = false
            },
            EnableRaisingEvents = true
        };

        process.StartInfo.ArgumentList.Add("-u");
        process.StartInfo.ArgumentList.Add(scriptPath);

        try
        {
            if (!process.Start())
            {
                throw new ScriptExecutionException("Python process could not be started.");
            }
        }
        catch (Exception ex) when (ex is not ScriptExecutionException)
        {
            throw new ScriptExecutionException($"Python executable '{_pythonExecutablePath}' could not be started.", ex);
        }

        using var writeLock = new SemaphoreSlim(1, 1);
        var stdoutTask = PumpAsync(process.StandardOutput, output, prefix: null, writeLock, cancellationToken);
        var stderrTask = PumpAsync(process.StandardError, output, prefix: "[stderr] ", writeLock, cancellationToken);

        try
        {
            await process.WaitForExitAsync(cancellationToken);
            await Task.WhenAll(stdoutTask, stderrTask);
        }
        catch (OperationCanceledException) when (!process.HasExited)
        {
            process.Kill(entireProcessTree: true);
            throw;
        }

        if (process.ExitCode != 0)
        {
            throw new ScriptExecutionException($"Python script exited with code {process.ExitCode}.");
        }
    }

    private static async Task PumpAsync(
        StreamReader reader,
        TextWriter output,
        string? prefix,
        SemaphoreSlim writeLock,
        CancellationToken cancellationToken)
    {
        while (!reader.EndOfStream)
        {
            cancellationToken.ThrowIfCancellationRequested();
            var line = await reader.ReadLineAsync(cancellationToken);
            if (line is null)
            {
                break;
            }

            await writeLock.WaitAsync(cancellationToken);
            try
            {
                await output.WriteLineAsync(prefix is null ? line : prefix + line);
            }
            finally
            {
                writeLock.Release();
            }
        }
    }

    private static void TryDelete(string path)
    {
        try
        {
            if (File.Exists(path))
            {
                File.Delete(path);
            }
        }
        catch (IOException)
        {
        }
        catch (UnauthorizedAccessException)
        {
        }
    }
}
