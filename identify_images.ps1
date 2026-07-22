Add-Type -AssemblyName System.Drawing

$imgDir = 'C:\Users\PC\.gemini\antigravity\scratch\alu-fab-pakistan\assets\pdf_images'
$files = Get-ChildItem -Path $imgDir -Filter "*.jpg" | Sort-Object Length -Descending

foreach ($f in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($f.FullName)
        Write-Host "$($f.Name) | Size: $($f.Length) bytes | Resolution: $($img.Width)x$($img.Height)"
        $img.Dispose()
    } catch {
        Write-Host "$($f.Name) | Error reading image"
    }
}
