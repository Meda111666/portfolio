# Portfolio Backend sa MongoDB 🚀

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

3. **Konfiguriši .env:**

```env
PORT=5000
EMAIL_USER=tvoj_email@gmail.com
EMAIL_PASS=tvoja_app_lozinka
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## MongoDB Setup 🗄️

### Opcija 1: Lokalno (Development)

**Windows:**

1. Preuzmi sa [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Instaliraj
3. Pokreni: `mongod`
4. U `.env`: `MONGODB_URI=mongodb://localhost:27017/portfolio`

**Mac:**

```bash
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**

```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### Opcija 2: MongoDB Atlas (Cloud - Besplatno!) ☁️

1. Idi na [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Kreiraj nalog (besplatno)
3. **Create Cluster** → Izaberi FREE tier (M0)
4. **Database Access** → Add New User
5. **Network Access** → Add IP (0.0.0.0/0 za sve)
6. **Connect** → Kopiraj connection string
7. U `.env`: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio`

## Gmail Setup 🔐

1. [Google Account](https://myaccount.google.com/)
2. **Security** → **2-Step Verification** (uključi!)
3. **App passwords** → **Generate**
4. Kopiraj u `.env`

## Pokretanje 🎯

```bash
npm run dev
```

Server: `http://localhost:5000`

## API Endpoints 📡

### POST /api/contact

Šalje email i čuva u bazu.

```json
{
  "name": "Ime",
  "email": "email@example.com",
  "message": "Poruka"
}
```

### GET /api/contacts

Dobij sve poruke (admin).

```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

### GET /api/contacts/:id

Dobij jednu poruku.

### DELETE /api/contacts/:id

Obriši poruku.

### PATCH /api/contacts/:id/status

Ažuriraj status poruke.

```json
{
  "status": "pročitano"
}
```

## MongoDB Struktura 🏗️

### Contact Schema:

```javascript
{
  name: String,          // Ime pošiljaoca
  email: String,         // Email
  message: String,       // Poruka
  status: String,        // novo/pročitano/odgovoreno
  createdAt: Date,       // Vrijeme slanja
  ipAddress: String      // IP adresa
}
```

## Testiranje 🧪

### Pošalji poruku:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Ovo je test poruka"
  }'
```

### Dobij sve poruke:

```bash
curl http://localhost:5000/api/contacts
```

## Funkcionalnosti ✨

- ✅ Čuvanje poruka u MongoDB
- ✅ Slanje emaila
- ✅ CRUD operacije (Create, Read, Delete)
- ✅ Status tracking (novo/pročitano/odgovoreno)
- ✅ IP adresa
- ✅ Validacija podataka
- ✅ Error handling
- ✅ Indexing za performance

## Admin Panel (Optional) 🎛️

Možeš napraviti admin panel da vidiš sve poruke:

- Lista svih poruka
- Filter po statusu
- Označi kao pročitano
- Obriši poruku
- Search funkcionalnost

## Sigurnost 🔒

Za production, dodaj:

- Autentifikaciju (JWT)
- Rate limiting
- Helmet.js
- Input sanitization
- HTTPS

## Troubleshooting 🔧

**MongoDB connection error:**

- Provjeri da li je MongoDB pokrenut
- Provjeri MONGODB_URI u .env
- Provjeri network access (Atlas)

**Email not sending:**

- Provjeri Gmail App Password
- Provjeri da li je 2FA uključena
- Provjeri EMAIL_USER i EMAIL_PASS
