# Azure Web App インストール

言語: 日本語 | [English](azure-web-app.en.md)

Azure App Service のアプリケーション設定は、ASP.NET Core から環境変数として参照できます。JobRunner はオンプレミス環境と同じ `JobRunner__...` キーでこれらの設定を読み込みます。

## ビルド成果物の作成

```bash
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o ./publish/JobRunner
```

Zip デプロイの例:

```bash
cd publish/JobRunner
zip -r ../jobrunner.zip .
cd ../..
az webapp deployment source config-zip --resource-group <resource-group> --name <app-name> --src publish/jobrunner.zip
```

## アプリケーション設定

```bash
az webapp config appsettings set \
  --resource-group <resource-group> \
  --name <app-name> \
  --settings \
    ASPNETCORE_ENVIRONMENT=Production \
    JobRunner__Rds__Dbms=SQLServer \
    JobRunner__Rds__UserConnectionString="Server=tcp:<server>.database.windows.net,1433;Initial Catalog=<database>;User ID=<user>;Password=<password>;Encrypt=True;TrustServerCertificate=False;" \
    JobRunner__HangfireRds__Dbms=SQLServer \
    JobRunner__HangfireRds__ConnectionString="Server=tcp:<server>.database.windows.net,1433;Initial Catalog=<hangfire-database>;User ID=<user>;Password=<password>;Encrypt=True;TrustServerCertificate=False;" \
    JobRunner__Authorization__UsersCheckColumn=CheckA \
    JobRunner__Authorization__GroupsCheckColumn=CheckB \
    JobRunner__Authorization__DeptsCheckColumn=CheckC \
    JobRunner__PythonExecutablePath=python
```

Python 実行が必要な場合は、選択した App Service プランと OS で Python を利用できるか確認してください。より厳密に制御したい場合は、.NET、Node のビルド成果物、Python を含むカスタム コンテナー イメージを使います。

## 注意事項

- シークレットは、ソース管理にコミットする JSON ファイルではなく、App Service のアプリケーション設定または Key Vault 参照に保存してください。
- `JobRunner__HangfireRds__Dbms` と `JobRunner__HangfireRds__ConnectionString` を設定しない場合、Hangfire はメモリストレージを使います。
- 複数インスタンス構成の本番環境で使う前に、Hangfire ストレージ用の SQL Server または PostgreSQL データベースを別途用意してください。MySQL は、このプロジェクトの Hangfire ストレージとしてはサポートしていません。