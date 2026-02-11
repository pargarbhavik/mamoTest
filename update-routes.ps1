# Update all route paths in pug files

$replacements = @{
    "href='software-development'" = "href='/software-development'"
    "href=`"software`"" = "href=`"/software-development`""
    "href='frontend-development'" = "href='/frontend-development'"
    "href=`"frontend`"" = "href=`"/frontend-development`""
    "href='website-development'" = "href='/website-development'"
    "href=`"websitedevelopment`"" = "href=`"/website-development`""
    "href='web-portal'" = "href='/web-portal'"
    "href=`"webporttal`"" = "href=`"/web-portal`""
    "href='custom-app'" = "href='/custom-app'"
    "href=`"customapp`"" = "href=`"/custom-app`""
    "href='qa-testing'" = "href='/qa-testing'"
    "href=`"qa`"" = "href=`"/qa-testing`""
    "href='itstaff-augmentation'" = "href='/itstaff-augmentation'"
    "href=`"itstaff`"" = "href=`"/itstaff-augmentation`""
    "href='virtual-assistant-services'" = "href='/virtual-assistant-services'"
    "href=`"vas`"" = "href=`"/virtual-assistant-services`""
    "href='digital-transformation'" = "href='/digital-transformation'"
    "href=`"digitaltransformation`"" = "href=`"/digital-transformation`""
    "href='packaging-design'" = "href='/packaging-design'"
    "href=`"pds`"" = "href=`"/packaging-design`""
}

$pugFiles = Get-ChildItem -Path "views" -Filter "*.pug" -Recurse

foreach ($file in $pugFiles) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    foreach ($old in $replacements.Keys) {
        $new = $replacements[$old]
        if ($content -match [regex]::Escape($old)) {
            $content = $content -replace [regex]::Escape($old), $new
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "Route update complete!"
