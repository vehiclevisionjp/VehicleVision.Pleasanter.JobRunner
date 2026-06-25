namespace VehicleVision.Pleasanter.JobRunner.Core.Authentication;

public interface IPasswordHashVerifier
{
    bool Verify(string password, string passwordHash);
}
