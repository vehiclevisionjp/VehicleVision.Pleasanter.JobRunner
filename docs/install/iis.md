# Windows Server + IIS インストール

言語: 日本語 | [English](iis.en.md)

このガイドは、IIS と ASP.NET Core Hosting Bundle を使うオンプレミスの Windows Server を対象にしています。

## 前提条件

1. ビルド用マシンに .NET 10 SDK をインストールします。
2. IIS サーバーに ASP.NET Core Hosting Bundle 10.0 をインストールします。
3. ビルド用マシンに Node.js 24 以降をインストールします。
4. Python スクリプトを使う場合は、IIS サーバーに Python をインストールします。
5. IIS の機能を有効にします: Web Server、Hosting Bundle 経由の ASP.NET Core Module、Web Management Tools。

## 発行

```powershell
npm ci
npm run build
dotnet publish src/VehicleVision.Pleasanter.JobRunner.Web/VehicleVision.Pleasanter.JobRunner.Web.csproj -c Release -o .\publish\JobRunner
```

`.\publish\JobRunner` を IIS サーバーへコピーします。配置先の例は `C:\inetpub\JobRunner` です。

## パラメーター設定

`C:\inetpub\JobRunner\App_Data\Parameters` に JSON ファイルを作成するか、IIS サイトの環境変数を設定します。

JSON ファイル:

```json
// App_Data/Parameters/Rds.json
{
  "Dbms": "SQLServer",
  "UserConnectionString": "Server=localhost;Database=Implem.Pleasanter;Integrated Security=True;TrustServerCertificate=True;"
}
```

```json
// App_Data/Parameters/JobRunner.json
{
  "UsersAuthorizationCheckColumn": "CheckA",
  "GroupsAuthorizationCheckColumn": "CheckB",
  "DeptsAuthorizationCheckColumn": "CheckC",
  "PythonExecutablePath": "python",
  "AllowPlainTextPasswordHashForDevelopment": false
}
```

IIS の環境変数は `appcmd` で追加できます。

```powershell
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Rds__Dbms',value='SQLServer']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Rds__UserConnectionString',value='Server=localhost;Database=Implem.Pleasanter;Integrated Security=True;TrustServerCertificate=True;']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Authorization__UsersCheckColumn',value='CheckA']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Authorization__GroupsCheckColumn',value='CheckB']" /commit:apphost
%windir%\system32\inetsrv\appcmd.exe set config "JobRunner" -section:system.webServer/aspNetCore /+"environmentVariables.[name='JobRunner__Authorization__DeptsCheckColumn',value='CheckC']" /commit:apphost
```

## IIS サイト

1. `JobRunner` というアプリケーションプールを作成します。
2. `.NET CLR Version` を `No Managed Code` にします。
3. `C:\inetpub\JobRunner` を指すサイトまたはアプリケーションを作成します。
4. アプリケーションプール ID が発行先フォルダーを読めるようにします。Integrated Security を使う場合は、SQL Server にも接続できるようにします。
5. サイトを再起動します。

## 動作確認

`/Account/Login` を開きます。ログイン後に `/hangfire` を開きます。