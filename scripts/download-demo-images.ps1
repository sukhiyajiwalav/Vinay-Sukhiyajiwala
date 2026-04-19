# Demo assets: Unsplash (Unsplash License) + one tech icon PNG copied for all TechStack spheres.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
if (-not (Test-Path "$root\package.json")) { $root = (Get-Location).Path }
$img = Join-Path $root "public\images"
New-Item -ItemType Directory -Force -Path $img | Out-Null

$q = "fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0"
function Get-Unsplash($id) { "https://images.unsplash.com/photo-$id`?$q" }

$pairs = @(
  @{ f = "ganesha.jpg"; id = "1615184697985-c9bde1b07da7" }
  @{ f = "life-unexpected.jpg"; id = "1605721911519-3dfeb3be25e7" }
  @{ f = "nazariya.jpg"; id = "1541512416146-3cf58d6b27cc" }
  @{ f = "afsos.jpg"; id = "1541961017774-22349e4a1262" }
  @{ f = "krupa.jpg"; id = "1602464729960-f95937746b68" }
  @{ f = "dard-se-takhleeq.jpg"; id = "1618331833071-ce81bd50d300" }
  @{ f = "bhatakta-hua.jpg"; id = "1622542796254-5b9c46ab0d2f" }
  @{ f = "ehsaas.jpg"; id = "1552250575-e508473b090f" }
  @{ f = "gussa.jpg"; id = "1533208087231-c3618eab623c" }
  @{ f = "bahuroopiya.jpg"; id = "1533158388470-9a56699990c6" }
  @{ f = "aaraish-e-maazi.jpg"; id = "1531056416665-266c4099c928" }
  @{ f = "splashing-mind.jpg"; id = "1618331835717-801e976710b2" }
  @{ f = "love-letter.jpg"; id = "1531489956451-20957fab52f2" }
  @{ f = "iztirab.jpg"; id = "1541542509806-6371b7b0a265" }
  @{ f = "haqeeqat.jpg"; id = "1541963463532-d68292c34b19" }
  @{ f = "bantwara.jpg"; id = "1578301978162-7aae4d755744" }
  @{ f = "aakhir-e-shab.jpg"; id = "1618005198919-d3d4b5a92ead" }
  @{ f = "kya-karein.jpg"; id = "1524758631624-e2822e304c36" }
  @{ f = "taqdeer.jpg"; id = "1506905925346-21bda4d32df4" }
  @{ f = "alahda.jpg"; id = "1507003211169-0a1dd7228f2d" }
  @{ f = "find-your-way.jpg"; id = "1558618666-fcd25c85cd64" }
  @{ f = "finding-purpose.jpg"; id = "1578662996442-48f60103fc96" }
)

foreach ($p in $pairs) {
  $url = Get-Unsplash $p.id
  $out = Join-Path $img $p.f
  Write-Host "GET $($p.f)"
  curl.exe -fsSL "$url" -o "$out"
  if ((Get-Item $out).Length -lt 5000) { throw "Download too small or failed: $($p.f)" }
}

# About page
curl.exe -fsSL (Get-Unsplash "1615184697985-c9bde1b07da7") -o (Join-Path $img "about-hero-painting.jpg")
curl.exe -fsSL "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?$q" -o (Join-Path $img "about-portrait.jpg")

# Golden flower: use `Photos/Gloden Flower.png` → copy to `public/images/golden-flower.png` (not downloaded here).

# Tech stack: one PNG texture duplicated (CDN Next.js path was invalid; replace with real logos anytime)
$techSrc = "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146364.png"
$tmp = Join-Path $img "_tech.png"
curl.exe -fsSL "$techSrc" -o "$tmp"
foreach ($name in @("react2.png","next2.png","node2.png","express.png","mongo.png","mysql.png","typescript.png","javascript.png")) {
  Copy-Item -Force "$tmp" (Join-Path $img $name)
}
Remove-Item -Force "$tmp"

Write-Host "Done. Images in $img"
