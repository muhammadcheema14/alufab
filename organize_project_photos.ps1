$pdfImgDir = 'C:\Users\PC\.gemini\antigravity\scratch\alu-fab-pakistan\assets\pdf_images'
$outDir = 'C:\Users\PC\.gemini\antigravity\scratch\alu-fab-pakistan\assets\projects'

if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Force -Path $outDir | Out-Null }

# Map extracted images to real project names
$map = @{
    "extracted_10.jpg" = "takmeel_trade_tower_1.jpg"
    "extracted_15.jpg" = "takmeel_trade_tower_2.jpg"
    "extracted_14.jpg" = "hero_bg_pdf.jpg"
    "extracted_11.jpg" = "plot_sq_29_1.jpg"
    "extracted_12.jpg" = "plot_sq_29_2.jpg"
    "extracted_13.jpg" = "plot_254_255_256.jpg"
    "extracted_32.jpg" = "plot_sq_09_1.jpg"
    "extracted_16.jpg" = "plot_sq_09_2.jpg"
    "extracted_18.jpg" = "plot_285_286.jpg"
    "extracted_31.jpg" = "plot_27_28.jpg"
    "extracted_42.jpg" = "madina_icon.jpg"
    "extracted_40.jpg" = "hallmark_tower.jpg"
    "extracted_34.jpg" = "farooq_tower.jpg"
    "extracted_38.jpg" = "za_plaza.jpg"
    "extracted_35.jpg" = "plot_5c.jpg"
    "extracted_33.jpg" = "plot_130c.jpg"
    "extracted_36.jpg" = "plot_371.jpg"
    "extracted_17.jpg" = "plot_2c.jpg"
    "extracted_39.jpg" = "plot_11c.jpg"
    "extracted_41.jpg" = "plot_a79.jpg"
    "extracted_37.jpg" = "rjb_tower.jpg"
}

foreach ($key in $map.Keys) {
    $src = Join-Path $pdfImgDir $key
    $target = Join-Path $outDir $map[$key]
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $target -Force
        Write-Host "Mapped $key -> $($map[$key])"
    }
}
