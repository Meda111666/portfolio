# 🚀 VERCEL DEPLOYMENT - Kompletan Vodič (5 Minuta!)

---

## 🎯 ŠTA JE VERCEL?

**Vercel** je platforma za hosting frontend aplikacija (React, Vue, Next.js).

- 🆓 **Potpuno besplatno** za lične projekte
- ⚡ **Super brz** - Global CDN
- 🔄 **Auto deploy** - Push na GitHub = sajt se ažurira
- 🌐 **Besplatan subdomain** - `tvojsajt.vercel.app`
- 📊 **Analytics** - Prati posetioce

---

## 📋 PRE NEGO ŠTO POČNEŠ

### Šta ti treba:

```
✅ GitHub nalog (besplatan)
✅ Vercel nalog (besplatan)
✅ Tvoj portfolio projekat
✅ 5 minuta vremena
```

---

## 🚀 METOD 1: Vercel CLI (Najbrži - 2 minuta!)

### Korak 1: Instaliraj Vercel CLI

```bash
npm install -g vercel
```

### Korak 2: Login

```bash
vercel login
```

Unesi email → Proveri inbox → Klikni "Verify" → Done! ✅

### Korak 3: Deploy!

```bash
# U glavnom folderu (portfolio-medin)
vercel
```

**Pitanja koja će se pojaviti:**

```
? Set up and deploy "portfolio-medin"? [Y/n]
→ Y

? Which scope do you want to deploy to?
→ [tvoj-email]

? Link to existing project? [y/N]
→ N

? What's your project's name?
→ portfolio-medin

? In which directory is your code located?
→ ./ (enter)

? Want to modify these settings? [y/N]
→ N
```

**Vercel će:**

1. ✅ Detektovati Vite projekat
2. ✅ Instalirati dependencies
3. ✅ Build (`npm run build`)
4. ✅ Deploy na CDN

**Za 30-60 sekundi:**

```
✅ Production: https://portfolio-medin.vercel.app
```

**GOTOVO! Tvoj sajt je LIVE! 🎉**

---

## 🔗 METOD 2: GitHub Integration (Best Practice!)

### Korak 1: Push na GitHub

#### A) Ako nemaš GitHub repo:

```bash
# U glavnom folderu (portfolio-medin)
git init
git add .
git commit -m "Initial commit"

# Idi na https://github.com/new i kreiraj repo: portfolio-medin
# Zatim:
git remote add origin https://github.com/tvoj-username/portfolio-medin.git
git branch -M main
git push -u origin main
```

#### B) Ako već imaš repo:

```bash
git add .
git commit -m "Ready for deployment"
git push
```

### Korak 2: Connect Vercel sa GitHub

1. **Idi na:** https://vercel.com
2. **Sign Up / Login** sa GitHub nalogom
3. **Dashboard → New Project**
4. **Import Git Repository**
5. **Select:** `portfolio-medin`
6. **Configure Project:**
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   ```
7. **Deploy!**

**Za 1-2 minuta:**

```
✅ Deployed to: https://portfolio-medin.vercel.app
```

---

## 🎯 AUTO DEPLOY SETUP

**Sada kada je povezano sa GitHub-om:**

```
Local Changes → Git Push → Vercel Auto Deploy → Live Update!
```

**Primer:**

```bash
# Promeniš nešto u kodu
git add .
git commit -m "Updated About section"
git push

# Vercel automatski:
# 1. Detektuje push
# 2. Build projekat
# 3. Deploy novi sajt
# 4. Pošalje ti notifikaciju
```

**Za 1-2 minuta novi sajt je live! 🚀**

---

## 🌐 CUSTOM DOMENA (Opciono)

### Korak 1: Kupi Domenu

**Gde kupiti:**

- **Namecheap** - ~10€/god
- **Google Domains** - ~12€/god
- **Hostinger** - ~10€/god
- **Porkbun** - ~8€/god (najjeftinije!)

### Korak 2: Dodaj Domenu na Vercel

1. **Vercel Dashboard → tvoj projekat**
2. **Settings → Domains**
3. **Add Domain:** `tvojsajt.com`
4. **Copy DNS records**

### Korak 3: Update DNS kod Registrara

**Dodaj A record:**

```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   Auto
```

**Dodaj CNAME za www:**

```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   Auto
```

### Korak 4: Verify

**Sačekaj 5-30 minuta** (DNS propagacija)

**Zatim:**

```
✅ http://tvojsajt.com
✅ https://tvojsajt.com (auto SSL)
✅ http://www.tvojsajt.com
```

**Sve radi! 🎉**

---

## 📧 BACKEND DEPLOYMENT

### Opcija A: Vercel Serverless Functions

**Kreiraj:** `api/contact.js`

```javascript
// api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nova poruka - ${name}`,
      html: `
        <h2>Nova poruka sa portfolio sajta</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email poslat!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
```

**Update Contact.jsx:**

```javascript
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

**Dodaj ENV variables na Vercel:**

```
Settings → Environment Variables
→ EMAIL_USER = jjusufovicmedin@gmail.com
→ EMAIL_PASS = tvoj_app_password
```

**Redeploy i gotovo! ✅**

---

### Opcija B: External Backend (Render.com)

**Isto kao ranije:**

```
Backend: https://portfolio-backend.onrender.com
Frontend: https://portfolio.vercel.app
```

**Update config.js:**

```javascript
const API_URL = "https://portfolio-backend.onrender.com";
```

---

## 📊 VERCEL ANALYTICS

**Besplatno dobijas:**

- 📈 Page views
- 👥 Unique visitors
- 🌍 Geographic data
- 📱 Device breakdown
- ⏱️ Load times

**Aktiviraj:**

```
Dashboard → Analytics → Enable
```

---

## 🎨 PREVIEW DEPLOYMENTS

**Svaka branch dobija svoj URL!**

```
main branch:
https://portfolio.vercel.app

feature branch:
https://portfolio-git-feature.vercel.app

Pull Request:
https://portfolio-pr-5.vercel.app
```

**Idealno za testiranje!**

---

## 🔄 ENVIRONMENTS

**Vercel ima 3 environment-a:**

### 1. **Production** (main branch)

```
https://portfolio.vercel.app
```

### 2. **Preview** (feature branches)

```
https://portfolio-git-test.vercel.app
```

### 3. **Development** (localhost)

```
http://localhost:5173
```

**ENV Variables za svaki:**

```
Production:  EMAIL_USER, EMAIL_PASS
Preview:     EMAIL_USER_TEST, EMAIL_PASS_TEST
Development: .env.local
```

---

## ⚡ OPTIMIZATION TIPS

### 1. **Edge Functions**

```javascript
// vercel.json
{
  "functions": {
    "api/**/*.js": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

### 2. **Caching**

```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. **Image Optimization**

```javascript
// Koristi Vercel Image Optimization
import Image from "next/image"; // Ako koristiš Next.js

// Ili external optimizaciju
<img src="https://images.unsplash.com/..." loading="lazy" />;
```

---

## 🆘 TROUBLESHOOTING

### Problem: Build fails

```bash
# Lokalno proveri da build radi:
npm run build

# Proveri Vercel logs:
Dashboard → Deployments → Failed Build → View Logs
```

### Problem: ENV variables ne rade

```
1. Settings → Environment Variables
2. Proveri da su dodati za Production
3. Redeploy (Deployments → ... → Redeploy)
```

### Problem: 404 na rutama (npr /about)

```javascript
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Problem: CORS greška

```javascript
// api/contact.js
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ...rest of code
}
```

---

## 📋 DEPLOYMENT CHECKLIST

### Pre deploya:

```
[ ] npm run build radi lokalno
[ ] dist/ folder se kreira
[ ] Sve slike su dostupne
[ ] ENV variables pripremljene (.env.production)
[ ] GitHub repo kreiran
[ ] Code pushed na GitHub
```

### Nakon deploya:

```
[ ] Sajt se otvara (https://portfolio.vercel.app)
[ ] Sve sekcije se vide
[ ] Slike se učitavaju
[ ] Navigacija radi
[ ] Blog radi
[ ] Kontakt forma šalje emailove
[ ] Responsive na mobilnom
```

---

## 💰 PRICING

### **Free Plan** (Za tebe!)

```
✅ Unlimited projects
✅ Automatic HTTPS
✅ Continuous deployment
✅ 100GB bandwidth/month
✅ Serverless Functions
✅ Edge Functions
✅ Analytics (Web Vitals)
✅ Preview Deployments
```

### **Pro Plan** ($20/mesec)

```
Pro features:
- Password protection
- More team members
- Advanced analytics
- DDoS mitigation
```

**Free plan je sasvim dovoljan! ✅**

---

## 🎯 QUICK START (2 MINUTA!)

```bash
# Terminal 1: Install & Login
npm install -g vercel
vercel login

# Terminal 2: Deploy
cd portfolio-medin
vercel

# Done! 🎉
```

**Ili sa GitHub-om:**

```
1. Push na GitHub
2. Vercel.com → New Project
3. Import Git Repository
4. Deploy!
```

---

## ✅ SUCCESS CRITERIA

**Tvoj sajt je uspešno deployed kada:**

```
✅ https://portfolio.vercel.app se otvara
✅ Sve sekcije funkcionišu (Hero, About, Vision, Projects, Blog, Contact)
✅ Slike se učitavaju
✅ Navigacija radi smooth
✅ Blog članci se otvaraju i zatvaraju
✅ Kontakt forma šalje emailove (ako si setup-ovao backend)
✅ Responsive na svim uređajima
✅ Load time < 2s
✅ Lighthouse score > 90
```

---

## 🎉 GOTOVO!

**Tvoj sajt je sada live na:**

```
https://portfolio-medin.vercel.app
```

**Možeš podeliti link bilo gde:**

- LinkedIn
- Resume/CV
- Email signature
- Social media

**I najbolje od svega - svaki put kada push-uješ na GitHub, sajt se automatski ažurira! 🚀**

---

**Ready to deploy? Hajde! 💪**

```bash
vercel
```
