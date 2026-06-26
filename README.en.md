# VehicleVision.Pleasanter.JobRunner

Language: [日本語](README.md) | English

VehicleVision.Pleasanter.JobRunner is a web application for managing C#, Python, and ClearScript (JavaScript) script execution within the same operational boundary as Pleasanter.

- ASP.NET Core 10 Razor Pages
- Hangfire + Hangfire.Console + Memory / SQL Server / PostgreSQL storage
- C# dynamic scripting via Roslyn
- Python external process execution
- JavaScript execution via ClearScript/V8
- Dapper based SQL Server / PostgreSQL / MySQL access
- TypeScript + Knockout.js binding
- SCSS + Bootstrap SCSS from npm
- AGPL-3.0-or-later

## Repository layout

```mermaid
flowchart TD
    Root["."]
    Root --> GitHub[".github/"]
    Root --> Docs["docs/install/"]
    Root --> Installers["installers/"]
    Root --> Src["src/"]
    Root --> Tests["tests/"]
    Src --> Core["VehicleVision.Pleasanter.JobRunner.Core/"]
    Src --> Web["VehicleVision.Pleasanter.JobRunner.Web/"]
    Web --> Parameters["App_Data/Parameters/"]
    Web --> TypeScript["ClientApp/ts/"]
    Web --> Scss["ClientApp/scss/"]
    Web --> Dist["wwwroot/dist/"]
```

## Build and test

Requirements:

- .NET SDK 10.0
- Node.js 24 or later
- npm
- Python, when Python script execution is used

```powershell
npm ci
npm run build
dotnet restore VehicleVision.Pleasanter.JobRunner.slnx
dotnet build VehicleVision.Pleasanter.JobRunner.slnx
dotnet test VehicleVision.Pleasanter.JobRunner.slnx
```

`dotnet build` also runs `npm run build` from the Web project, so generated assets stay in sync.

## Run locally

```powershell
dotnet run --project src/VehicleVision.Pleasanter.JobRunner.Web --urls http://localhost:5105
```

Open:

- Web UI: `http://localhost:5105`
- Hangfire dashboard: `http://localhost:5105/hangfire`

## Parameter sources

Base JSON files live under:

```text
src/VehicleVision.Pleasanter.JobRunner.Web/App_Data/Parameters/
```

`appsettings.json` is intentionally not used. Runtime settings can be supplied in this order:

1. `App_Data/Parameters/*.json`
2. User Secrets in development
3. Environment variables
4. Azure Web App Application settings, which are exposed as environment variables

Later sources override JSON values.

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

### HangfireRds.json

Hangfire storage uses memory by default. For production or multi-instance hosting, point Hangfire at a separate SQL Server or PostgreSQL database:

```json
{
  "Dbms": "SQLServer",
  "ConnectionString": "Server=localhost;Database=JobRunnerHangfire;Integrated Security=True;TrustServerCertificate=True;"
}
```

PostgreSQL example:

```json
{
  "Dbms": "PostgreSQL",
  "ConnectionString": "Host=localhost;Database=jobrunner_hangfire;Username=jobrunner;Password=change-me"
}
```

Use a separate database from Pleasanter's `Rds.json` so Hangfire tables and operational data stay isolated.

Supported `Dbms` values:

- `Memory`
- `SQLServer`
- `PostgreSQL`

`MySQL` is not supported for Hangfire storage in this project. MySQL remains supported for Pleasanter data access through `Rds.json`.

### JobRunner.json

```json
{
  "UsersAuthorizationCheckColumn": "CheckA",
  "GroupsAuthorizationCheckColumn": "CheckB",
  "DeptsAuthorizationCheckColumn": "CheckC",
  "PythonExecutablePath": "python",
  "AllowPlainTextPasswordHashForDevelopment": false
}
```

`AuthorizationCheckColumn` is still accepted as a backward-compatible fallback, but new deployments should use the table-specific settings.

### ClearScript host API

ClearScript runs V8 JavaScript and exposes a small host API with a Pleasanter server-script-like feel. It is not a full compatibility layer.

```javascript
context.log("hello");
console.warn({ jobName: context.jobName });
const users = items.where("Users", "LoginId", "admin", 10);
```

Main methods:

- `console.log/info/warn/error(...)`
- `context.log/info/warn/error(...)`, `context.jobName`, `context.language`, `context.now()`
- `items.get(tableName, keyColumnName, keyValue)`
- `items.where(tableName, columnName, value, limit)`
- `items.query(sql, parameters)`, `items.execute(sql, parameters)`
- `items.update(tableName, keyColumnName, keyValue, values)`, `items.insert(tableName, values)`

`items` uses the Pleasanter database connection from `Rds.json`. Table and column names must be simple identifiers, and values are parameterized. `items.query` and `items.execute` run raw SQL, so expose this only to trusted administrators.

## Environment variables

Use double underscores for nested keys:

```powershell
$env:JobRunner__Rds__Dbms = "SQLServer"
$env:JobRunner__Rds__UserConnectionString = "Server=localhost;Database=Implem.Pleasanter;Integrated Security=True;TrustServerCertificate=True;"
$env:JobRunner__HangfireRds__Dbms = "SQLServer"
$env:JobRunner__HangfireRds__ConnectionString = "Server=localhost;Database=JobRunnerHangfire;Integrated Security=True;TrustServerCertificate=True;"
$env:JobRunner__Authorization__UsersCheckColumn = "CheckA"
$env:JobRunner__Authorization__GroupsCheckColumn = "CheckB"
$env:JobRunner__Authorization__DeptsCheckColumn = "CheckC"
$env:JobRunner__PythonExecutablePath = "python"
```

Azure Web App uses the same names in App Service > Settings > Environment variables > App settings.

## User Secrets

The Web project has a `UserSecretsId`, so development secrets can be set without editing JSON files:

```powershell
dotnet user-secrets init --project src/VehicleVision.Pleasanter.JobRunner.Web
dotnet user-secrets set "JobRunner:Rds:Dbms" "PostgreSQL" --project src/VehicleVision.Pleasanter.JobRunner.Web
dotnet user-secrets set "JobRunner:Rds:UserConnectionString" "Host=localhost;Database=pleasanter;Username=pleasanter;Password=change-me" --project src/VehicleVision.Pleasanter.JobRunner.Web
dotnet user-secrets set "JobRunner:HangfireRds:Dbms" "SQLServer" --project src/VehicleVision.Pleasanter.JobRunner.Web
dotnet user-secrets set "JobRunner:HangfireRds:ConnectionString" "Server=localhost;Database=JobRunnerHangfire;Integrated Security=True;TrustServerCertificate=True;" --project src/VehicleVision.Pleasanter.JobRunner.Web
dotnet user-secrets set "JobRunner:Authorization:UsersCheckColumn" "CheckA" --project src/VehicleVision.Pleasanter.JobRunner.Web
dotnet user-secrets set "JobRunner:Authorization:GroupsCheckColumn" "CheckB" --project src/VehicleVision.Pleasanter.JobRunner.Web
dotnet user-secrets set "JobRunner:Authorization:DeptsCheckColumn" "CheckC" --project src/VehicleVision.Pleasanter.JobRunner.Web
```

## Frontend development

Source files:

- TypeScript: `src/VehicleVision.Pleasanter.JobRunner.Web/ClientApp/ts/app.ts`
- SCSS: `src/VehicleVision.Pleasanter.JobRunner.Web/ClientApp/scss/site.scss`

Build:

```powershell
npm run build
npx tsc --noEmit
npm run audit
```

The Razor layout references only:

- `wwwroot/dist/site.css`
- `wwwroot/dist/app.js`

## Authentication and authorization

Authentication uses Pleasanter `Users.LoginId` and `Users.PasswordHash`.

Authorization is hierarchical:

1. allow when `Users.<UsersAuthorizationCheckColumn>` is true;
2. otherwise allow when any joined `Groups.<GroupsAuthorizationCheckColumn>` is true;
3. otherwise allow when `Depts.<DeptsAuthorizationCheckColumn>` is true;
4. otherwise deny.

## CI and dependency maintenance

GitHub Actions runs:

- `npm ci`
- `npm run build`
- `npx tsc --noEmit`
- `npm run audit`
- `dotnet restore/build/test`
- `dotnet list package --vulnerable --include-transitive`

Dependabot is configured for NuGet, npm, and GitHub Actions.

## Installation docs

See [docs/install](docs/install/README.en.md):

- Windows Server + IIS
- Debian
- Ubuntu
- AlmaLinux
- Azure Web App
- Installer strategy

## License

This project is licensed under `AGPL-3.0-or-later`. See [LICENSE](LICENSE).

Because this is a network application, modified versions offered over a network must provide corresponding source code as required by AGPL section 13.

## Security notes

JobRunner executes arbitrary C#, Python, and ClearScript (JavaScript) code on the server. Deploy it only for trusted administrators and inside the same operational boundary as the Pleasanter instance it manages.

Hangfire uses memory storage by default. Configure `HangfireRds.json` or `JobRunner__HangfireRds__...` with a separate SQL Server or PostgreSQL database before multi-instance production deployment. MySQL is intentionally not supported for Hangfire storage in this project.

