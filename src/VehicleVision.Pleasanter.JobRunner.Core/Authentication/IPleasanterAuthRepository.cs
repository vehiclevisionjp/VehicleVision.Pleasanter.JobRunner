namespace VehicleVision.Pleasanter.JobRunner.Core.Authentication;

public interface IPleasanterAuthRepository
{
    Task<PleasanterUserRecord?> FindUserByLoginIdAsync(string loginId, CancellationToken cancellationToken = default);

    Task<bool> HasAuthorizedGroupAsync(long userId, CancellationToken cancellationToken = default);

    Task<bool> IsDeptAuthorizedAsync(long deptId, CancellationToken cancellationToken = default);
}
