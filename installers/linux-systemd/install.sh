#!/usr/bin/env bash
set -euo pipefail

SERVICE_NAME="${SERVICE_NAME:-jobrunner}"
INSTALL_DIR="${INSTALL_DIR:-/opt/vehiclevision/jobrunner}"
PROJECT_PATH="${PROJECT_PATH:-src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj}"
APP_USER="${APP_USER:-www-data}"
URLS="${ASPNETCORE_URLS:-http://127.0.0.1:5105}"

npm ci
npm run build
dotnet publish "$PROJECT_PATH" -c Release -o ./publish/JobRunner

sudo mkdir -p "$INSTALL_DIR"
sudo rsync -a --delete ./publish/JobRunner/ "$INSTALL_DIR/"
sudo chown -R "$APP_USER":"$APP_USER" "$INSTALL_DIR"

sudo tee "/etc/systemd/system/${SERVICE_NAME}.service" >/dev/null <<SERVICE
[Unit]
Description=VehicleVision Pleasanter JobRunner
After=network.target

[Service]
WorkingDirectory=${INSTALL_DIR}
ExecStart=/usr/bin/dotnet ${INSTALL_DIR}/VehicleVision.Pleasanter.JobRunner.Web.dll
Restart=always
RestartSec=10
User=${APP_USER}
Environment=ASPNETCORE_URLS=${URLS}
Environment=ASPNETCORE_ENVIRONMENT=Production

[Install]
WantedBy=multi-user.target
SERVICE

sudo systemctl daemon-reload
sudo systemctl enable --now "$SERVICE_NAME"
sudo systemctl status "$SERVICE_NAME" --no-pager
