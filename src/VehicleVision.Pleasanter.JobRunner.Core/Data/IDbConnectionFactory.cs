using System.Data;
using VehicleVision.Pleasanter.JobRunner.Core.Configuration;

namespace VehicleVision.Pleasanter.JobRunner.Core.Data;

public interface IDbConnectionFactory
{
    SupportedDbms Dbms { get; }

    IDbConnection CreateConnection();
}
