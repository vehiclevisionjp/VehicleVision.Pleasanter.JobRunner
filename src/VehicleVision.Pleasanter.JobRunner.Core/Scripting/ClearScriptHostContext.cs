using System.Globalization;

namespace VehicleVision.Pleasanter.JobRunner.Core.Scripting;

public sealed class ClearScriptHostContext
{
    private readonly ScriptExecutionRequest _request;
    private readonly TextWriter _output;
    private readonly object _gate = new();

    public ClearScriptHostContext(ScriptExecutionRequest request, TextWriter output)
    {
        _request = request ?? throw new ArgumentNullException(nameof(request));
        _output = output ?? throw new ArgumentNullException(nameof(output));
    }

    public string? JobName => _request.Name;

    public string Language => _request.Language.ToString();

    public string NowIso() => DateTimeOffset.Now.ToString("O", CultureInfo.InvariantCulture);

    public void Log(object? value) => WriteLine(null, value);

    public void Info(object? value) => WriteLine(null, value);

    public void Warn(object? value) => WriteLine("[warn] ", value);

    public void Error(object? value) => WriteLine("[error] ", value);

    private void WriteLine(string? prefix, object? value)
    {
        var message = Convert.ToString(value, CultureInfo.InvariantCulture) ?? string.Empty;
        lock (_gate)
        {
            _output.WriteLine(prefix is null ? message : prefix + message);
        }
    }
}
