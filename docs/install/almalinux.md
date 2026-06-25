# AlmaLinux インストール

言語: 日本語 | [English](almalinux.en.md)

AlmaLinux は RHEL-compatible です。Microsoft Learn では `dotnet-sdk-10.0` や `aspnetcore-runtime-10.0` などの RHEL/CentOS Stream packages が案内されています。Production rollout の前に、対象 AlmaLinux minor version で repository availability を確認してください。

## 前提条件

```bash
sudo dnf install -y dotnet-sdk-10.0 nodejs npm python3 nginx
```

Runtime-only hosts:

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

[Debian](debian.md) の `jobrunner.service` template を使います。SELinux-enabled servers では、nginx が app に proxy できるようにします。

```bash
sudo setsebool -P httpd_can_network_connect 1
```

## nginx

Reverse proxy template は [Debian](debian.md) のものを使います。Firewall rules を確認してください。

```bash
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload
```
