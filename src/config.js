// API Configuration
// Automatski detektuje development ili production

const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5000"
    : "https://portfolio-backend.onrender.com");

export { API_URL };
