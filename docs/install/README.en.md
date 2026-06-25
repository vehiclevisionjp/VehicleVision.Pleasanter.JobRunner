# Installation Guides

Language: [日本語](README.md) | English

JobRunner can run beside Pleasanter in the following deployment modes.

- [Windows Server + IIS](iis.en.md)
- [Debian](debian.en.md)
- [Ubuntu](ubuntu.en.md)
- [AlmaLinux](almalinux.en.md)
- [Azure Web App](azure-web-app.en.md)
- [Installer strategy](installer.en.md)

Common prerequisites:

- .NET 10 SDK for build machines.
- ASP.NET Core Runtime 10.0 for runtime-only servers.
- Node.js 24 or later and npm for client asset builds.
- Python executable available on the server when Python scripts are enabled.
- Network connectivity from JobRunner to the Pleasanter database.

Configuration can be provided by `App_Data/Parameters/*.json`, environment variables, Azure Web App application settings, or development User Secrets.
