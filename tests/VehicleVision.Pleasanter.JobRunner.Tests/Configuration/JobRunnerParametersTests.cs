using VehicleVision.Pleasanter.JobRunner.Core.Configuration;

namespace VehicleVision.Pleasanter.JobRunner.Tests.Configuration;

public sealed class JobRunnerParametersTests
{
    [Fact]
    public void Validate_WhenLegacyAuthorizationCheckColumnIsSet_UsesItForAllTables()
    {
        var parameters = new JobRunnerParameters
        {
            AuthorizationCheckColumn = "CheckZ",
            PythonExecutablePath = "python"
        };

        parameters.Validate();

        Assert.Equal("CheckZ", parameters.GetUsersAuthorizationCheckColumn());
        Assert.Equal("CheckZ", parameters.GetGroupsAuthorizationCheckColumn());
        Assert.Equal("CheckZ", parameters.GetDeptsAuthorizationCheckColumn());
    }

    [Fact]
    public void Validate_WhenTableSpecificColumnsAreSet_UsesIndependentColumns()
    {
        var parameters = new JobRunnerParameters
        {
            UsersAuthorizationCheckColumn = "CheckA",
            GroupsAuthorizationCheckColumn = "CheckB",
            DeptsAuthorizationCheckColumn = "CheckC",
            PythonExecutablePath = "python"
        };

        parameters.Validate();

        Assert.Equal("CheckA", parameters.GetUsersAuthorizationCheckColumn());
        Assert.Equal("CheckB", parameters.GetGroupsAuthorizationCheckColumn());
        Assert.Equal("CheckC", parameters.GetDeptsAuthorizationCheckColumn());
    }

    [Fact]
    public void Validate_WhenTableSpecificColumnIsInvalid_Throws()
    {
        var parameters = new JobRunnerParameters
        {
            GroupsAuthorizationCheckColumn = "CheckA;DROP",
            PythonExecutablePath = "python"
        };

        Assert.Throws<ParameterLoadException>(parameters.Validate);
    }
}
