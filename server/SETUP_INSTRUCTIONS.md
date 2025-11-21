# 🚀 UPUTSTVA ZA BACKEND SETUP

## ✅ SAMO GMAIL - BEZ BAZE PODATAKA

Backend sada radi **jednostavno**: Prima poruke sa kontakt forme i šalje ih na tvoj email. **Nema baze podataka** - sve je lako i brzo! 📧

---

## 📧 GMAIL APP PASSWORD SETUP (3 minuta)

#### Opcija A: MongoDB Atlas (Cloud - PREPORUČENO) ☁️

1. **Registruj se na MongoDB Atlas**

   - Idi na: https://www.mongodb.com/cloud/atlas/register
   - Registruj se sa email-om ili Google nalogom
   - Potvrdi email adresu

2. **Kreiraj Database Cluster**

   - Klikni "Build a Database"
   - Izaberi **FREE** tier (M0 Sandbox - 512MB)
   - Izaberi region najbliži tebi (npr. Frankfurt za Evropu)
   - Cluster Name: ostavi default ili promeni u "portfolio-cluster"
   - Klikni "Create Cluster" (kreiranje traje 3-5 minuta)

3. **Podesi Database Access (Korisnik)**

   - Sa leve strane klikni "Database Access"
   - Klikni "Add New Database User"
   - Authentication Method: Password
   - Username: npr. `portfolio_user`
   - Password: Klikni "Autogenerate Secure Password" ili unesi svoju (ZAPAMTI OVU LOZINKU!)
   - Database User Privileges: **Read and write to any database**
   - Klikni "Add User"

4. **Podesi Network Access (IP Whitelist)**

   - Sa leve strane klikni "Network Access"
   - Klikni "Add IP Address"
   - Klikni "Allow Access From Anywhere" (dodaje 0.0.0.0/0)
   - Klikni "Confirm"
   - Sačekaj dok status ne postane "Active" (zeleno)

5. **Preuzmi Connection String**
   - Vrati se na "Database" (leva strana)
   - Klikni "Connect" na svom clusteru
   - Izaberi "Connect your application"
   - Driver: Node.js, Version: 5.5 or later
   - **Kopiraj Connection String** - izgleda otprilike ovako:
     ```
     mongodb+srv://portfolio_user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   - **ZAMENI** `<password>` sa stvarnom lozinkom iz koraka 3
   - **DODAJ** naziv baze između `.mongodb.net/` i `?`, npr:
     ```
     mongodb+srv://portfolio_user:MojaLozinka123@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
     ```

#### Opcija B: Lokalna MongoDB Instalacija 💻

1. Preuzmi MongoDB Community Server:
   - https://www.mongodb.com/try/download/community
2. Instaliraj na računar
3. Pokreni MongoDB servis
4. Connection String: `mongodb://localhost:27017/portfolio`

---

### 2️⃣ Gmail App Password Setup (3 minuta)

Gmail **BLOKIRA** običnu lozinku iz bezbednosnih razloga. Morate napraviti **App Password**:

1. **Omogući 2-Step Verification**

   - Idi na: https://myaccount.google.com/security
   - Scroll do "How you sign in to Google"
   - Klikni na "2-Step Verification"
   - Prati korake za omogućavanje (potreban ti je telefon)

2. **Kreiraj App Password**
   - Idi na: https://myaccount.google.com/apppasswords
   - Ili: Google Account → Security → 2-Step Verification → App passwords (pri dnu)
   - Select app: **Mail**
   - Select device: **Other (Custom name)** → unesi "Portfolio Backend"
   - Klikni "Generate"
   - **ZAPAMTI ovaj 16-digit password** (npr: `abcd efgh ijkl mnop`)
   - U .env ga stavi **BEZ RAZMAKA**: `abcdefghijklmnop`

---

### 3️⃣ Konfiguriši .env File

Otvori `server/.env` file i popuni:

```env
PORT=5000

# Zameni sa svojim MongoDB connection string-om iz koraka 1
MONGODB_URI=mongodb+srv://portfolio_user:tvoja_lozinka@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority

# Tvoja Gmail adresa
EMAIL_USER=jjusufovicmedin@gmail.com

# App Password iz koraka 2 (bez razmaka!)
EMAIL_PASS=abcdefghijklmnop

# Email na koji dolaze poruke (može biti isti kao EMAIL_USER)
ADMIN_EMAIL=jjusufovicmedin@gmail.com
```

**⚠️ PROVERI:**

- ✅ MONGODB_URI ima **tvoju stvarnu lozinku** (ne <password>)
- ✅ MONGODB_URI ima **naziv baze** između `.net/` i `?` (npr: `/portfolio?`)
- ✅ EMAIL_PASS je **16-digit App Password BEZ razmaka**

---

### 4️⃣ Pokreni Backend Server

U terminalu, iz `server` foldera:

```bash
npm run dev
```

**Ako vidiš:**

```
🚀 Server pokrenut na portu 5000
✅ MongoDB uspešno konektovan!
```

**BRAVO! 🎉 Backend radi!**

**Ako vidiš greške:**

#### Greška: "MongoServerError: bad auth"

- ❌ Pogrešan username ili password u MONGODB_URI
- ✅ Proveri da li si zamenio `<password>` sa stvarnom lozinkom
- ✅ Proveri da li ima specijalne karaktere u lozinki (%, @, #) - enkoduj ih:
  - @ → %40
  - # → %23
  - % → %25

#### Greška: "Invalid login: 535-5.7.8 Username and Password not accepted"

- ❌ Pogrešan EMAIL_PASS ili nisi napravio App Password
- ✅ Proveri da si omogućio 2-Step Verification
- ✅ Proveri da si koristio App Password (ne običnu lozinku)
- ✅ Proveri da EMAIL_PASS nema razmake

#### Greška: "ECONNREFUSED 127.0.0.1:27017"

- ❌ MongoDB nije pokrenut (ako koristiš lokalnu instalaciju)
- ✅ Koristi MongoDB Atlas (cloud) ili pokreni MongoDB servis

---

### 5️⃣ Testiraj Kontakt Formu

1. **Pokreni Frontend** (u drugom terminalu):

   ```bash
   npm run dev
   ```

2. **Otvori browser**: http://localhost:5173

3. **Popuni kontakt formu** i pošalji poruku

4. **Proveri:**
   - ✅ Vidiš "Poruka uspešno poslata!" na sajtu
   - ✅ Proveri Gmail inbox - primio si email
   - ✅ Proveri MongoDB Atlas (Database → Browse Collections → contacts) - vidiš poruku

---

## 🔧 KORISNE KOMANDE

### Backend (iz `server` foldera):

```bash
npm run dev       # Pokreni server sa nodemon (auto-restart)
npm start         # Pokreni server (production)
```

### Frontend (iz root foldera):

```bash
npm run dev       # Pokreni development server
npm run build     # Build za produkciju
npm run preview   # Preview production build-a
```

---

## 📊 MONGO DB ADMIN PANEL

Možeš pregledati sve poslate poruke kroz:

### MongoDB Atlas Web UI:

1. Idi na https://cloud.mongodb.com/
2. Klikni "Database" → "Browse Collections"
3. Izaberi `portfolio` → `contacts`
4. Vidiš sve poruke sa sajta!

### API Endpoints (opcionalno):

Možeš kreirati admin panel ili koristiti direktno:

```bash
# Preuzmi sve poruke
GET http://localhost:5000/api/contacts

# Preuzmi jednu poruku
GET http://localhost:5000/api/contacts/:id

# Obriši poruku
DELETE http://localhost:5000/api/contacts/:id

# Označi kao pročitano/odgovoreno
PATCH http://localhost:5000/api/contacts/:id/status
Body: { "status": "pročitano" }
```

Koristi **Postman** ili **Thunder Client** (VS Code extension) za testiranje.

---

## 🎯 ŠTA BACKEND RADI?

1. **Prima poruke** sa kontakt forme (POST /api/contact)
2. **Čuva u MongoDB** bazu podataka
3. **Šalje email** na tvoju Gmail adresu
4. **CRUD operacije** za administraciju poruka

---

## 🔒 BEZBEDNOST (Pre Deploy-a na produkciju)

1. **Nikad ne commit-uj .env file!**

   - Već je dodat u `.gitignore`

2. **Ograniči CORS** u `server.js`:

   ```javascript
   const corsOptions = {
     origin: "https://tvoj-domen.com",
     optionsSuccessStatus: 200,
   };
   app.use(cors(corsOptions));
   ```

3. **MongoDB Network Access:**

   - Za produkciju, ograniči IP na tvoj server (ne 0.0.0.0/0)

4. **Rate Limiting** (opcionalno):
   ```bash
   npm install express-rate-limit
   ```

---

## 📞 PITANJA?

Ako imaš problema:

1. Proveri **terminalu logs** za error poruke
2. Proveri da li su svi dependenciji instalirani (`npm install`)
3. Proveri da li `.env` file ima sve podatke **bez greške**
4. Pokušaj restartovati server (Ctrl+C pa `npm run dev`)

---

**SEĆNO! 🚀**
