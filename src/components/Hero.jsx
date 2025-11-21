import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Medin Jusufović";
  const typingSpeed = 150; // ms po karakteru

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Pozadinska slika sa gradijentom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay 70% */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/70 to-slate-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.h1
          className="text-4xl md:text-6xl font-heading font-bold mb-4 text-gray-100 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Zdravo, ja sam{" "}
          <motion.span
            className="text-blue-400 inline-flex items-baseline"
            animate={{
              textShadow: [
                "0 0 20px #60a5fa",
                "0 0 30px #60a5fa",
                "0 0 20px #60a5fa",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {displayedText}
            <motion.span
              className="inline-block w-0.5 h-8 md:h-12 bg-blue-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-xl mb-6 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Full-stack programer sa strašću za stvaranje modernih i funkcionalnih
          web aplikacija.
        </motion.p>

        <motion.a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pogledaj moje projekte
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
