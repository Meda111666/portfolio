# 🚀 KAKO POSTAVITI SAJT NA HOSTINGER (Kompletan Vodič)

---

## 📋 SADRŽAJ:

1. [Priprema Sajta za Deploy](#1-priprema-sajta)
2. [Hostinger Setup](#2-hostinger-setup)
3. [Deploy Frontend (React)](#3-deploy-frontend)
4. [Deploy Backend (Node.js)](#4-deploy-backend)
5. [Domena i DNS](#5-domena-i-dns)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. PRIPREMA SAJTA

### ⚙️ Build Frontend

```bash
# U glavnom folderu (portfolio-medin)
npm run build
```

Ovo kreira `dist/` folder sa optimizovanim HTML/CSS/JS fajlovima.

### 📂 Šta build pravi:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js      # Kompajlirani JavaScript
│   ├── index-[hash].css      # Kompajlirani CSS
│   └── [images]              # Slike
└── vite.svg
```

---

## 2. HOSTINGER SETUP

### 💰 Cena i Paketi:

| Paket        | Cena         | Specs                | Za tebe                   |
| ------------ | ------------ | -------------------- | ------------------------- |
| **Single**   | ~2-3€/mesec  | 1 sajt, 50GB         | ✅ Idealno za portfolio   |
| **Premium**  | ~3-5€/mesec  | 100 sajtova, 100GB   | Ako planiraš više sajtova |
| **Business** | ~8-12€/mesec | 200GB, dnevni backup | Ako planiraš e-commerce   |

**Za portfolio sajt: Single je više nego dovoljno!**

### 📝 Registracija:

1. **Idi na:** https://www.hostinger.com
2. **Izaberi paket:** Single (najjeftiniji)
3. **Registruj se:** Email + password
4. **Plaćanje:** Kartica ili PayPal
5. **Primi potvrdu:** Check email

---

## 3. DEPLOY FRONTEND (React)

### 🌐 Opcija A: Direktan Upload (Najlakše!)

#### Korak 1: Upload fajlova

1. **Login na Hostinger:** https://hpanel.hostinger.com
2. **Hosting → File Manager**
3. **Navigiraj u:** `public_html/` folder
4. **OBRIŠI SVE** što je unutra (default fajlovi)
5. **Upload:** Sve iz `dist/` foldera
   - `index.html`
   - `assets/` folder
   - `vite.svg`
   - Sve ostalo

**VAŽNO:** Ne uploaduj `dist/` folder, već **sadržaj** dist foldera!

```
✅ TAČNO:
public_html/
├── index.html
├── assets/
└── vite.svg

❌ POGREŠNO:
public_html/
└── dist/
    ├── index.html
    └── assets/
```

#### Korak 2: Test

Otvori svoju domenu u browser-u:

```
http://tvojadomena.com
```

Trebalo bi da vidiš svoj portfolio sajt! 🎉

---

### 🌐 Opcija B: FTP Upload (Brže za velike sajtove)

#### 1. Download FTP klijent:

- **FileZilla** (besplatan): https://filezilla-project.org/

#### 2. Napravi FTP nalog na Hostinger:

```
Hostinger Panel → FTP Accounts → Create FTP Account
```

**Podaci koje trebaš:**

- **FTP Host:** ftp.tvojadomena.com
- **Username:** [tvoj username]
- **Password:** [tvoj password]
- **Port:** 21

#### 3. Konektuj se u FileZilla:

```
Host: ftp.tvojadomena.com
Username: [tvoj username]
Password: [tvoj password]
Port: 21
```

#### 4. Upload:

- **Levo:** Lokalni fajlovi (tvoj računar)
- **Desno:** Server (Hostinger)
- Navigiraj u `public_html/`
- Prevuci sve iz `dist/` foldera

---

## 4. DEPLOY BACKEND (Node.js)

### ⚠️ PROBLEM: Hostinger Shared Hosting NE PODRŽAVA Node.js!

**Hostinger Single/Premium paketi nemaju Node.js!**

### 🎯 REŠENJA:

#### **Rešenje 1: Koristi Besplatne Backend Hostinge** ✅ **PREPORUČENO**

##### **A) Render.com (Besplatan)**

1. **Idi na:** https://render.com
2. **Sign up:** GitHub nalog
3. **New → Web Service**
4. **Connect GitHub:** Push `server/` folder na GitHub
5. **Settings:**
   ```
   Name: portfolio-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   Instance Type: Free
   ```
6. **Environment Variables:** Dodaj .env vrednosti
   ```
   EMAIL_USER=jjusufovicmedin@gmail.com
   EMAIL_PASS=tvoj_app_password
   PORT=5000
   ```
7. **Deploy!**

**Backend URL:** `https://portfolio-backend.onrender.com`

##### **B) Railway.app (Besplatan)**

1. **Idi na:** https://railway.app
2. **Login:** GitHub
3. **New Project → Deploy from GitHub**
4. **Select `server/` folder**
5. **Dodaj Environment Variables** (EMAIL_USER, EMAIL_PASS)
6. **Deploy!**

##### **C) Vercel (Besplatan, ali za API routes)**

Možeš koristiti Vercel Serverless Functions.

---

#### **Rešenje 2: Upgrade Hostinger na VPS** 💰

**VPS (Virtual Private Server):**

- Cena: ~4-8€/mesec
- Node.js support ✅
- SSH access ✅
- Full control ✅

**Ali za portfolio sajt, besplatni backend hosting je SAVRŠEN!**

---

### 🔗 Poveži Frontend sa Backend-om

U tvom React kodu, promeni backend URL:

**Otvori:** `src/components/Contact.jsx`

**Promeni:**

```javascript
// STARO (localhost)
const response = await fetch("http://localhost:5000/api/contact", {

// NOVO (production)
const response = await fetch("https://portfolio-backend.onrender.com/api/contact", {
```

**Rebuild frontend:**

```bash
npm run build
```

**Upload novi build na Hostinger!**

---

## 5. DOMENA I DNS

### 🌐 Ako imaš svoju domenu:

1. **Hostinger Panel → Domains**
2. **Add Existing Domain**
3. **Unesi domenu:** `mojsajt.com`
4. **Update nameservers** kod registrara domena:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```

### 🌐 Ako nemaš domenu:

**Hostinger ti daje besplatnu subdomenu:**

```
https://tvojusername.hostingersite.com
```

**Ili kupi domenu (~8-12€/god):**

- Hostinger ima registraciju domena
- `.com` domena: ~10€/godišnje
- `.me` domena: ~15€/godišnje
- `.rs` domena: ~15€/godišnje

---

## 6. TROUBLESHOOTING

### ❌ Problem 1: "404 Not Found" nakon deploya

**Razlog:** React Router ne radi na serveru

**Rešenje:** Kreiraj `.htaccess` fajl u `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Upload ovaj fajl u `public_html/`.

---

### ❌ Problem 2: "CORS Error" - Backend blokira frontend

**Razlog:** Backend ne dozvoljava frontend domenu

**Rešenje:** U `server/server.js` dodaj:

```javascript
const allowedOrigins = [
  "http://localhost:5173",
  "https://tvojadomena.com",
  "https://tvojusername.hostingersite.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
```

Redeploy backend na Render/Railway.

---

### ❌ Problem 3: Slike se ne učitavaju

**Razlog:** Putanje do slika nisu tačne

**Rešenje:**

```javascript
// ❌ POGREŠNO
<img src="/Screenshot_2.png" />

// ✅ TAČNO
<img src="/Screenshot_2.png" />  // Ako je slika u public/
// ILI
<img src="https://images.unsplash.com/..." />  // Eksterni URL
```

---

### ❌ Problem 4: Backend timeout na Render

**Razlog:** Render free tier uspava app nakon 15 min neaktivnosti

**Rešenje:**

**A) Koristi paid tier** (7$/mesec)

**B) Keep-alive ping:**

```javascript
// U server.js dodaj
setInterval(() => {
  fetch("https://portfolio-backend.onrender.com").catch(() => {});
}, 840000); // 14 minuta
```

**C) Koristi cron job** (https://cron-job.org) da pinga backend svakih 10 min

---

## 📊 DEPLOY PLAN (Korak po Korak)

```
┌─────────────────────────────────────────┐
│  FRONTEND (React)                       │
├─────────────────────────────────────────┤
│  1. npm run build                       │
│  2. Upload dist/ na Hostinger           │
│  3. Test: http://tvojadomena.com        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  BACKEND (Node.js)                      │
├─────────────────────────────────────────┤
│  1. Push server/ na GitHub              │
│  2. Deploy na Render.com (free)         │
│  3. Dodaj ENV variables                 │
│  4. Note backend URL                    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  POVEZIVANJE                            │
├─────────────────────────────────────────┤
│  1. Promeni fetch URL u Contact.jsx     │
│  2. npm run build (ponovo)              │
│  3. Upload novi build na Hostinger      │
│  4. Test kontakt forma!                 │
└─────────────────────────────────────────┘
```

---

## 💰 TROŠKOVI (Godišnje)

```
Hostinger Single:   30-40€/god
Domena (.com):      10-12€/god
Backend (Render):   0€ (free tier)
─────────────────────────────────
UKUPNO:            40-52€/god

To je ~3-4€ mesečno! 🎉
```

---

## 🎯 BRZI START (10 MINUTA)

### Korak 1: Build (1 min)

```bash
npm run build
```

### Korak 2: Hostinger Login (2 min)

- Login na https://hpanel.hostinger.com
- File Manager → public_html/
- Upload dist/ sadržaj

### Korak 3: Backend Deploy (5 min)

- Render.com signup
- New Web Service
- Connect GitHub (push server folder)
- Add ENV variables
- Deploy!

### Korak 4: Connect (2 min)

- Update Contact.jsx sa backend URL
- Rebuild: `npm run build`
- Upload novi build

### Korak 5: Test! ✅

```
http://tvojadomena.com
```

---

## 📚 DODATNI RESURSI

### Video Tutoriali:

- **Hostinger Upload:** https://www.youtube.com/results?search_query=hostinger+upload+website
- **Render Deploy:** https://www.youtube.com/results?search_query=render+deploy+nodejs

### Dokumentacija:

- **Hostinger Help:** https://support.hostinger.com
- **Render Docs:** https://render.com/docs
- **Vite Deploy:** https://vitejs.dev/guide/static-deploy.html

---

## ✅ CHECKLIST PRED DEPLOY

```
Frontend:
[ ] npm run build uspešan
[ ] dist/ folder postoji
[ ] Sve slike su u public/ ili external URLs
[ ] index.html je u dist/
[ ] Test lokalno: npm run preview

Backend:
[ ] .env fajl konfiguris an
[ ] server.js radi lokalno
[ ] package.json ima "start": "node server.js"
[ ] CORS podešen za production domenu
[ ] EMAIL_USER i EMAIL_PASS testirani

Hostinger:
[ ] Nalog kreiran
[ ] Paket plaćen (Single)
[ ] Domena povezana (ili koristiš subdomain)
[ ] File Manager otvoren

Ready to Deploy! 🚀
```

---

## 🎉 GOTOV SI!

**Tvoj sajt će biti live za ~15 minuta!** 🌐✨

**Imaš pitanja?** Pitaj me! 😊

---

**Happy Deploying! 🚀🌐💻**
