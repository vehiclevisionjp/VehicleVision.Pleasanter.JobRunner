using Moq;
using VehicleVision.Pleasanter.JobRunner.Core.Authentication;

namespace VehicleVision.Pleasanter.JobRunner.Tests.Authentication;

public sealed class PleasanterAuthServiceTests
{
    private const string LoginId = "alice";
    private const string Password = "password";
    private const string PasswordHash = "hash";

    [Fact]
    public async Task AuthenticateAsync_WhenUserCheckIsTrue_AllowsLoginFromUser()
    {
        var user = new PleasanterUserRecord(1, LoginId, PasswordHash, 10, IsUserAuthorized: true);
        var repository = new Mock<IPleasanterAuthRepository>(MockBehavior.Strict);
        repository
            .Setup(x => x.FindUserByLoginIdAsync(LoginId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(user);

        var sut = CreateService(repository.Object);

        var result = await sut.AuthenticateAsync(LoginId, Password);

        Assert.True(result.IsAuthenticated);
        Assert.Equal(AuthorizationSource.User, result.AuthorizationSource);
        Assert.Equal(user.UserId, result.UserId);
        repository.Verify(x => x.HasAuthorizedGroupAsync(It.IsAny<long>(), It.IsAny<CancellationToken>()), Times.Never);
        repository.Verify(x => x.IsDeptAuthorizedAsync(It.IsAny<long>(), It.IsAny<CancellationToken>()), Times.Never);
    }

    [Fact]
    public async Task AuthenticateAsync_WhenUserCheckIsFalseAndGroupCheckIsTrue_AllowsLoginFromGroup()
    {
        var user = new PleasanterUserRecord(1, LoginId, PasswordHash, 10, IsUserAuthorized: false);
        var repository = new Mock<IPleasanterAuthRepository>(MockBehavior.Strict);
        repository
            .Setup(x => x.FindUserByLoginIdAsync(LoginId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(user);
        repository
            .Setup(x => x.HasAuthorizedGroupAsync(user.UserId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        var sut = CreateService(repository.Object);

        var result = await sut.AuthenticateAsync(LoginId, Password);

        Assert.True(result.IsAuthenticated);
        Assert.Equal(AuthorizationSource.Group, result.AuthorizationSource);
        repository.Verify(x => x.IsDeptAuthorizedAsync(It.IsAny<long>(), It.IsAny<CancellationToken>()), Times.Never);
    }

    [Fact]
    public async Task AuthenticateAsync_WhenUserAndGroupChecksAreFalseAndDeptCheckIsTrue_AllowsLoginFromDept()
    {
        var user = new PleasanterUserRecord(1, LoginId, PasswordHash, 10, IsUserAuthorized: false);
        var repository = new Mock<IPleasanterAuthRepository>(MockBehavior.Strict);
        repository
            .Setup(x => x.FindUserByLoginIdAsync(LoginId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(user);
        repository
            .Setup(x => x.HasAuthorizedGroupAsync(user.UserId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(false);
        repository
            .Setup(x => x.IsDeptAuthorizedAsync(user.DeptId!.Value, It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        var sut = CreateService(repository.Object);

        var result = await sut.AuthenticateAsync(LoginId, Password);

        Assert.True(result.IsAuthenticated);
        Assert.Equal(AuthorizationSource.Dept, result.AuthorizationSource);
    }

    [Fact]
    public async Task AuthenticateAsync_WhenAllChecksAreFalse_DeniesLogin()
    {
        var user = new PleasanterUserRecord(1, LoginId, PasswordHash, 10, IsUserAuthorized: false);
        var repository = new Mock<IPleasanterAuthRepository>(MockBehavior.Strict);
        repository
            .Setup(x => x.FindUserByLoginIdAsync(LoginId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(user);
        repository
            .Setup(x => x.HasAuthorizedGroupAsync(user.UserId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(false);
        repository
            .Setup(x => x.IsDeptAuthorizedAsync(user.DeptId!.Value, It.IsAny<CancellationToken>()))
            .ReturnsAsync(false);

        var sut = CreateService(repository.Object);

        var result = await sut.AuthenticateAsync(LoginId, Password);

        Assert.False(result.IsAuthenticated);
        Assert.Equal(AuthorizationSource.None, result.AuthorizationSource);
        Assert.Null(result.UserId);
    }

    private static PleasanterAuthService CreateService(IPleasanterAuthRepository repository)
    {
        var verifier = new Mock<IPasswordHashVerifier>(MockBehavior.Strict);
        verifier
            .Setup(x => x.Verify(Password, PasswordHash))
            .Returns(true);

        return new PleasanterAuthService(repository, verifier.Object);
    }
}
