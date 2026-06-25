# Ubuntu Installation

Language: [日本語](ubuntu.md) | English


Microsoft Learn lists .NET 10 packages for supported Ubuntu releases. Ubuntu 24.04 and newer can install `dotnet-sdk-10.0` and `aspnetcore-runtime-10.0` from Ubuntu feeds or documented package sources.

## Prerequisites

```bash
sudo apt-get update
sudo apt-get install -y dotnet-sdk-10.0 nodejs npm python3 nginx
```

For runtime-only hosts:

```bash
sudo apt-get install -y aspnetcore-runtime-10.0 python3 nginx
```

Install Node.js 24 or later on the build host if the distro package is older than required.

## Publish and deploy

```bash
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o ./publish/JobRunner
sudo mkdir -p /opt/vehiclevision/jobrunner
sudo rsync -a --delete ./publish/JobRunner/ /opt/vehiclevision/jobrunner/
```

Use the same `jobrunner.service` and nginx reverse proxy layout shown in [Debian](debian.en.md). Set the RDBMS and connection string to match Pleasanter.
