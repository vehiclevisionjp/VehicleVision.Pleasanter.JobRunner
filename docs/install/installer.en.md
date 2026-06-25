# Installer Strategy

Language: [日本語](installer.md) | English


The repository includes lightweight installer entry points that can evolve into Pleasanter-style installers.

## Current scripts

- `installers/windows-iis/install.ps1`: publishes and prepares an IIS folder/site.
- `installers/linux-systemd/install.sh`: publishes and installs a systemd service.

They are intentionally conservative. Review parameters before running them on production servers.

## Recommended roadmap

1. Add signed Windows MSI or MSIX packaging.
2. Add `.deb` package generation for Debian/Ubuntu.
3. Add `.rpm` package generation for AlmaLinux/RHEL-compatible environments.
4. Add unattended install parameter files for RDBMS and Check column settings.
5. Add upgrade mode that preserves `App_Data/Parameters` and backs up previous binaries.
6. Add uninstall mode that removes service definitions but leaves parameter files unless explicitly requested.
