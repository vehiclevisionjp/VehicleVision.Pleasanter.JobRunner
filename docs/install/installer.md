# インストーラー方針

言語: 日本語 | [English](installer.en.md)

このリポジトリには、将来的に Pleasanter 風のインストーラーへ発展させるための、最小構成のインストール用スクリプトが含まれています。

## 現在のスクリプト

- `installers/windows-iis/install.ps1`: `dotnet publish` を実行し、IIS の配置先フォルダーとサイトを準備します。
- `installers/linux-systemd/install.sh`: `dotnet publish` を実行し、systemd サービスをインストールします。

これらのスクリプトは、意図的に保守的な作りにしています。本番サーバーで実行する前に、必ずパラメーターを確認してください。

## 今後の方針

1. 署名付き Windows MSI または MSIX パッケージを追加する。
2. Debian / Ubuntu 向け `.deb` パッケージ生成を追加する。
3. AlmaLinux / RHEL 互換環境向け `.rpm` パッケージ生成を追加する。
4. RDBMS と認可用チェック列設定を無人インストールで指定できるパラメーターファイルを追加する。
5. `App_Data/Parameters` を保持し、旧バイナリをバックアップするアップグレードモードを追加する。
6. サービス定義を削除し、明示的に指定された場合を除いてパラメーターファイルを残すアンインストールモードを追加する。