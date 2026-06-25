namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public sealed class ParameterLoadException : Exception
{
    public ParameterLoadException(string message)
        : base(message)
    {
    }

    public ParameterLoadException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
