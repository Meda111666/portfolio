# ⚡ BRZI SETUP - 10 MINUTA

## 🎯 ŠTA TAČNO TREBA DA URADIŠ:

### ✅ KORAK 1: MongoDB Atlas (5 minuta)

1. **Otvori link:** https://www.mongodb.com/cloud/atlas/register
2. **Klikni:** "Sign Up" → koristi Google ili email
3. **Build a Database** → izaberi **M0 FREE** tier
4. **Region:** Frankfurt (Germany) ili Europe-West
5. **Cluster Name:** možeš ostaviti default
6. **Create Cluster** (čeka se 3-5 minuta)

---

### 🔐 KORAK 2: Kreiraj Database Korisnika

1. **Sa leve strane:** "Database Access"
2. **Klikni:** "Add New Database User"
3. **Username:** `portfolio_admin` (ili bilo šta)
4. **Password:** Klikni "Autogenerate Secure Password"
   - **KOPIRAJ LOZINKU I SAČUVAJ JE!** (biće ti potrebna za .env)
5. **Privileges:** "Read and write to any database"
6. **Add User**

---

### 🌐 KORAK 3: Dozvoli Pristup sa Svih IP Adresa

1. **Sa leve strane:** "Network Access"
2. **Klikni:** "Add IP Address"
3. **Klikni:** "Allow Access From Anywhere"
4. **IP Address:** 0.0.0.0/0 (automatski se popuni)
5. **Add Entry**
6. **Čekaj dok status ne postane Active** (zeleno)

---

### 🔗 KORAK 4: Preuzmi Connection String

1. **Vrati se na:** "Database" (leva strana)
2. **Klikni "Connect"** na svom clusteru
3. **Klikni:** "Connect your application"
4. **Driver:** Node.js, Version: 5.5 or later
5. **KOPIRAJ connection string** - izgleda ovako:

   ```
   mongodb+srv://portfolio_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

6. **VAŽNO - UREDI STRING:**

   - Zameni `<password>` sa lozinkom iz KORAKA 2
   - Dodaj naziv baze između `.net/` i `?`

   **PRIMER:**

   ```
   BILO:
   mongodb+srv://portfolio_admin:<password>@cluster0.abc123.mongodb.net/?retryWrites=true

   TREBA DA BUDE:
   mongodb+srv://portfolio_admin:MojaSifra123@cluster0.abc123.mongodb.net/portfolio?retryWrites=true
   ```

---

### 📧 KORAK 5: Gmail App Password (3 minuta)

**VAŽNO:** Obična Gmail lozinka NEĆE raditi! Mora App Password.

#### A) Omogući 2-Step Verification:

1. **Otvori:** https://myaccount.google.com/security
2. **Scroll do:** "How you sign in to Google"
3. **Klikni:** "2-Step Verification"
4. **Prati korake** (treba ti telefon)

#### B) Kreiraj App Password:

1. **Otvori:** https://myaccount.google.com/apppasswords
2. **Select app:** Mail
3. **Select device:** Other (Custom name) → unesi "Portfolio Backend"
4. **Generate**
5. **KOPIRAJ 16-digit password** (npr: `abcd efgh ijkl mnop`)
6. **Za .env ga stavi BEZ razmaka:** `abcdefghijklmnop`

---

### ⚙️ KORAK 6: Uredi .env File

Otvori fajl: **`server/.env`**

Promeni ove linije:

```env
# Stavi svoj MongoDB connection string iz KORAKA 4
MONGODB_URI=mongodb+srv://portfolio_admin:TvojaSifra123@cluster0.abc123.mongodb.net/portfolio?retryWrites=true&w=majority

# Tvoja Gmail adresa (već je dobro)
EMAIL_USER=jjusufovicmedin@gmail.com

# Stavi App Password iz KORAKA 5 (BEZ razmaka!)
EMAIL_PASS=abcdefghijklmnop

# Email na koji dolaze poruke (već je dobro)
ADMIN_EMAIL=jjusufovicmedin@gmail.com
```

**Sačuvaj fajl!** (Ctrl+S)

---

### 🧪 KORAK 7: Testiraj Setup

U terminalu:

```bash
cd server
node test-backend.js
```

**Ako vidiš:**

```
✅ PORT: ***
✅ MONGODB_URI: mongo...ority
✅ EMAIL_USER: jjusu...l.com
✅ EMAIL_PASS: ***
✅ ADMIN_EMAIL: jjusu...l.com

✅ Sve environment varijable su konfigurisane!

🔌 Testiranje MongoDB konekcije...
✅ MongoDB uspešno povezan!

🎉 BACKEND JE SPREMAN ZA RAD!
```

**BRAVO! Gotovo je! 🎉**

---

### 🚀 KORAK 8: Pokreni Aplikaciju

#### Terminal 1 - Backend:

```bash
cd server
npm run dev
```

Vidiš:

```
🚀 Server pokrenut na portu 5000
✅ MongoDB uspešno konektovan!
```

#### Terminal 2 - Frontend:

```bash
npm run dev
```

Vidiš:

```
VITE v7.2.4  ready in XXX ms
➜  Local:   http://localhost:5173/
```

---

### 🎯 TESTIRAJ KONTAKT FORMU

1. Otvori: http://localhost:5173
2. Scroll do "Kontakt" sekcije
3. Popuni formu:
   - Ime: Test Korisnik
   - Email: test@example.com
   - Poruka: Test poruka sa sajta!
4. Klikni "Pošalji"

**Proveri:**

- ✅ Vidiš "Poruka uspešno poslata!" na sajtu
- ✅ Proveri Gmail inbox - primio si email!
- ✅ MongoDB Atlas → Database → Browse Collections → `contacts` → vidiš poruku

---

## 🆘 AKO NEŠTO NE RADI

### ❌ "MongoServerError: bad auth"

- Nisi tačno kopirao lozinku
- Proveri da si u MONGODB_URI zamenio `<password>` sa stvarnom lozinkom
- Ako lozinka ima `@`, `#`, `%` karaktere, enkoduj ih:
  - `@` → `%40`
  - `#` → `%23`
  - `%` → `%25`

### ❌ "Invalid login: 535-5.7.8 Username and Password not accepted"

- Nisi napravio App Password (koristiš običnu lozinku)
- Proveri da si omogućio 2-Step Verification
- Proveri da si uneo App Password BEZ razmaka u .env

### ❌ Test kaže "NEDOSTAJE ili nije konfigurisano"

- Nisi editovao .env file
- Zaboravio si da sačuvaš .env (Ctrl+S)
- Proveri da nema `tvoj`, `xxxxx` ili `<password>` u .env

---

## 📞 GOTOVO!

Ako sve radi - **ČESTITAM!** 🎊

Portfolio sajt sa full-stack funkcionalnostima je spreman!

**Sledeći korak:** Deploy na produkciju (Vercel + Render)

Za dodatna pitanja, pogledaj:

- `SETUP_INSTRUCTIONS.md` - detaljno uputstvo
- `README_COMPLETE.md` - kompletna dokumentacija

---

**Happy Coding! 🚀**
