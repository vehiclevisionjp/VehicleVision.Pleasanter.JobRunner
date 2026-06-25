# インストールガイド

言語: 日本語 | [English](README.en.md)

JobRunner は Pleasanter の近くに配置して運用します。次の配置方法を想定しています。

- [Windows Server + IIS](iis.md)
- [Debian](debian.md)
- [Ubuntu](ubuntu.md)
- [AlmaLinux](almalinux.md)
- [Azure Web App](azure-web-app.md)
- [インストーラー方針](installer.md)

共通の前提条件:

- ビルド用マシンには .NET 10 SDK
- 実行専用サーバーには ASP.NET Core ランタイム 10.0
- クライアント資産のビルドには Node.js 24 以降と npm
- Python スクリプトを有効にする場合は、サーバー上で実行できる Python
- JobRunner から Pleasanter データベースへのネットワーク接続

設定は `App_Data/Parameters/*.json`、環境変数、Azure Web App のアプリケーション設定、開発環境の User Secrets から指定できます。