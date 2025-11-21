# 🎨 Portfolio Website - Full Stack

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Moderni portfolio sajt sa React frontend-om, Node.js backend-om i MongoDB bazom podataka**

[🚀 Demo](#-demo) • [✨ Features](#-features) • [🛠 Setup](#-quick-start) • [📚 Docs](#-dokumentacija)

</div>

---

## 📋 O Projektu

Full-stack portfolio aplikacija sa:

- 🎨 **React 19** + **Vite** - Brz i moderan frontend
- 🎭 **Framer Motion** - Glatke animacije
- 🎨 **TailwindCSS** - Utility-first styling
- 🟢 **Node.js** + **Express** - RESTful API
- 🍃 **MongoDB Atlas** - Cloud baza podataka
- 📧 **Nodemailer** - Email integracija

---

## ✨ Features

### Frontend:

- ✅ Responsive dizajn (mobile + desktop)
- ✅ Dark blue tema sa gradijentima
- ✅ Smooth scroll animacije
- ✅ Background images na svim sekcijama
- ✅ Tehnologija icons sa hover efektima
- ✅ Portfolio projekti sa live linkovima
- ✅ Validirana kontakt forma sa status messages

### Backend:

- ✅ RESTful API endpoints
- ✅ MongoDB integracija (Mongoose)
- ✅ Email slanje preko Gmail-a
- ✅ CRUD operacije za poruke
- ✅ Input validacija i error handling
- ✅ IP tracking i status management

---

## 🚀 Quick Start

### 1️⃣ Kloniraj ili Preuzmi Projekat

```bash
git clone https://github.com/tvoj-username/portfolio-medin.git
cd portfolio-medin
```

### 2️⃣ Instaliraj Dependencies

**Frontend:**

```bash
npm install
```

**Backend:**

```bash
cd server
npm install
```

### 3️⃣ Konfiguriši Backend

**👉 Pročitaj:** [`START_HERE.md`](START_HERE.md) za kompletan vodič!

Ili brzo:

1. MongoDB Atlas setup (5 min) → [`QUICK_SETUP.md`](QUICK_SETUP.md)
2. Gmail App Password (3 min) → [`QUICK_SETUP.md`](QUICK_SETUP.md)
3. Popuni `server/.env` file

**Test backend:**

```bash
cd server
node test-backend.js
```

### 4️⃣ Pokreni Aplikaciju

**Terminal 1 - Backend:**

```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

**Otvori:** http://localhost:5173 🎉

---

## 📚 Dokumentacija

| Dokument                                     | Opis                                  |
| -------------------------------------------- | ------------------------------------- |
| **[START_HERE.md](START_HERE.md)**           | ⭐ **Počni ovde!** Navigacioni vodič  |
| **[CHECKLIST.md](CHECKLIST.md)**             | Korak-po-korak setup sa checkboxovima |
| **[QUICK_SETUP.md](QUICK_SETUP.md)**         | 10-minutni brzinski vodič             |
| **[README_COMPLETE.md](README_COMPLETE.md)** | Kompletna tehnička dokumentacija      |
| **[ARCHITECTURE.md](ARCHITECTURE.md)**       | Dijagrami i data flow                 |
| **[USEFUL_LINKS.md](USEFUL_LINKS.md)**       | Svi korisni linkovi i resursi         |

---

## 🛠 Tehnologije

<table>
<tr>
<td width="50%">

### Frontend

- ⚛️ React 19.2.0
- ⚡ Vite 7.2.4
- 🎨 TailwindCSS 3.4.1
- 🎭 Framer Motion
- 🎯 React Icons

</td>
<td width="50%">

### Backend

- 🟢 Node.js + Express 4.18.2
- 🍃 MongoDB + Mongoose 8.0.3
- 📧 Nodemailer 6.9.7
- 🔒 CORS, dotenv

</td>
</tr>
</table>

---

## 📁 Struktura Projekta

```
portfolio-medin/
├── src/                    # Frontend (React)
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── server/                 # Backend (Node.js)
│   ├── models/
│   │   └── Contact.js     # MongoDB model
│   ├── server.js          # Express server
│   ├── .env               # Konfiguracija
│   └── test-backend.js    # Test script
│
├── public/                 # Statički fajlovi
│   ├── eg.jpg             # Profilna slika
│   └── Screenshot_*.png   # Project screenshots
│
└── docs/                   # Dokumentacija
    ├── START_HERE.md
    ├── CHECKLIST.md
    └── ...
```

---

## 🎯 API Endpoints

### Javni:

- `POST /api/contact` - Pošalji kontakt poruku

### Admin (opcionalno):

- `GET /api/contacts` - Preuzmi sve poruke
- `GET /api/contacts/:id` - Jedna poruka
- `DELETE /api/contacts/:id` - Obriši poruku
- `PATCH /api/contacts/:id/status` - Promeni status

---

## 🚀 Deployment

### Frontend:

- **Vercel:** https://vercel.com/ (preporučeno)
- **Netlify:** https://netlify.com/
- **GitHub Pages**

### Backend:

- **Render:** https://render.com/ (preporučeno)
- **Railway:** https://railway.app/
- **Heroku**

**Detaljno:** [`README_COMPLETE.md`](README_COMPLETE.md) → DEPLOYMENT

---

## 🔒 Bezbednost

- ✅ `.env` je u `.gitignore`
- ✅ Mongoose input validacija
- ✅ Gmail App Password (ne obična lozinka)
- ✅ MongoDB SSL/TLS enkripcija
- ⚠️ Pre produkcije: Ograniči CORS i IP whitelist

---

## 🆘 Support

**Imaš problema?**

- 👉 [`QUICK_SETUP.md`](QUICK_SETUP.md) → "AKO NEŠTO NE RADI"
- 👉 [`CHECKLIST.md`](CHECKLIST.md) → Troubleshooting tabela
- 👉 [Issues](https://github.com/tvoj-username/portfolio-medin/issues)

---

## 📄 Licenca

Ovaj projekat je u slobodnoj upotrebi za lične ili komercijalne svrhe.

---

## 🙏 Credits

Napravljeno sa ❤️ koristeći:

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

<div align="center">

**⭐ Ako ti se sviđa projekat, ostavi star! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/tvoj-username/portfolio-medin?style=social)](https://github.com/tvoj-username/portfolio-medin)

**[🚀 Start Now](START_HERE.md)** • **[📚 Full Docs](README_COMPLETE.md)** • **[💬 Issues](https://github.com/tvoj-username/portfolio-medin/issues)**

</div>

---

<p align="center">
  <strong>Happy Coding! 🚀</strong>
</p>
