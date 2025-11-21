import { motion } from "framer-motion";
import {
  FaRocket,
  FaMobileAlt,
  FaLaptopCode,
  FaBullseye,
} from "react-icons/fa";

const Vision = () => {
  const goals = [
    {
      icon: <FaBullseye />,
      title: "Naš Cilj",
      description:
        "Stvaranje modernih, funkcionalnih i estetskih web aplikacija koje rješavaju realne probleme i pomažu biznisima da rastu.",
    },
    {
      icon: <FaRocket />,
      title: "Raznovrsne Aplikacije",
      description:
        "Razvijamo različite vrste aplikacija - od portfolio web stranica, e-commerce platformi, blogova, do kompleksnih web aplikacija sa bazama podataka.",
    },
    {
      icon: <FaMobileAlt />,
      title: "100% Responzivno",
      description:
        "Svi naši radovi su potpuno responzivni i prilagođeni za desktop, tablet i mobilne uređaje. Savršen prikaz na svakom ekranu!",
    },
    {
      icon: <FaLaptopCode />,
      title: "Moderna Tehnologija",
      description:
        "Koristimo najnovije tehnologije kao što su React, Node.js, Tailwind CSS i moderne best practices za optimalne performanse.",
    },
  ];

  return (
    <section id="vision" className="py-20 px-4 relative overflow-hidden">
      {/* Pozadinska slika sa gradijentom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ciljevi i Vizija
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Naša misija je da kreiramo web rješenja koja su ne samo vizuelno
          privlačna, već i funkcionalna, brza i prilagođena svim uređajima.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div
                className="text-5xl text-blue-400 mb-4 flex justify-center"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {goal.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-100">
                {goal.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dodatna sekcija sa highlight-om */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-8 text-center backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-300">
            ✨ Responzivnost na Prvom Mjestu
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
            U današnjem digitalnom svijetu, preko <strong>60% korisnika</strong>{" "}
            pristupa webu sa mobilnih uređaja. Zato svaki naš projekat
            osmišljavamo
            <strong> mobile-first</strong> pristupom - prvo optimizujemo za
            telefone, zatim za tablete i desktop računare. To garantuje
            perfektno iskustvo na svakom uređaju! 📱💻
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
