# AlmaLinux インストール

言語: 日本語 | [English](almalinux.en.md)

AlmaLinux は RHEL 互換のディストリビューションです。Microsoft Learn では `dotnet-sdk-10.0` や `aspnetcore-runtime-10.0` などの RHEL / CentOS Stream 向けパッケージが案内されています。本番展開前に、対象の AlmaLinux マイナーバージョンでリポジトリを利用できることを確認してください。

## 前提条件

```bash
sudo dnf install -y dotnet-sdk-10.0 nodejs npm python3 nginx
```

実行だけを行うホストでは、次のようにランタイムだけを入れます。

```bash
sudo dnf install -y aspnetcore-runtime-10.0 python3 nginx
```

## 発行と配置

```bash
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o ./publish/JobRunner
sudo mkdir -p /opt/vehiclevision/jobrunner
sudo rsync -a --delete ./publish/JobRunner/ /opt/vehiclevision/jobrunner/
```

## systemd

[Debian](debian.md) の `jobrunner.service` をひな形として使います。SELinux が有効なサーバーでは、nginx がアプリケーションへ転送できるようにします。

```bash
sudo setsebool -P httpd_can_network_connect 1
```

## nginx

リバースプロキシのひな形は [Debian](debian.md) のものを使います。ファイアウォール規則も確認してください。

```bash
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload
```