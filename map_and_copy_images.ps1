Add-Type -AssemblyName System.Drawing

$srcDir = 'C:\Users\PC\.gemini\antigravity\scratch\alu-fab-pakistan\assets\pdf_images'
$destDir = 'C:\Users\PC\.gemini\antigravity\scratch\alu-fab-pakistan\assets\projects'
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

# Copy all extracted high-res images to projects folder with clean index
$files = Get-ChildItem -Path $srcDir -Filter "*.jpg" | Sort-Object Length -Descending

$idx = 1
foreach ($f in $files) {
    $destPath = Join-Path $destDir "project_pdf_$idx.jpg"
    Copy-Item -Path $f.FullName -Destination $destPath -Force
    $idx++
}

# Crop Logo from Page 1 image (extracted_14.jpg) or Page 21
# Let's locate top center logo in extracted_14.jpg (1280x960)
$p1 = Join-Path $srcDir "extracted_14.jpg"
if (Test-Path $p1) {
    $bmp = [System.Drawing.Bitmap]::FromFile($p1)
    # Logo is located in top-center region (~x: 350 to 930, y: 0 to 320)
    $cropRect = New-Object System.Drawing.Rectangle(380, 0, 520, 290)
    $logoBmp = $bmp.Clone($cropRect, $bmp.PixelFormat)
    $logoPath = Join-Path $destDir "alufab_logo_pdf.png"
    $logoBmp.Save($logoPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $logoBmp.Dispose()
    $bmp.Dispose()
    Write-Host "Cropped PDF Logo saved to $logoPath"
}
