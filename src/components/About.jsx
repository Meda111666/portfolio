import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiSass } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const technologies = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "SCSS", icon: <SiSass />, color: "text-pink-500" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Pozadinska slika sa gradijentom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-800/85"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          O meni
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          {/* Slika */}
          <motion.div
            className="w-64 h-64 flex-shrink-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full h-full rounded-lg overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/50"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/eg.jpg"
                alt="Medin Jusufović"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Tekst */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Zovem se{" "}
              <span className="text-blue-400 font-semibold">
                Medin Jusufović
              </span>{" "}
              i bavim se programiranjem. Imam iskustva u razvoju web aplikacija
              koristeći moderne tehnologije kao što su React, Node.js, PHP i
              WordPress. Volim praviti funkcionalne, brze i estetski privlačne
              web stranice.
            </p>
          </motion.div>
        </div>

        {/* Skills Progress Bars */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold mb-8 text-gray-200 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Moje Vještine:
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "React & Next.js", level: 90, color: "blue" },
              { name: "Node.js & Express", level: 85, color: "green" },
              { name: "JavaScript/TypeScript", level: 88, color: "yellow" },
              { name: "Tailwind CSS", level: 92, color: "cyan" },
              { name: "PHP & WordPress", level: 80, color: "purple" },
              { name: "MongoDB & MySQL", level: 75, color: "emerald" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 p-4 rounded-lg border border-slate-700"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-${skill.color}-600 to-${skill.color}-400 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tehnologije */}
        <div className="text-center">
          <motion.h3
            className="text-2xl font-semibold mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tehnologije koje koristim:
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-all group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className={`text-5xl mb-2 ${tech.color}`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {tech.icon}
                </motion.div>
                <span className="text-sm text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
