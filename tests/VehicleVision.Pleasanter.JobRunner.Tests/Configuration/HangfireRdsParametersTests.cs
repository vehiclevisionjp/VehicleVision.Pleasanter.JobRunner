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

    [Theory]
    [InlineData("SQLServer")]
    [InlineData("PostgreSQL")]
    public void Validate_WhenDbmsIsDurableStorage_RequiresConnectionString(string dbms)
    {
        var parameters = new HangfireRdsParameters
        {
            Dbms = dbms,
            ConnectionString = string.Empty
        };

        Assert.Throws<ParameterLoadException>(parameters.Validate);
    }

    [Theory]
    [InlineData("SQLServer", "Server=db;Database=hangfire")]
    [InlineData("PostgreSQL", "Host=db;Database=hangfire")]
    public void Validate_WhenDbmsIsSupportedDurableStorage_AllowsConnectionString(string dbms, string connectionString)
    {
        var parameters = new HangfireRdsParameters
        {
            Dbms = dbms,
            ConnectionString = connectionString
        };

        parameters.Validate();
    }

    [Fact]
    public void Validate_WhenDbmsIsMySql_ThrowsUnsupportedStorageProvider()
    {
        var parameters = new HangfireRdsParameters
        {
            Dbms = "MySQL",
            ConnectionString = "Server=db;Database=hangfire"
        };

        var exception = Assert.Throws<ParameterLoadException>(parameters.Validate);
        Assert.Contains("does not support MySQL", exception.Message);
    }
}
