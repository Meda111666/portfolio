# 📧 KAKO DOBITI GMAIL APP PASSWORD (Korak po Korak)

---

## ⚡ BRZI KORACI (5 minuta):

### 1️⃣ **Omogući 2-Step Verification**

```
🔗 https://myaccount.google.com/security
```

**Šta da uradiš:**

1. Otvori link iznad u browser-u
2. Uloguj se sa **jjusufovicmedin@gmail.com**
3. Scroll dole do **"2-Step Verification"**
4. Klikni na njega
5. Klikni **"Get Started"** ili **"Turn On"**
6. Prati korake (potvrdi broj telefona)
7. ✅ Kada vidiš "2-Step Verification is ON" → gotovo!

---

### 2️⃣ **Kreiraj App Password**

```
🔗 https://myaccount.google.com/apppasswords
```

**Šta da uradiš:**

1. Otvori link iznad (ili iz Security sekcije klikni "App passwords")
2. Možda će te pitati za password ponovo → unesi ga
3. Videćeš page "App passwords"

**Popuni:**

- **Select app:** Mail
- **Select device:** Other (Custom name)
- **Name:** `Portfolio Website` (ili bilo šta)
- Klikni **"Generate"**

---

### 3️⃣ **Kopiraj Password**

**Videćeš žutu kutiju sa:**

```
Your app password for your device

xxxx xxxx xxxx xxxx

[Done button]
```

⚠️ **VAŽNO:**

- **Kopiraj ceo password** (može imati razmake)
- **NE zatvaraj page** dok ne uneseš u `.env`!
- Pokazaće se **samo jednom**!

---

### 4️⃣ **Dodaj u `.env` fajl**

**Otvori:** `server/.env`

**Promeni liniju:**

```env
EMAIL_PASS=tvoj_app_password_od_16_karaktera
```

**U:**

```env
EMAIL_PASS=xxxxyyyyzzzzwwww
```

⚠️ **БЕЗ RAZMAKA!** Ako Gmail da `xxxx yyyy zzzz wwww`, unesi kao `xxxxyyyyyzzzzwwww`

**Primer:**

```env
# ❌ POGREŠNO (sa razmacima)
EMAIL_PASS=abcd efgh ijkl mnop

# ✅ TAČNO (bez razmaka)
EMAIL_PASS=abcdefghijklmnop
```

---

### 5️⃣ **Sačuvaj i testiraj**

**Sačuvaj `.env` fajl:**

```
Ctrl + S
```

**Testiraj:**

```bash
cd server
node test-backend.js
```

**Očekuješ da vidiš:**

```
✅ Email servis uspešno konfigurisan!
🎉 BACKEND JE SPREMAN ZA RAD!
```

---

## 🎯 KOMPLETAN PRIMER `.env` FAJLA

```env
# Port na kojem će server da radi
PORT=5000

# Email Configuration (Gmail)
EMAIL_USER=jjusufovicmedin@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

**Gde je:**

- `EMAIL_USER` = tvoj Gmail (već podešeno ✅)
- `EMAIL_PASS` = 16-digit App Password koji si dobio (⏳ čeka tebe)

---

## 🔥 ČESTE GREŠKE

### ❌ Greška 1: "Invalid login"

**Razlog:** Koristio si obični Gmail password umesto App Password
**Rešenje:** Prati korake iznad i kreiraj **App Password**

### ❌ Greška 2: "Missing credentials"

**Razlog:** `.env` nije sačuvan ili ima razmake u password-u
**Rešenje:**

- Sačuvaj fajl (Ctrl+S)
- Ukloni SVE razmake iz `EMAIL_PASS`
- Restartuj test

### ❌ Greška 3: "2-Step Verification required"

**Razlog:** Nisi omogućio 2-Step Verification
**Rešenje:** Idi na Korak 1️⃣ iznad

---

## 📱 ALTERNATIVA: Korak po Korak sa Screenshot-ovima

### **Korak A: Security Settings**

```
1. https://myaccount.google.com
2. Levo menu → "Security"
3. Scroll → "2-Step Verification" → Klikni
4. "Get started" → Potvrdi telefon → "Turn On"
```

### **Korak B: App Passwords**

```
1. Nazad na Security page
2. Scroll → "App passwords" → Klikni
   (Ako ne vidiš, refresh page)
3. "Select app" dropdown → Mail
4. "Select device" dropdown → Other
5. Upiši: "Portfolio"
6. "Generate"
```

### **Korak C: Kopiraj Password**

```
1. Vidi žutu kutiju sa passwordom
2. Selektuj CEO password (16 karaktera)
3. Ctrl+C (kopiraj)
4. Klikni "Done"
```

### **Korak D: Unesi u `.env`**

```
1. Otvori: server/.env
2. Nađi: EMAIL_PASS=tvoj_app_password_od_16_karaktera
3. Zameni sa: EMAIL_PASS=[tvoj_kopirani_password_BEZ_razmaka]
4. Ctrl+S (sačuvaj)
```

### **Korak E: Test**

```bash
node test-backend.js
```

---

## ✨ GOTOVO!

**Kada vidiš:**

```
✅ Email servis uspešno konfigurisan!
```

**Tada možeš:**

```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend (novi terminal)
cd ..
npm run dev
```

**I testiraš na:**

```
http://localhost:5173
```

---

## 🆘 HELP

**Ako ne možeš pronaći "App passwords":**

- Možda nisi omogućio 2-Step Verification
- Refresh security page
- Ili direktan link: https://myaccount.google.com/apppasswords

**Ako test ne prolazi:**

```bash
# Proveri da li .env ima sve vrednosti
cat .env

# Proveri da EMAIL_PASS NEMA razmake
# Restartuj test
node test-backend.js
```

---

<div align="center">

## 🚀 PRATI KORAKE I BIĆE GOTOVO ZA 5 MINUTA!

**Srećno! 📧✨**

</div>
