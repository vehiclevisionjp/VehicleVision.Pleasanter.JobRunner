# AlmaLinux Installation

Language: [日本語](almalinux.md) | English


AlmaLinux is RHEL-compatible. Microsoft Learn documents RHEL/CentOS Stream packages such as `dotnet-sdk-10.0` and `aspnetcore-runtime-10.0`. Verify repository availability for the exact AlmaLinux minor version before production rollout.

## Prerequisites

```bash
sudo dnf install -y dotnet-sdk-10.0 nodejs npm python3 nginx
```

For runtime-only hosts:

```bash
sudo dnf install -y aspnetcore-runtime-10.0 python3 nginx
```

## Publish and deploy

```bash
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o ./publish/JobRunner
sudo mkdir -p /opt/vehiclevision/jobrunner
sudo rsync -a --delete ./publish/JobRunner/ /opt/vehiclevision/jobrunner/
```

## systemd

Use the `jobrunner.service` template from [Debian](debian.en.md). On SELinux-enabled servers, allow nginx to proxy to the app:

```bash
sudo setsebool -P httpd_can_network_connect 1
```

## nginx

Use the reverse proxy template from [Debian](debian.en.md). Confirm firewall rules:

```bash
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload
```
