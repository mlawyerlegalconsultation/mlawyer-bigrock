param(
  [string]$DistPath = "dist",
  [switch]$BuildIfMissing
)

$ErrorActionPreference = "Stop"

function Write-Step {
  param([string]$Message)
  Write-Host "[verify-dist] $Message"
}

$indexPath = Join-Path $DistPath "index.html"

if (-not (Test-Path $indexPath)) {
  if ($BuildIfMissing) {
    Write-Step "dist/index.html not found. Running npm run build..."
    npm run build
  } else {
    Write-Error "dist/index.html not found. Run 'npm run build' first or pass -BuildIfMissing."
    exit 1
  }
}

if (-not (Test-Path $indexPath)) {
  Write-Error "dist/index.html is still missing after build."
  exit 1
}

$indexHtml = Get-Content $indexPath -Raw
$assetMatches = [regex]::Matches($indexHtml, '(?:src|href)="(/assets/[^"]+)"')

if ($assetMatches.Count -eq 0) {
  Write-Error "No /assets references were found in dist/index.html."
  exit 1
}

$assetPaths = $assetMatches |
  ForEach-Object { $_.Groups[1].Value.TrimStart('/') } |
  Sort-Object -Unique

$missingAssets = @()
foreach ($assetRelativePath in $assetPaths) {
  $assetFilePath = Join-Path $DistPath ($assetRelativePath -replace '^assets/', 'assets\\')
  if (-not (Test-Path $assetFilePath)) {
    $missingAssets += $assetRelativePath
  }
}

if ($missingAssets.Count -gt 0) {
  Write-Host ""
  Write-Host "Missing assets referenced by dist/index.html:" -ForegroundColor Red
  $missingAssets | ForEach-Object { Write-Host " - $_" -ForegroundColor Red }
  Write-Host ""
  Write-Error "Verification failed. Do not deploy this build."
  exit 1
}

$manifestPath = Join-Path $DistPath "deploy-manifest.json"
$manifest = [ordered]@{
  generatedAt = (Get-Date).ToString("o")
  indexFile = "index.html"
  referencedAssets = $assetPaths
}

$manifest | ConvertTo-Json -Depth 5 | Set-Content $manifestPath -Encoding UTF8

Write-Host ""
Write-Host "Verification passed." -ForegroundColor Green
Write-Host "Generated manifest: $manifestPath"
Write-Host ""
Write-Host "Safe deploy order:" -ForegroundColor Cyan
Write-Host "  1. Upload dist/assets first"
Write-Host "  2. Upload dist/index.html last"
Write-Host "  3. Purge CDN/edge cache"
Write-Host "  4. Smoke test in Incognito"
