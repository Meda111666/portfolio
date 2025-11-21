# 🎨 Portfolio Website - Full Stack Aplikacija

Moderni portfolio sajt sa React frontend-om i Node.js backend-om, MongoDB bazom podataka i email funkcionalnostima.

---

## 🚀 BRZI START

### 1. Instaliraj Dependencies

#### Frontend:

```bash
npm install
```

#### Backend:

```bash
cd server
npm install
```

### 2. Podesi Backend

Prati detaljne korake u **`server/SETUP_INSTRUCTIONS.md`** za:

- ☁️ MongoDB Atlas setup (5 minuta)
- 📧 Gmail App Password (3 minuta)
- ⚙️ .env konfiguraciju

**Quick test backend konfiguracije:**

```bash
cd server
node test-backend.js
```

### 3. Pokreni Aplikaciju

#### Terminal 1 - Backend:

```bash
cd server
npm run dev
```

Server će biti na: http://localhost:5000

#### Terminal 2 - Frontend:

```bash
npm run dev
```

Sajt će biti na: http://localhost:5173

---

## 📁 STRUKTURA PROJEKTA

```
portfolio-medin/
│
├── src/                          # Frontend (React)
│   ├── components/
│   │   ├── Header.jsx           # Navigacija
│   │   ├── Hero.jsx             # Hero sekcija
│   │   ├── About.jsx            # O meni + tehnologije
│   │   ├── Projects.jsx         # Portfolio projekti
│   │   ├── Contact.jsx          # Kontakt forma
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Glavna komponenta
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
│
├── server/                       # Backend (Node.js + Express)
│   ├── models/
│   │   └── Contact.js           # Mongoose model
│   ├── server.js                # Express server
│   ├── .env                     # Konfiguracija (NE COMMIT-UJ!)
│   ├── .env.example             # Template za .env
│   ├── test-backend.js          # Test script
│   ├── package.json
│   ├── SETUP_INSTRUCTIONS.md    # 📖 DETALJNO UPUTSTVO
│   └── README_MONGODB.md        # MongoDB dokumentacija
│
├── public/                       # Statički fajlovi
│   ├── eg.jpg                   # Profilna slika
│   ├── Screenshot_2.png         # Project 1 screenshot
│   ├── Screenshot_3.png         # Project 2 screenshot
│   └── Screenshot_4.png         # Project 3 screenshot
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md                    # ← OVO ŠTO ČITAŠ

```

---

## 🛠 TEHNOLOGIJE

### Frontend:

- ⚛️ **React 19.2.0** - UI biblioteka
- ⚡ **Vite 7.2.4** - Build tool
- 🎨 **TailwindCSS 3.4.1** - Styling
- 🎭 **Framer Motion** - Animacije
- 🎯 **React Icons** - Icon biblioteka

### Backend:

- 🟢 **Node.js** + **Express 4.18.2**
- 🍃 **MongoDB** + **Mongoose 8.0.3**
- 📧 **Nodemailer 6.9.7** - Email slanje
- 🔒 **CORS** - Cross-Origin Resource Sharing
- 🔐 **dotenv** - Environment varijable

---

## ✨ FUNKCIONALNOSTI

### 🎨 Frontend:

- ✅ Responsive dizajn (mobile-first)
- ✅ Dark blue tema sa gradijentima
- ✅ Smooth scroll animacije
- ✅ Framer Motion hover efekti
- ✅ Background images na svim sekcijama
- ✅ Tehnologija icons sa rotacijom
- ✅ Portfolio projekti sa live linkovima
- ✅ Kontakt forma sa validacijom
- ✅ Loading states i error handling

### 🔧 Backend:

- ✅ RESTful API endpoints
- ✅ MongoDB integracija
- ✅ Email slanje preko Gmail-a
- ✅ CRUD operacije za poruke
- ✅ Input validacija (Mongoose)
- ✅ Error handling
- ✅ IP tracking poruka
- ✅ Status management (novo/pročitano/odgovoreno)

---

## 📡 API ENDPOINTS

### Javni Endpoints:

#### POST /api/contact

Pošalji kontakt poruku:

```json
{
  "name": "Ime Prezime",
  "email": "email@example.com",
  "message": "Tvoja poruka..."
}
```

### Admin Endpoints (opcionalno):

#### GET /api/contacts

Preuzmi sve poruke (limit 100, sortirano po datumu)

#### GET /api/contacts/:id

Preuzmi specifičnu poruku po ID-u

#### DELETE /api/contacts/:id

Obriši poruku

#### PATCH /api/contacts/:id/status

Promeni status poruke:

```json
{
  "status": "pročitano" // ili "novo", "odgovoreno"
}
```

---

## 🎯 ŠTA RADI KONTAKT FORMA?

1. **Korisnik popuni formu** na sajtu
2. **Frontend šalje POST** na `/api/contact`
3. **Backend prima podatke** i:
   - ✅ Validira podatke (ime, email, poruka)
   - ✅ **Čuva u MongoDB** bazu
   - ✅ **Šalje email** na tvoju Gmail adresu
4. **Korisnik dobija potvrdu** na ekranu

---

## 📊 PREGLED PORUKA

### MongoDB Atlas (Web):

1. Idi na: https://cloud.mongodb.com/
2. Klikni "Database" → "Browse Collections"
3. `portfolio` → `contacts`
4. Vidiš sve poruke! 🎉

### Postman / Thunder Client:

GET http://localhost:5000/api/contacts

---

## 🎨 CUSTOMIZACIJA

### Promeni Boje (TailwindCSS):

U `tailwind.config.js` i komponentama koriste se:

- `slate-900` - Pozadina
- `slate-800` - Sekcije
- `blue-400`, `blue-500` - Akcenti
- Gradijenti sa `from-`, `via-`, `to-`

### Dodaj Nove Projekte:

U `src/components/Projects.jsx`, dodaj u `projectList`:

```javascript
{
  title: "Novi Projekat",
  description: "Opis...",
  image: "/screenshot.png",     // stavi u public/
  github: "https://github.com/...",
  live: "https://live-link.com"
}
```

### Dodaj Nove Tehnologije:

U `src/components/About.jsx`, dodaj u `technologies`:

```javascript
{
  name: "Nova Tech",
  icon: FaNova,           // Import iz react-icons
  color: "text-blue-400"
}
```

---

## 🚀 DEPLOYMENT

### Frontend (Vercel/Netlify):

1. **Build:**

   ```bash
   npm run build
   ```

2. **Deploy `dist` folder** na:

   - Vercel: https://vercel.com
   - Netlify: https://netlify.com
   - GitHub Pages

3. **Update API URL** u `Contact.jsx`:
   ```javascript
   const response = await fetch('https://tvoj-backend.com/api/contact', {...});
   ```

### Backend (Render/Railway/Heroku):

1. **Environment Variables** (na hosting platformi):

   - `MONGODB_URI`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `ADMIN_EMAIL`
   - `PORT` (automatski na nekim platformama)

2. **Deploy:**

   - Render: https://render.com
   - Railway: https://railway.app
   - Heroku: https://heroku.com

3. **Update CORS** u `server.js`:
   ```javascript
   const corsOptions = {
     origin: "https://tvoj-frontend.com",
     optionsSuccessStatus: 200,
   };
   app.use(cors(corsOptions));
   ```

---

## 🔒 BEZBEDNOST

### Pre Produkcije:

1. ✅ **.env** je u `.gitignore` (NIKAD NE COMMIT-UJ!)
2. ✅ Ograniči **CORS** na svoj domen
3. ✅ MongoDB Network Access - dodaj samo server IP
4. ✅ Dodaj **rate limiting** (express-rate-limit)
5. ✅ Validacija inputa je već uključena (Mongoose)

---

## 📝 DEVELOPMENT WORKFLOW

### Da li radi backend?

```bash
cd server
node test-backend.js
```

### Provera errora:

```bash
# Backend logs
npm run dev (u server folderu)

# MongoDB greške → proveri MONGODB_URI
# Email greške → proveri EMAIL_PASS (App Password!)
```

### Hot Reload:

- Frontend: **Vite** auto-reload na save
- Backend: **Nodemon** auto-restart na save

---

## ❓ TROUBLESHOOTING

### "MongoServerError: bad auth"

❌ Pogrešan username/password u MONGODB_URI  
✅ Proveri `.env`, zameni `<password>` sa stvarnom lozinkom

### "Invalid login: 535-5.7.8 Username and Password not accepted"

❌ Pogrešan Gmail App Password  
✅ Mora biti **16-digit App Password**, ne obična lozinka  
✅ Omogući 2-Step Verification prvo

### "CORS Error"

❌ Backend nije pokrenut ili CORS nije konfigurisan  
✅ Pokreni backend: `cd server && npm run dev`  
✅ Proveri `server.js` ima `app.use(cors())`

### "Cannot read properties of undefined"

❌ Neki fajl nije importovan  
✅ Proveri import statements na vrhu fajlova

---

## 📞 SUPPORT

Za pitanja ili probleme:

1. Proveri **`server/SETUP_INSTRUCTIONS.md`** za backend
2. Proveri **terminalu logs** za error poruke
3. Proveri da su **svi dependenciji** instalirani

---

## 📄 LICENCA

Ovaj projekat je u slobodnoj upotrebi za lične ili komercijalne svrhe.

---

**Napravljeno sa ❤️ i React**

🚀 **Happy Coding!**
