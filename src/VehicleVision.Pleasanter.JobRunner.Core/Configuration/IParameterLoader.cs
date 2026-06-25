namespace VehicleVision.Pleasanter.JobRunner.Core.Configuration;

public interface IParameterLoader
{
    RdsParameters LoadRds();

    HangfireRdsParameters LoadHangfireRds();

    JobRunnerParameters LoadJobRunner();
}
