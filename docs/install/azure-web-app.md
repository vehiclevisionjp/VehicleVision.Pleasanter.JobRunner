# Azure Web App Installation

Azure App Service application settings are exposed to ASP.NET Core as environment variables. JobRunner reads those settings through the same `JobRunner__...` keys used on on-premises hosts.

## Build artifact

```bash
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o ./publish/JobRunner
```

Zip deploy example:

```bash
cd publish/JobRunner
zip -r ../jobrunner.zip .
cd ../..
az webapp deployment source config-zip --resource-group <resource-group> --name <app-name> --src publish/jobrunner.zip
```

## App settings

```bash
az webapp config appsettings set \
  --resource-group <resource-group> \
  --name <app-name> \
  --settings \
    ASPNETCORE_ENVIRONMENT=Production \
    JobRunner__Rds__Dbms=SQLServer \
    JobRunner__Rds__UserConnectionString="Server=tcp:<server>.database.windows.net,1433;Initial Catalog=<database>;User ID=<user>;Password=<password>;Encrypt=True;TrustServerCertificate=False;" \
    JobRunner__HangfireRds__Dbms=SQLServer \
    JobRunner__HangfireRds__ConnectionString="Server=tcp:<server>.database.windows.net,1433;Initial Catalog=<hangfire-database>;User ID=<user>;Password=<password>;Encrypt=True;TrustServerCertificate=False;" \
    JobRunner__Authorization__UsersCheckColumn=CheckA \
    JobRunner__Authorization__GroupsCheckColumn=CheckB \
    JobRunner__Authorization__DeptsCheckColumn=CheckC \
    JobRunner__PythonExecutablePath=python
```

If Python execution is required, validate Python availability for the selected App Service plan and OS. For stricter control, use a custom container image with .NET, Node build output, and Python installed.

## Notes

- Keep secrets in App Service app settings or Key Vault references, not in JSON files committed to source control.
- Hangfire uses memory storage unless `JobRunner__HangfireRds__Dbms` and `JobRunner__HangfireRds__ConnectionString` are configured.
- Use a separate SQL Server database for Hangfire storage before multi-instance production use.
