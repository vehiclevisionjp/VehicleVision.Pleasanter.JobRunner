# Debian インストール

言語: 日本語 | [English](debian.en.md)

このガイドでは systemd と nginx のリバースプロキシを使います。Debian での .NET 10 SDK / ランタイムのインストール方法は Microsoft Learn を参照してください。

## 前提条件

```bash
sudo apt-get update
sudo apt-get install -y dotnet-sdk-10.0 nodejs npm python3 nginx
```

実行専用サーバーでは `dotnet-sdk-10.0` を `aspnetcore-runtime-10.0` に置き換え、発行は別のマシンで実行します。

## 発行

```bash
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o ./publish/JobRunner
sudo mkdir -p /opt/vehiclevision/jobrunner
sudo rsync -a --delete ./publish/JobRunner/ /opt/vehiclevision/jobrunner/
```

## systemd 設定

`/etc/systemd/system/jobrunner.service` を作成します。

```ini
[Unit]
Description=VehicleVision Pleasanter JobRunner
After=network.target

[Service]
WorkingDirectory=/opt/vehiclevision/jobrunner
ExecStart=/usr/bin/dotnet /opt/vehiclevision/jobrunner/VehicleVision.Pleasanter.JobRunner.Web.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=jobrunner
User=www-data
Environment=ASPNETCORE_URLS=http://127.0.0.1:5105
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=JobRunner__Rds__Dbms=PostgreSQL
Environment=JobRunner__Rds__UserConnectionString=Host=localhost;Database=pleasanter;Username=pleasanter;Password=change-me
Environment=JobRunner__Authorization__UsersCheckColumn=CheckA
Environment=JobRunner__Authorization__GroupsCheckColumn=CheckB
Environment=JobRunner__Authorization__DeptsCheckColumn=CheckC
Environment=JobRunner__PythonExecutablePath=python3

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now jobrunner
sudo systemctl status jobrunner
```

## nginx 設定

```nginx
server {
    listen 80;
    server_name jobrunner.example.local;

    location / {
        proxy_pass http://127.0.0.1:5105;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```