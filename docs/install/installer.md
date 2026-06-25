# Installer strategy

言語: 日本語 | [English](installer.en.md)

この repository には、Pleasanter-style installers へ発展させられる lightweight installer entry points が含まれています。

## Current scripts

- `installers/windows-iis/install.ps1`: publish し、IIS folder/site を準備します。
- `installers/linux-systemd/install.sh`: publish し、systemd service を install します。

これらは意図的に conservative です。Production servers で実行する前に parameters を review してください。

## Recommended roadmap

1. Signed Windows MSI または MSIX packaging を追加する。
2. Debian/Ubuntu 向け `.deb` package generation を追加する。
3. AlmaLinux/RHEL-compatible environments 向け `.rpm` package generation を追加する。
4. RDBMS と Check column settings 用の unattended install parameter files を追加する。
5. `App_Data/Parameters` を preserve し、previous binaries を backup する upgrade mode を追加する。
6. Service definitions を削除し、明示的に requested された場合を除き parameter files は残す uninstall mode を追加する。
