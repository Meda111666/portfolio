# 🚀 BRZI DEPLOY VODIČ

## 📋 Priprema za Deploy (Pre nego što počneš)

### 1. Build Frontend

```bash
npm run build
```

Rezultat: `dist/` folder sa svim fajlovima

---

## 🌐 HOSTINGER - Frontend Deploy

### Korak 1: Login

```
URL: https://hpanel.hostinger.com
```

### Korak 2: File Manager

```
Hosting → Websites → File Manager
```

### Korak 3: Upload

```
Navigiraj u: public_html/
Obriši: SVE postojeće fajlove
Upload: SVE iz dist/ foldera (ne folder, već sadržaj!)
```

### Fajlovi koje upload-uješ:

```
✅ index.html
✅ assets/ (folder)
✅ vite.svg
✅ .htaccess (za React routing)
✅ eg.jpg (tvoja slika)
✅ Screenshot_2.png
✅ Screenshot_3.png
✅ Screenshot_4.png
```

### Korak 4: Test

```
http://tvojadomena.com
```

**Gotovo! Frontend je LIVE! 🎉**

---

## 🖥️ RENDER.COM - Backend Deploy

### Korak 1: Pripremi GitHub Repo

```bash
# Idi u server folder
cd server

# Inicijalizuj git (ako već nije)
git init

# Dodaj fajlove
git add .

# Commit
git commit -m "Portfolio backend"

# Kreiraj repo na GitHub
# Idi na: https://github.com/new
# Ime: portfolio-backend

# Push
git remote add origin https://github.com/tvoj-username/portfolio-backend.git
git push -u origin main
```

### Korak 2: Render Setup

1. **Idi na:** https://render.com
2. **Sign Up** sa GitHub nalogom
3. **New → Web Service**
4. **Connect Repository:** Izaberi `portfolio-backend`

### Korak 3: Konfiguracija

```
Name:           portfolio-backend
Environment:    Node
Region:         Frankfurt (ili najbliža)
Branch:         main
Build Command:  npm install
Start Command:  npm start
Instance Type:  Free
```

### Korak 4: Environment Variables

Dodaj ove varijable:

```
EMAIL_USER = jjusufovicmedin@gmail.com
EMAIL_PASS = tvoj_16_digit_app_password
PORT = 5000
```

### Korak 5: Deploy

Klikni **"Create Web Service"**

**Backend URL:** `https://portfolio-backend.onrender.com`

---

## 🔗 Povezivanje Frontend i Backend

### Korak 1: Update Contact.jsx

Otvori: `src/components/Contact.jsx`

**Nađi liniju:**

```javascript
const response = await fetch("http://localhost:5000/api/contact", {
```

**Zameni sa:**

```javascript
const response = await fetch("https://portfolio-backend.onrender.com/api/contact", {
```

**NAPOMENA:** Zameni `portfolio-backend` sa tvojim Render URL-om!

### Korak 2: Rebuild Frontend

```bash
npm run build
```

### Korak 3: Upload novi build

- Idi na Hostinger File Manager
- Obriši stari `assets/` folder
- Upload novi `dist/` sadržaj

### Korak 4: Test Kontakt Formu! 📧

Idi na: `http://tvojadomena.com`
Popuni kontakt formu
Klikni "Pošalji"
Proveri Gmail inbox!

**Ako stigao email = GOTOVO! 🎉**

---

## ⚡ Express Deploy (Bez GitHub)

Ako ne želiš GitHub, možeš koristiti Render's **Blueprint**:

1. Render → New → Web Service
2. Deploy from Docker / Manual deploy
3. Upload `server/` folder kao ZIP
4. Podesi ENV variables
5. Deploy!

---

## 🎯 Finalna Provera

### ✅ Frontend Checklist:

- [ ] `http://tvojadomena.com` se otvara
- [ ] Sve sekcije se vide (Hero, About, Vision, Projects, Blog, Contact)
- [ ] Slike se učitavaju
- [ ] Navigacija radi (klikni linkove u Header-u)
- [ ] Blog članci se otvaraju i zatvaraju
- [ ] Responzivno na mobilnom (F12 → Device toolbar)

### ✅ Backend Checklist:

- [ ] Render servis je "Live" (zeleno)
- [ ] `https://portfolio-backend.onrender.com` vraća "Cannot GET /"
- [ ] ENV variables su dodati (EMAIL_USER, EMAIL_PASS)
- [ ] Logs ne pokazuju greške

### ✅ Kontakt Forma:

- [ ] Forma se pojavljuje na sajtu
- [ ] Popuni: Ime, Email, Poruka
- [ ] Klikni "Pošalji"
- [ ] Vidiš "✅ Poruka uspješno poslata!"
- [ ] Email stiže u Gmail inbox

**SVE JE ✅? GOTOV SI! 🎊**

---

## 🆘 Ako nešto ne radi:

### Frontend ne učitava?

```
1. Proveri: Jesi li upload-ovao SADRŽAJ dist/, ne dist/ folder?
2. Proveri: Da li index.html je u public_html/, ne u public_html/dist/?
3. Proveri: Browser konzola (F12) - ima li grešaka?
```

### Backend ne radi?

```
1. Render → Logs → Proveri greške
2. Proveri ENV variables
3. Proveri da je "Live" (zeleno)
4. Test: https://portfolio-backend.onrender.com/api/contact (treba "Cannot POST")
```

### Kontakt forma ne šalje?

```
1. Browser konzola (F12) - vidi grešku
2. Proveri backend URL u Contact.jsx
3. Proveri da backend ima EMAIL_USER i EMAIL_PASS
4. Test backend sa: node test-backend.js
```

---

## 💰 Troškovi

```
Hostinger:  ~3€/mesec (36€/god)
Domena:     ~10€/god (opciono)
Backend:    0€ (Render free tier)
────────────────────────────
UKUPNO:     ~3-4€/mesec
```

---

## 📧 Bonus: Custom Email

Ako želiš email kao `contact@tvojadomena.com`:

1. Hostinger → Email → Create Email
2. Username: `contact`
3. Password: [izaberi jak password]
4. Forwarding: Prosledi na `jjusufovicmedin@gmail.com`

**Gotovo! Sada primaš emailove na professional adresu! 📬**

---

**Sve jasno? Hajde da deploy-uješ! 🚀**
