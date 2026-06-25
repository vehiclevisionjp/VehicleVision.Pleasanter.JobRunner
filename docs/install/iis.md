# Windows Server + IIS Installation

This guide targets an on-premises Windows Server running IIS and the ASP.NET Core Hosting Bundle.

## Prerequisites

1. Install .NET 10 SDK on the build machine.
2. Install the ASP.NET Core Hosting Bundle 10.0 on the IIS server.
3. Install Node.js 24 or later on the build machine.
4. Install Python on the IIS server if Python scripts will be used.
5. Enable IIS features: Web Server, ASP.NET Core Module through the Hosting Bundle, Web Management Tools.

## Publish

```powershell
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o .\publish\JobRunner
```

Copy `.\publish\JobRunner` to the IIS server, for example `C:\inetpub\JobRunner`.

## Configure parameters

Either create JSON files under `C:\inetpub\JobRunner\App_Data\Parameters`, or configure environment variables on the IIS site.

JSON files:

```json
// App_Data/Parameters/Rds.json
{
  "Dbms": "SQLServer",
  "UserConnectionString": "Server=localhost;Database=Implem.Pleasanter;Integrated Security=True;TrustServerCertificate=True;"
}
```

```json
// App_Data/Parameters/JobRunner.json
{
  "UsersAuthorizationCheckColumn": "CheckA",
  "GroupsAuthorizationCheckColumn": "CheckB",
  "DeptsAuthorizationCheckColumn": "CheckC",
  "PythonExecutablePath": "python",
  "AllowPlainTextPasswordHashForDevelopment": false
}
```

IIS environment variables can be added with `appcmd`:

```powershell
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Rds__Dbms',value='SQLServer']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Rds__UserConnectionString',value='Server=localhost;Database=Implem.Pleasanter;Integrated Security=True;TrustServerCertificate=True;']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Authorization__UsersCheckColumn',value='CheckA']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Authorization__GroupsCheckColumn',value='CheckB']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Authorization__DeptsCheckColumn',value='CheckC']" /commit:apphost
```

## IIS site

1. Create an application pool named `JobRunner`.
2. Set `.NET CLR version` to `No Managed Code`.
3. Create a site or application pointing to `C:\inetpub\JobRunner`.
4. Set the application pool identity so it can read the publish folder and connect to SQL Server if integrated security is used.
5. Restart the site.

## Smoke test

Open `/Account/Login`. After login, open `/hangfire`.
