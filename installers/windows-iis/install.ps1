param(
    [string]$SiteName = "JobRunner",
    [string]$PublishPath = "C:\inetpub\JobRunner",
    [string]$ProjectPath = "src\VehicleVision.Pleasanter.JobRunner.Web\VehicleVision.Pleasanter.JobRunner.Web.csproj",
    [int]$Port = 5105
)

$ErrorActionPreference = "Stop"

npm ci
npm run build
dotnet publish $ProjectPath -c Release -o $PublishPath

Import-Module WebAdministration

if (-not (Test-Path "IIS:\AppPools\$SiteName")) {
    New-WebAppPool -Name $SiteName | Out-Null
    Set-ItemProperty "IIS:\AppPools\$SiteName" -Name managedRuntimeVersion -Value ""
}

if (-not (Test-Path "IIS:\Sites\$SiteName")) {
    New-Website -Name $SiteName -PhysicalPath $PublishPath -Port $Port -ApplicationPool $SiteName | Out-Null
}

Write-Host "Installed $SiteName at $PublishPath on port $Port. Configure JobRunner__... environment variables before production use."
