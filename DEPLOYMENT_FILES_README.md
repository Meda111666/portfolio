# 🎯 DEPLOYMENT FAJLOVI - Šta imaš i kako ih koristiti

---

## 📂 DEPLOYMENT FAJLOVI:

```
portfolio-medin/
├── 📖 DEPLOY_HOSTINGER_GUIDE.md    ← Kompletan vodič (detaljno)
├── 📖 BRZI_DEPLOY.md                ← Brzi vodič (korak po korak)
├── 🔧 build-deploy.ps1              ← PowerShell skripta za build
├── ⚙️ .env.production               ← Production env variables
├── ⚙️ src/config.js                 ← API URL config (auto dev/prod)
└── 🔧 .htaccess                     ← Apache rewrite rules
```

---

## 🚀 KAKO KORISTITI:

### 1️⃣ Pročitaj Vodiče

**Za detaljno objašnjenje:**

```
Otvori: DEPLOY_HOSTINGER_GUIDE.md
```

- Sve opcije hostinga
- Cene i paketi
- FTP setup
- Backend hosting opcije
- Troubleshooting

**Za brz deploy:**

```
Otvori: BRZI_DEPLOY.md
```

- Jednostavni koraci
- Hostinger upload
- Render.com backend
- Finalna provera

---

### 2️⃣ Build Sajt

**Opcija A: Manuelno**

```bash
npm run build
```

**Opcija B: PowerShell Skripta** ✨

```powershell
.\build-deploy.ps1
```

Skripta će:

- ✅ Build frontend
- ✅ Proveriti dist/ folder
- ✅ Pokazati listu fajlova
- ✅ Dati instrukcije za upload

---

### 3️⃣ Upload Frontend na Hostinger

**Fajlovi koje upload-uješ:**

```
dist/
├── index.html          ← OBAVEZNO
├── assets/             ← OBAVEZNO (folder sa JS/CSS)
│   ├── index-xxx.js
│   └── index-xxx.css
├── vite.svg
├── eg.jpg              ← Tvoja slika
├── Screenshot_2.png    ← Projekat 1
├── Screenshot_3.png    ← Projekat 2
└── Screenshot_4.png    ← Projekat 3

+ .htaccess             ← OBAVEZNO za React routing!
```

**Gde upload-ovati:**

```
Hostinger File Manager → public_html/
```

**VAŽNO:** Upload **SADRŽAJ** dist/ foldera, ne sam folder!

---

### 4️⃣ Deploy Backend na Render.com

#### Korak 1: Push na GitHub

```bash
cd server
git init
git add .
git commit -m "Backend for portfolio"
git remote add origin https://github.com/tvoj-username/portfolio-backend.git
git push -u origin main
```

#### Korak 2: Render Setup

```
1. https://render.com → Sign Up (GitHub)
2. New → Web Service
3. Connect repo: portfolio-backend
4. Settings:
   - Name: portfolio-backend
   - Environment: Node
   - Build: npm install
   - Start: npm start
   - Instance: Free
5. Environment Variables:
   - EMAIL_USER=jjusufovicmedin@gmail.com
   - EMAIL_PASS=[tvoj_app_password]
6. Deploy!
```

**Backend URL:** `https://portfolio-backend.onrender.com`

---

### 5️⃣ Poveži Frontend i Backend

**Opcija A: Automatski (PREPORUČENO)** ✨

Već je podešeno! `src/config.js` automatski detektuje:

- **Development:** `http://localhost:5000`
- **Production:** URL iz `.env.production`

**Samo update `.env.production`:**

```env
VITE_API_URL=https://portfolio-backend.onrender.com
```

**Rebuild:**

```bash
npm run build
```

**Upload novi dist/ na Hostinger!**

---

**Opcija B: Manuelno**

Ako ne želiš config.js, direktno promeni u `Contact.jsx`:

```javascript
const response = await fetch("https://portfolio-backend.onrender.com/api/contact", {
```

---

### 6️⃣ Test!

**Frontend:**

```
http://tvojadomena.com
```

**Backend:**

```
https://portfolio-backend.onrender.com
```

**Kontakt forma:**

1. Popuni formu
2. Klikni "Pošalji"
3. Proveri Gmail inbox! 📧

---

## 🔧 .htaccess - Šta radi?

```apache
RewriteEngine On
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Bez ovog fajla:**

- `/about` → 404 error ❌
- `/projects` → 404 error ❌

**Sa ovim fajlom:**

- `/about` → index.html → React Router → About sekcija ✅
- `/projects` → index.html → React Router → Projects sekcija ✅

**Upload `.htaccess` u `public_html/`!**

---

## ⚙️ config.js - Kako radi?

```javascript
const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5000" // Development
    : "https://portfolio-backend.onrender.com"); // Production
```

**Development (npm run dev):**

```
API_URL = http://localhost:5000
```

**Production (npm run build):**

```
API_URL = https://portfolio-backend.onrender.com
```

**Automatski! Nema potrebe za manuelnim menjanjem! 🎉**

---

## 📊 DEPLOYMENT CHECKLIST

### Pre deploya:

```
[ ] npm run build radi
[ ] dist/ folder postoji
[ ] Sve slike su u public/ ili external URLs
[ ] Backend radi lokalno (npm run dev u server/)
[ ] EMAIL_USER i EMAIL_PASS konfigurisani u .env
```

### Frontend deploy:

```
[ ] Hostinger nalog kreiran
[ ] public_html/ folder očišćen
[ ] Upload dist/ sadržaj
[ ] Upload .htaccess
[ ] Test: http://tvojadomena.com
```

### Backend deploy:

```
[ ] GitHub repo kreiran
[ ] server/ pushed na GitHub
[ ] Render.com nalog kreiran
[ ] Web Service deployed
[ ] ENV variables dodati (EMAIL_USER, EMAIL_PASS)
[ ] Backend URL kopiran
```

### Povezivanje:

```
[ ] .env.production updated sa backend URL
[ ] npm run build (ponovo)
[ ] Upload novi dist/ na Hostinger
[ ] Test kontakt forma
[ ] Email stiže u Gmail inbox
```

---

## 🆘 TROUBLESHOOTING

### Problem: dist/ folder prazan nakon build

```bash
# Proveri da li build radi:
npm run build -- --debug

# Ili očisti cache i rebuild:
rm -rf node_modules dist
npm install
npm run build
```

### Problem: Backend se ne pokreće na Render

```
Render → Logs → Proveri greške
Najčešće: ENV variables nisu dodati
```

### Problem: CORS greška

```javascript
// U server/server.js dodaj:
app.use(
  cors({
    origin: ["http://localhost:5173", "https://tvojadomena.com"],
  })
);
```

### Problem: Kontakt forma ne šalje

```
1. F12 → Console → Vidi grešku
2. Proveri backend URL u config.js ili Contact.jsx
3. Test backend direktno: https://portfolio-backend.onrender.com
```

---

## 💰 TROŠKOVI

```
Hostinger Single:      3€/mesec (36€/god)
Domena (.com):         1€/mesec (12€/god) - opciono
Backend (Render):      0€ (free tier)
Email (Hostinger):     0€ (uključeno)
────────────────────────────────────────
UKUPNO:               3-4€/mesec
```

**To je manje od jednog burgera! 🍔**

---

## ✅ SUCCESS KRITERIJUM

**Tvoj sajt je uspešno deploy-ovan kada:**

```
✅ http://tvojadomena.com se otvara
✅ Sve sekcije se prikazuju
✅ Slike se učitavaju
✅ Navigacija radi (Hero, About, Vision, Projects, Blog, Contact)
✅ Blog članci se otvaraju i zatvaraju
✅ Kontakt forma šalje email
✅ Email stiže u Gmail inbox
✅ Responzivno na mobilnom (testiraj sa F12)
```

**SVE ✅? ČESTITAMO! 🎉🚀**

---

## 📚 DODATNI RESURSI

**Video tutoriali:**

- Hostinger Upload: YouTube "hostinger upload react app"
- Render Deploy: YouTube "render deploy nodejs"

**Dokumentacija:**

- Hostinger: https://support.hostinger.com
- Render: https://render.com/docs
- Vite: https://vitejs.dev/guide/static-deploy

---

## 🎯 JEDNOSTAVNO OBJAŠNJENJE

```
Tvoj Računar          GitHub          Render.com
    ↓                    ↓                 ↓
  Backend          Push server/      Backend LIVE
(localhost:5000)      ↓            (https://xxx.onrender.com)


Tvoj Računar        Hostinger
    ↓                  ↓
  Frontend         Upload dist/
 (npm build)       (File Manager)
    ↓                  ↓
  dist/            Frontend LIVE
                (http://tvojadomena.com)
```

**Frontend → Hostinger (HTML/CSS/JS)**
**Backend → Render (Node.js API)**
**Povezani preko config.js! 🔗**

---

**Sve jasno? Hajde da deploy-uješ! 🚀✨**
