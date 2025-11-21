import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiter za kontakt formu - max 5 poruka po IP adresi na sat
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 sat
  max: 5, // max 5 zahtjeva po IP
  message: {
    success: false,
    message: "Previše zahtjeva. Pokušajte ponovo za 1 sat.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter konfiguracija
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

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend radi!" });
});

// Contact form route (sa rate limiting)
app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Validacija
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Sva polja su obavezna!",
    });
  }

  try {
    // Email opcije
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nova poruka sa portfolio sajta - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #3b82f6; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">Nova Poruka sa Portfolio Sajta</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #1e293b;">Ime:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Poruka:</h3>
              <p style="color: #475569; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
              <p>Ova poruka je poslata sa vašeg portfolio sajta.</p>
              <p>Možete odgovoriti direktno na ovaj email.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Pošalji email administratoru (tebi)
    await transporter.sendMail(mailOptions);
    console.log("📧 Email uspješno poslan od:", email);

    // Pošalji auto-reply email korisniku
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Potvrda prijema poruke - Medin Jusufović Portfolio",
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 40px;">✉️</span>
              </div>
              <h1 style="color: #1e293b; margin: 0; font-size: 28px; font-weight: 700;">Poruka Primljena!</h1>
            </div>

            <!-- Greeting -->
            <div style="margin-bottom: 25px;">
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">Zdravo <strong style="color: #3b82f6;">${name}</strong>,</p>
              <p style="color: #475569; font-size: 16px; line-height: 1.6;">Hvala ti što si me kontaktirao/la! Tvoja poruka je uspješno primljena.</p>
            </div>

            <!-- Message Preview -->
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 20px; border-radius: 10px; border-left: 4px solid #3b82f6; margin: 25px 0;">
              <p style="color: #0f172a; margin: 0 0 10px 0; font-weight: 600;">Tvoja poruka:</p>
              <p style="color: #475569; margin: 0; font-style: italic; line-height: 1.6;">"${
                message.length > 150
                  ? message.substring(0, 150) + "..."
                  : message
              }"</p>
            </div>

            <!-- Response Time -->
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0; color: #92400e; font-size: 14px; text-align: center;">
                ⏱️ <strong>Odgovorit ću ti u roku od 24-48 sati.</strong>
              </p>
            </div>

            <!-- Contact Info -->
            <div style="margin: 30px 0; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">U međuvremenu, možeš me kontaktirati i preko:</h3>
              <p style="margin: 8px 0; color: #475569;">
                📧 Email: <a href="mailto:jusufovicmedin@gmail.com" style="color: #3b82f6; text-decoration: none; font-weight: 500;">jusufovicmedin@gmail.com</a>
              </p>
              <p style="margin: 8px 0; color: #475569;">
                🌐 Portfolio: <a href="https://your-portfolio-url.com" style="color: #3b82f6; text-decoration: none; font-weight: 500;">your-portfolio-url.com</a>
              </p>
            </div>

            <!-- Footer -->
            <div style="margin-top: 40px; padding-top: 25px; border-top: 2px solid #e2e8f0; text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">Lijep pozdrav,</p>
              <p style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0;">Medin Jusufović</p>
              <p style="color: #94a3b8; font-size: 12px; margin: 10px 0 0 0;">Full-Stack Developer</p>
            </div>

            <!-- Very Footer -->
            <div style="margin-top: 30px; text-align: center; color: #94a3b8; font-size: 11px;">
              <p style="margin: 0;">Ovo je automatska poruka. Molim te ne odgovaraj na ovaj email.</p>
            </div>

          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);
    console.log("✅ Auto-reply poslan korisniku:", email);

    res.status(200).json({
      success: true,
      message: "Poruka uspješno poslata!",
    });
  } catch (error) {
    console.error("Greška pri slanju email-a:", error);
    res.status(500).json({
      success: false,
      message: "Greška pri slanju poruke. Pokušajte ponovo.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server pokrenut na portu ${PORT}`);
  console.log(`📧 Email servis: Spreman za slanje poruka`);
});
