# Ubuntu インストール

言語: 日本語 | [English](ubuntu.en.md)

Ubuntu で .NET 10 パッケージを利用できるかどうかは、対象の Ubuntu リリースによって異なります。Ubuntu 24.04 以降では、Ubuntu のフィードまたは Microsoft が案内するパッケージソースから `dotnet-sdk-10.0` と `aspnetcore-runtime-10.0` をインストールできます。

## 前提条件

```bash
sudo apt-get update
sudo apt-get install -y dotnet-sdk-10.0 nodejs npm python3 nginx
```

実行だけを行うホストでは、次のようにランタイムだけを入れます。

```bash
sudo apt-get install -y aspnetcore-runtime-10.0 python3 nginx
```

ディストリビューションの Node.js パッケージが要件より古い場合は、ビルド用ホストに Node.js 24 以降を別途インストールしてください。

## 発行と配置

```bash
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o ./publish/JobRunner
sudo mkdir -p /opt/vehiclevision/jobrunner
sudo rsync -a --delete ./publish/JobRunner/ /opt/vehiclevision/jobrunner/
```

`jobrunner.service` と nginx リバースプロキシの構成は [Debian](debian.md) と同じです。RDBMS と接続文字列は、利用する Pleasanter 環境に合わせて設定してください。