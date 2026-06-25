using Microsoft.Extensions.Configuration;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;

namespace VehicleVision.Pleasanter.JobRunner.Tests.Configuration;

public sealed class ConfigurationParameterLoaderTests
{
    [Fact]
    public void LoadRds_WhenConfigurationContainsOverrides_UsesConfigurationValues()
    {
        var loader = CreateLoader(new Dictionary<string, string?>
        {
            ["JobRunner:Rds:Dbms"] = "PostgreSQL",
            ["JobRunner:Rds:UserConnectionString"] = "Host=db;Database=pleasanter"
        });

        var result = loader.LoadRds();

        Assert.Equal("PostgreSQL", result.Dbms);
        Assert.Equal("Host=db;Database=pleasanter", result.UserConnectionString);
    }

    [Fact]
    public void LoadJobRunner_WhenConfigurationContainsIndependentCheckColumns_UsesConfigurationValues()
    {
        var loader = CreateLoader(new Dictionary<string, string?>
        {
            ["JobRunner:Authorization:UsersCheckColumn"] = "CheckA",
            ["JobRunner:Authorization:GroupsCheckColumn"] = "CheckB",
            ["JobRunner:Authorization:DeptsCheckColumn"] = "CheckC",
            ["JobRunner:PythonExecutablePath"] = "python3",
            ["JobRunner:AllowPlainTextPasswordHashForDevelopment"] = "true"
        });

        var result = loader.LoadJobRunner();

        Assert.Equal("CheckA", result.GetUsersAuthorizationCheckColumn());
        Assert.Equal("CheckB", result.GetGroupsAuthorizationCheckColumn());
        Assert.Equal("CheckC", result.GetDeptsAuthorizationCheckColumn());
        Assert.Equal("python3", result.PythonExecutablePath);
        Assert.True(result.AllowPlainTextPasswordHashForDevelopment);
    }

    [Fact]
    public void LoadHangfireRds_WhenConfigurationContainsOverrides_UsesConfigurationValues()
    {
        var loader = CreateLoader(new Dictionary<string, string?>
        {
            ["JobRunner:HangfireRds:Dbms"] = "SQLServer",
            ["JobRunner:HangfireRds:ConnectionString"] = "Server=hangfire;Database=jobs"
        });

        var result = loader.LoadHangfireRds();

        Assert.Equal("SQLServer", result.Dbms);
        Assert.Equal("Server=hangfire;Database=jobs", result.ConnectionString);
    }

    private static ConfigurationParameterLoader CreateLoader(Dictionary<string, string?> values)
    {
        var configuration = new ConfigurationBuilder()
            .AddInMemoryCollection(values)
            .Build();

        return new ConfigurationParameterLoader(new StubParameterLoader(), configuration);
    }

    private sealed class StubParameterLoader : IParameterLoader
    {
        public RdsParameters LoadRds()
        {
            return new RdsParameters
            {
                Dbms = "SQLServer",
                UserConnectionString = "Server=localhost;Database=pleasanter"
            };
        }

        public HangfireRdsParameters LoadHangfireRds()
        {
            return new HangfireRdsParameters();
        }

        public JobRunnerParameters LoadJobRunner()
        {
            return new JobRunnerParameters
            {
                UsersAuthorizationCheckColumn = "CheckX",
                GroupsAuthorizationCheckColumn = "CheckY",
                DeptsAuthorizationCheckColumn = "CheckZ",
                PythonExecutablePath = "python",
                AllowPlainTextPasswordHashForDevelopment = false
            };
        }
    }
}
