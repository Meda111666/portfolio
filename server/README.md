# Portfolio Backend Setup 🚀

## Instalacija

1. **Instaliraj Node.js pakete:**

```bash
cd server
npm install
```

2. **Kreiraj .env fajl:**

```bash
cp .env.example .env
```

3. **Konfiguriši Gmail:**
   - Otvori `.env` fajl
   - Dodaj svoj Gmail:
     ```
     EMAIL_USER=tvoj_email@gmail.com
     EMAIL_PASS=tvoja_app_lozinka
     ```

## Kako dobiti Gmail App Password? 🔐

1. Idi na [Google Account](https://myaccount.google.com/)
2. **Security** → **2-Step Verification** (mora biti uključeno!)
3. **App passwords** → **Generate**
4. Izaberi **"Mail"** i **"Other (custom name)"**
5. Kopiraj generisanu lozinku u `.env` fajl

## Pokretanje 🎯

### Development mode:

```bash
npm run dev
```

### Production mode:

```bash
npm start
```

Server će raditi na: `http://localhost:5000`

## Testiranje 🧪

Test endpoint:

```bash
curl http://localhost:5000/api/test
```

## Funkcionalnosti ✨

- ✅ Slanje email-a sa kontakt forme
- ✅ Validacija podataka
- ✅ CORS podrška
- ✅ Error handling
- ✅ Responzivne poruke
- ✅ HTML formatiran email

## API Endpoints 📡

### GET /api/test

Test endpoint da provjeriš da li server radi.

### POST /api/contact

Šalje email sa kontakt forme.

**Body:**

```json
{
  "name": "Ime",
  "email": "email@example.com",
  "message": "Poruka"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Poruka uspješno poslata!"
}
```

## Napomene 📝

- Server mora biti pokrenut da bi kontakt forma radila
- Obavezno koristi Gmail App Password, ne običnu lozinku
- Provjeri da li je 2-Step Verification uključena na Google nalogu
