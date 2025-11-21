import { useState } from "react";
import { motion } from "framer-motion";
import { API_URL } from "../config";
import SuccessModal from "./SuccessModal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setShowModal(true);
      } else {
        setStatus({
          type: "error",
          message: "❌ " + data.message,
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "❌ Greška pri slanju poruke. Provjerite da li je server pokrenut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Pozadinska slika sa gradijentom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-800/85"></div>
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-6 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Kontakt
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Imaš pitanje, prijedlog ili želiš sarađivati? Pošalji mi poruku!
        </motion.p>

        {/* Status poruka */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg mb-4 ${
              status.type === "success"
                ? "bg-green-600/20 border border-green-500 text-green-300"
                : "bg-red-600/20 border border-red-500 text-red-300"
            }`}
          >
            {status.message}
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Ime"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded bg-slate-900 border-slate-700 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded bg-slate-900 border-slate-700 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            placeholder="Poruka"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 border rounded bg-slate-900 border-slate-700 text-gray-100 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-lg transition shadow-lg w-full font-semibold ${
              isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500 hover:shadow-blue-500/50"
            } text-white`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? "Šaljem..." : "Pošalji"}
          </motion.button>
        </motion.form>
      </div>
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message="Hvala na poruci! Odgovorit ću ti u najkraćem mogućem roku."
      />
    </section>
  );
};

export default Contact;
