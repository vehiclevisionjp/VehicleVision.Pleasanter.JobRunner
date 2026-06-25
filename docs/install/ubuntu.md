# Ubuntu インストール

言語: 日本語 | [English](ubuntu.en.md)

Microsoft Learn では supported Ubuntu releases 向けの .NET 10 packages が案内されています。Ubuntu 24.04 以降では、Ubuntu feeds または documented package sources から `dotnet-sdk-10.0` と `aspnetcore-runtime-10.0` を install できます。

## 前提条件

```bash
sudo apt-get update
sudo apt-get install -y dotnet-sdk-10.0 nodejs npm python3 nginx
```

Runtime-only hosts:

```bash
sudo apt-get install -y aspnetcore-runtime-10.0 python3 nginx
```

Distro package が要件より古い場合は、build host に Node.js 24 以降を install してください。

## Publish and deploy

```bash
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o ./publish/JobRunner
sudo mkdir -p /opt/vehiclevision/jobrunner
sudo rsync -a --delete ./publish/JobRunner/ /opt/vehiclevision/jobrunner/
```

`jobrunner.service` と nginx reverse proxy の layout は [Debian](debian.md) と同じものを使います。RDBMS と connection string は Pleasanter に合わせて設定してください。
