[CmdletBinding()]
param(
    [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

$ErrorActionPreference = 'Stop'

$heroDirectory = Join-Path $ProjectRoot 'public\media\hero'

$expectedFiles = @(
    @{ Name = 'hero-mdush-desktop.webp'; MaxBytes = 450KB },
    @{ Name = 'hero-mdush-tablet.webp'; MaxBytes = 320KB },
    @{ Name = 'hero-mdush-mobile.webp'; MaxBytes = 240KB },
    @{ Name = 'hero-mdush-fallback.jpg'; MaxBytes = 550KB }
)

Write-Host "Перевірка Hero-файлів у: $heroDirectory" -ForegroundColor Cyan

if (-not (Test-Path -LiteralPath $heroDirectory)) {
    Write-Host 'Папка ще не створена. Створюю public\media\hero.' -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $heroDirectory -Force | Out-Null
}

$hasErrors = $false

foreach ($expected in $expectedFiles) {
    $path = Join-Path $heroDirectory $expected.Name

    if (-not (Test-Path -LiteralPath $path)) {
        Write-Host "[ВІДСУТНІЙ] $($expected.Name)" -ForegroundColor Red
        $hasErrors = $true
        continue
    }

    $file = Get-Item -LiteralPath $path
    $sizeKb = [Math]::Round($file.Length / 1KB, 1)
    $limitKb = [Math]::Round($expected.MaxBytes / 1KB, 0)

    if ($file.Length -gt $expected.MaxBytes) {
        Write-Host "[ЗАВЕЛИКИЙ] $($expected.Name): $sizeKb KB; ліміт $limitKb KB" -ForegroundColor Red
        $hasErrors = $true
    }
    else {
        Write-Host "[OK] $($expected.Name): $sizeKb KB" -ForegroundColor Green
    }
}

$unexpectedFiles = Get-ChildItem -LiteralPath $heroDirectory -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -notin $expectedFiles.Name }

if ($unexpectedFiles) {
    Write-Host 'Додаткові файли у Hero-папці:' -ForegroundColor Yellow
    $unexpectedFiles | ForEach-Object { Write-Host "  - $($_.Name)" }
}

if ($hasErrors) {
    Write-Host ''
    Write-Host 'Hero-комплект не готовий до інтеграції.' -ForegroundColor Red
    Write-Host 'Перевірте назви та вагу файлів згідно docs\design\HERO_VISUAL_SPEC.md.'
    exit 1
}

Write-Host ''
Write-Host 'Hero-комплект пройшов базову перевірку назв і ваги.' -ForegroundColor Green
Write-Host 'Наступний крок: Codex інтегрує responsive <picture> і запускає npm test.'
