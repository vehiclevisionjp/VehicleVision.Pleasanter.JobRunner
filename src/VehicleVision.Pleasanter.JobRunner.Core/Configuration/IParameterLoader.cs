namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public interface IParameterLoader
{
    RdsParameters LoadRds();

    JobRunnerParameters LoadJobRunner();
}
