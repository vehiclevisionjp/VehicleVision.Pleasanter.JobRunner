using VehicleVision.Pleasanter.JobRunner.Core.Configuration;

namespace VehicleVision.Pleasanter.JobRunner.Tests.Configuration;

public sealed class HangfireRdsParametersTests
{
    [Fact]
    public void Validate_WhenDbmsIsMemory_DoesNotRequireConnectionString()
    {
        var parameters = new HangfireRdsParameters
        {
            Dbms = "Memory",
            ConnectionString = string.Empty
        };

        parameters.Validate();
    }

    [Fact]
    public void Validate_WhenDbmsIsSqlServer_RequiresConnectionString()
    {
        var parameters = new HangfireRdsParameters
        {
            Dbms = "SQLServer",
            ConnectionString = string.Empty
        };

        Assert.Throws<ParameterLoadException>(parameters.Validate);
    }

    [Fact]
    public void Validate_WhenDbmsIsPostgreSql_ThrowsUnsupportedStorageProvider()
    {
        var parameters = new HangfireRdsParameters
        {
            Dbms = "PostgreSQL",
            ConnectionString = "Host=db;Database=hangfire"
        };

        Assert.Throws<ParameterLoadException>(parameters.Validate);
    }
}
