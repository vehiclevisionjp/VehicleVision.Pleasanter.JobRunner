# Installation Guides

JobRunner can run beside Pleasanter in the following deployment modes.

- [Windows Server + IIS](iis.md)
- [Debian](debian.md)
- [Ubuntu](ubuntu.md)
- [AlmaLinux](almalinux.md)
- [Azure Web App](azure-web-app.md)
- [Installer strategy](installer.md)

Common prerequisites:

- .NET 10 SDK for build machines.
- ASP.NET Core Runtime 10.0 for runtime-only servers.
- Node.js 24 or later and npm for client asset builds.
- Python executable available on the server when Python scripts are enabled.
- Network connectivity from JobRunner to the Pleasanter database.

Configuration can be provided by `App_Data/Parameters/*.json`, environment variables, Azure Web App application settings, or development User Secrets.
