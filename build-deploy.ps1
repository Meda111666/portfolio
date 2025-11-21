# 🚀 Build i Deploy Skripta

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  PORTFOLIO BUILD & DEPLOY" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Korak 1: Build Frontend
Write-Host "📦 Korak 1: Building frontend..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build uspešan!" -ForegroundColor Green
Write-Host ""

# Korak 2: Provera dist/ foldera
Write-Host "📂 Korak 2: Proveravam dist/ folder..." -ForegroundColor Yellow

if (Test-Path "dist") {
    Write-Host "✅ dist/ folder postoji" -ForegroundColor Green
    
    # Lista fajlova
    Write-Host ""
    Write-Host "📄 Fajlovi u dist/:" -ForegroundColor Cyan
    Get-ChildItem -Path "dist" -Recurse | Select-Object Name, Length | Format-Table
} else {
    Write-Host "❌ dist/ folder ne postoji!" -ForegroundColor Red
    exit 1
}

# Korak 3: Instrukcije za upload
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "  SLEDEĆI KORACI" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "🌐 FRONTEND (Hostinger):" -ForegroundColor Yellow
Write-Host "  1. Login: https://hpanel.hostinger.com" -ForegroundColor White
Write-Host "  2. File Manager → public_html/" -ForegroundColor White
Write-Host "  3. Obriši sve postojeće fajlove" -ForegroundColor White
Write-Host "  4. Upload SVE iz dist/ foldera" -ForegroundColor White
Write-Host ""

Write-Host "🖥️  BACKEND (Render.com):" -ForegroundColor Yellow
Write-Host "  1. Push server/ na GitHub" -ForegroundColor White
Write-Host "  2. Render → New Web Service" -ForegroundColor White
Write-Host "  3. Connect GitHub repo" -ForegroundColor White
Write-Host "  4. Dodaj ENV variables:" -ForegroundColor White
Write-Host "     - EMAIL_USER=jjusufovicmedin@gmail.com" -ForegroundColor Gray
Write-Host "     - EMAIL_PASS=[tvoj_app_password]" -ForegroundColor Gray
Write-Host "  5. Deploy!" -ForegroundColor White
Write-Host ""

Write-Host "🔗 POVEZIVANJE:" -ForegroundColor Yellow
Write-Host "  1. Kopiraj Render backend URL" -ForegroundColor White
Write-Host "  2. Update src/components/Contact.jsx" -ForegroundColor White
Write-Host "  3. npm run build (ponovo)" -ForegroundColor White
Write-Host "  4. Upload novi dist/ na Hostinger" -ForegroundColor White
Write-Host ""

Write-Host "✅ Build je gotov! Sada samo upload! 🚀" -ForegroundColor Green
Write-Host ""

# Pause
Read-Host "Pritisni Enter za izlaz"
