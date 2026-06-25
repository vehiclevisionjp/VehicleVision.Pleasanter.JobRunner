using System.Text;
using Hangfire.Console;
using Hangfire.Server;

namespace VehicleVision.Pleasanter.JobRunner.Web.Jobs;

public sealed class HangfireConsoleTextWriter : TextWriter
{
    private readonly PerformContext? _context;
    private readonly TextWriter _fallback;
    private readonly StringBuilder _buffer = new();
    private readonly object _gate = new();

    public HangfireConsoleTextWriter(PerformContext? context, TextWriter? fallback = null)
    {
        _context = context;
        _fallback = fallback ?? Console.Out;
    }

    public override Encoding Encoding => Encoding.UTF8;

    public override void Write(char value)
    {
        lock (_gate)
        {
            if (value == '\n')
            {
                FlushBuffer();
                return;
            }

            if (value != '\r')
            {
                _buffer.Append(value);
            }
        }
    }

    public override void Write(string? value)
    {
        if (value is null)
        {
            return;
        }

        foreach (var ch in value)
        {
            Write(ch);
        }
    }

    public override void WriteLine(string? value)
    {
        lock (_gate)
        {
            if (!string.IsNullOrEmpty(value))
            {
                _buffer.Append(value);
            }

            FlushBuffer();
        }
    }

    public override Task WriteLineAsync(string? value)
    {
        WriteLine(value);
        return Task.CompletedTask;
    }

    protected override void Dispose(bool disposing)
    {
        if (disposing)
        {
            lock (_gate)
            {
                if (_buffer.Length > 0)
                {
                    FlushBuffer();
                }
            }
        }

        base.Dispose(disposing);
    }

    private void FlushBuffer()
    {
        var line = _buffer.ToString();
        _buffer.Clear();

        if (_context is not null)
        {
            _context.WriteLine(line);
        }
        else
        {
            _fallback.WriteLine(line);
        }
    }
}
