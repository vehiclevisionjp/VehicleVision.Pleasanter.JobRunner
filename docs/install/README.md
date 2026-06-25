# インストールガイド

言語: 日本語 | [English](README.en.md)

JobRunner は Pleasanter の近くに配置し、次の deployment mode で運用できます。

- [Windows Server + IIS](iis.md)
- [Debian](debian.md)
- [Ubuntu](ubuntu.md)
- [AlmaLinux](almalinux.md)
- [Azure Web App](azure-web-app.md)
- [Installer strategy](installer.md)

共通の prerequisites:

- Build machine には .NET 10 SDK
- Runtime-only server には ASP.NET Core Runtime 10.0
- Client asset build には Node.js 24 以降と npm
- Python scripts を有効にする場合は server 上で実行できる Python executable
- JobRunner から Pleasanter database への network connectivity

Configuration は `App_Data/Parameters/*.json`, environment variables, Azure Web App application settings, development User Secrets から指定できます。
