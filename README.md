# VehicleVision.Pleasanter.JobRunner

VehicleVision.Pleasanter.JobRunner is an ASP.NET Core web application that runs trusted C# and Python scripts next to an existing Pleasanter environment.

It reads Pleasanter-style parameter files from `App_Data/Parameters`, connects to the same RDBMS as Pleasanter, authenticates users against Pleasanter's `Users` table, and allows login only when the configured extension check field is enabled on the user, one of the user's groups, or the user's organization.

## Features

- ASP.NET Core 8 Razor Pages web UI.
- Pleasanter-style JSON parameter files instead of `appsettings.json`.
- SQL Server, PostgreSQL, and MySQL support through Dapper.
- Hierarchical login authorization using `Users`, `Groups`, `Depts`, and `Members`.
- Hangfire dashboard and background processing with in-memory storage.
- Dynamic C# script execution through Roslyn scripting.
- Python script execution through an external `python` command.
- xUnit tests for the authorization hierarchy.

## Repository layout

```text
.
├── .cursorrules
├── .editorconfig
├── .gitignore
├── .vscode/
├── Pleasanter_DB_Schema_Hint.md
├── README.md
├── reference/
├── src/
│   ├── VehicleVision.Pleasanter.JobRunner.Core/
│   └── VehicleVision.Pleasanter.JobRunner.Web/
└── tests/
    └── VehicleVision.Pleasanter.JobRunner.Tests/
```

Place a checked-out or copied `Implem.Pleasanter` reference tree under `reference/` when deeper schema verification is needed.

## Parameter files

Runtime settings are loaded from:

```text
src/VehicleVision.Pleasanter.JobRunner.Web/App_Data/Parameters/
```

### Rds.json

```json
{
  "Dbms": "SQLServer",
  "UserConnectionString": "Server=localhost;Database=Implem.Pleasanter;Integrated Security=True;TrustServerCertificate=True;"
}
```

Supported `Dbms` values:

- `SQLServer`
- `PostgreSQL`
- `MySQL`

### JobRunner.json

```json
{
  "AuthorizationCheckColumn": "CheckA",
  "PythonExecutablePath": "python",
  "AllowPlainTextPasswordHashForDevelopment": false
}
```

`AuthorizationCheckColumn` must be a trusted Pleasanter extension check column such as `CheckA`.

## Development

Restore, build, and test:

```powershell
dotnet restore
dotnet build
dotnet test
```

Run the web app:

```powershell
dotnet run --project src/VehicleVision.Pleasanter.JobRunner.Web
```

Open:

- Web UI: `https://localhost:5001` or the URL printed by ASP.NET Core
- Hangfire dashboard: `/hangfire`

## Security notes

This application executes arbitrary C# and Python code on the server. Deploy it only for trusted administrators and inside the same operational boundary as the Pleasanter instance it manages.

For production, verify the password hash format used by the target Pleasanter version. The implementation keeps password verification behind `IPasswordHashVerifier` so installations can align the verifier with their exact Pleasanter source if needed.
