# Skopiuj wygenerowane zdjecia do public/images
# Uruchom ten skrypt raz z katalogu projektu:
#   powershell -ExecutionPolicy Bypass -File .\copy-images.ps1

$src = "C:\Users\User\.cursor\projects\d-Strony-internetowe-Moja-wizytowka\assets"
$dst = Join-Path $PSScriptRoot "public\images"

New-Item -ItemType Directory -Force -Path $dst | Out-Null

$files = @(
    "restaurant_hero.jpg",
    "restaurant_chef.jpg",
    "dish_pasta.jpg",
    "dish_tiramisu.jpg",
    "restaurant_wine.jpg",
    "dish_pizza.jpg"
)

foreach ($f in $files) {
    $from = Join-Path $src $f
    $to   = Join-Path $dst $f
    if (Test-Path $from) {
        Copy-Item $from $to -Force
        Write-Host "Skopiowano: $f"
    } else {
        Write-Warning "Nie znaleziono: $from"
    }
}

Write-Host "`nGotowe! Zdjecia sa w: $dst"
