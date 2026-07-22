$pdfPath = 'C:\Users\PC\.gemini\antigravity\brain\128ab6e0-0f19-4d03-95e5-c332d637d15f\.user_uploaded\media__1784738844338.pdf'
$outDir = 'C:\Users\PC\.gemini\antigravity\scratch\alu-fab-pakistan\assets\pdf_images'
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$rawBytes = [System.IO.File]::ReadAllBytes($pdfPath)
Write-Host "PDF File Size: $($rawBytes.Length) bytes"

$count = 0
$lenTotal = $rawBytes.Length

for ($i = 0; $i -lt ($lenTotal - 3); $i++) {
    if ($rawBytes[$i] -eq 0xFF -and $rawBytes[$i+1] -eq 0xD8 -and $rawBytes[$i+2] -eq 0xFF) {
        for ($j = $i + 3; $j -lt ($lenTotal - 1); $j++) {
            if ($rawBytes[$j] -eq 0xFF -and $rawBytes[$j+1] -eq 0xD9) {
                $imgLen = ($j + 2) - $i
                if ($imgLen -gt 10000) {
                    $count++
                    $imgBytes = New-Object byte[] $imgLen
                    [Array]::Copy($rawBytes, $i, $imgBytes, 0, $imgLen)
                    $outFile = Join-Path $outDir "extracted_$count.jpg"
                    [System.IO.File]::WriteAllBytes($outFile, $imgBytes)
                    Write-Host "Extracted JPEG $count ($imgLen bytes)"
                }
                break
            }
        }
    }
}

Write-Host "Total Extracted JPEGs: $count"
