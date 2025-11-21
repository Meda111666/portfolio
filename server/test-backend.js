// Test script za brzo testiranje backend-a
// Pokreni sa: node test-backend.js

import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

console.log("\n🔍 PROVERA BACKEND KONFIGURACIJE\n");
console.log("================================\n");

// 1. Proveri environment varijable
console.log("📋 Učitavanje .env file-a...");

const requiredVars = ["PORT", "EMAIL_USER", "EMAIL_PASS"];
const missing = [];

requiredVars.forEach((varName) => {
  if (
    !process.env[varName] ||
    process.env[varName].includes("tvoj") ||
    process.env[varName].includes("xxxxx")
  ) {
    missing.push(varName);
    console.log(`❌ ${varName}: NEDOSTAJE ili nije konfigurisano`);
  } else {
    // Prikaži samo prvi i poslednji karakter za bezbednost
    const value = process.env[varName];
    const masked =
      value.length > 10
        ? value.substring(0, 5) + "..." + value.substring(value.length - 5)
        : "***";
    console.log(`✅ ${varName}: ${masked}`);
  }
});

if (missing.length > 0) {
  console.log("\n❌ GREŠKA: Sledeće varijable nisu konfigurisane:");
  missing.forEach((v) => console.log(`   - ${v}`));
  console.log("\n📖 Pogledaj SETUP_INSTRUCTIONS.md za detaljna uputstva.\n");
  process.exit(1);
}

console.log("\n✅ Sve environment varijable su konfigurisane!\n");

// 2. Testiraj email konfiguraciju
console.log("� Testiranje email konfiguracije...");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("✅ Email servis uspešno konfigurisan!\n");

    console.log("📊 Email Info:");
    console.log(`   - Service: Gmail`);
    console.log(`   - User: ${process.env.EMAIL_USER}`);
    console.log(`   - Status: Ready to send`);

    console.log("\n🎉 BACKEND JE SPREMAN ZA RAD!\n");
    console.log("Pokreni server sa: npm run dev\n");

    process.exit(0);
  })
  .catch((err) => {
    console.log("❌ Email konfiguracija greška:", err.message);
    console.log("\n💡 Moguća rešenja:");
    console.log(
      "   1. Proveri da li si omogućio 2-Step Verification na Google Account-u"
    );
    console.log(
      "   2. Proveri da li si kreirao App Password (ne običnu lozinku!)"
    );
    console.log(
      "   3. Proveri da EMAIL_PASS nema razmake (mora biti 16 karaktera bez razmaka)"
    );
    console.log("   4. Proveri da je EMAIL_USER tačna Gmail adresa\n");
    console.log("📖 Vidi: https://myaccount.google.com/apppasswords\n");

    process.exit(1);
  });
