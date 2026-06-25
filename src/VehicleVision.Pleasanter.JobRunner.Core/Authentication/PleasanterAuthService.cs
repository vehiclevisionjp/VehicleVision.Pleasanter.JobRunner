namespace VehicleVision.Pleasanter.JobRunner.Core.Authentication;

public sealed class PleasanterAuthService
{
    private readonly IPleasanterAuthRepository _repository;
    private readonly IPasswordHashVerifier _passwordHashVerifier;

    public PleasanterAuthService(
        IPleasanterAuthRepository repository,
        IPasswordHashVerifier passwordHashVerifier)
    {
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        _passwordHashVerifier = passwordHashVerifier ?? throw new ArgumentNullException(nameof(passwordHashVerifier));
    }

    public async Task<PleasanterAuthResult> AuthenticateAsync(
        string loginId,
        string password,
        CancellationToken cancellationToken = default)
    {
        if (string.IsNullOrWhiteSpace(loginId) || string.IsNullOrEmpty(password))
        {
            return PleasanterAuthResult.Failure("Login ID and password are required.");
        }

        var user = await _repository.FindUserByLoginIdAsync(loginId, cancellationToken);
        if (user is null)
        {
            return PleasanterAuthResult.Failure("Invalid login ID or password.");
        }

        if (!_passwordHashVerifier.Verify(password, user.PasswordHash))
        {
            return PleasanterAuthResult.Failure("Invalid login ID or password.");
        }

        if (user.IsUserAuthorized)
        {
            return PleasanterAuthResult.Success(user, AuthorizationSource.User);
        }

        if (await _repository.HasAuthorizedGroupAsync(user.UserId, cancellationToken))
        {
            return PleasanterAuthResult.Success(user, AuthorizationSource.Group);
        }

        if (user.DeptId.HasValue
            && await _repository.IsDeptAuthorizedAsync(user.DeptId.Value, cancellationToken))
        {
            return PleasanterAuthResult.Success(user, AuthorizationSource.Dept);
        }

        return PleasanterAuthResult.Failure("This Pleasanter account is not authorized to use JobRunner.");
    }
}
