namespace VehicleVision.Pleasanter.JobRunner.Core.Authentication;

public sealed record PleasanterAuthResult(
    bool IsAuthenticated,
    long? UserId,
    string? LoginId,
    AuthorizationSource AuthorizationSource,
    string Message)
{
    public static PleasanterAuthResult Success(PleasanterUserRecord user, AuthorizationSource source)
    {
        return new PleasanterAuthResult(
            IsAuthenticated: true,
            UserId: user.UserId,
            LoginId: user.LoginId,
            AuthorizationSource: source,
            Message: "Authenticated.");
    }

    public static PleasanterAuthResult Failure(string message)
    {
        return new PleasanterAuthResult(
            IsAuthenticated: false,
            UserId: null,
            LoginId: null,
            AuthorizationSource: AuthorizationSource.None,
            Message: message);
    }
}
