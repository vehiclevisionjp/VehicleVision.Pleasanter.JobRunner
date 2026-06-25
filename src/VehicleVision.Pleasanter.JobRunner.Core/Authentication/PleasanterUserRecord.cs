namespace VehicleVision.Pleasanter.JobRunner.Core.Authentication;

public sealed record PleasanterUserRecord(
    long UserId,
    string LoginId,
    string PasswordHash,
    long? DeptId,
    bool IsUserAuthorized);
