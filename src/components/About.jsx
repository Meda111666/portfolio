
const skills = [
  { name: "React", level: 90 },
  { name: "Node.js & Express", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "PHP & WordPress", level: 80 },
  { name: "MongoDB & MySQL", level: 75 },
];

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

const About = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-slate-800/85"></div>
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
            {skills.map((skill, index) => (
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
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden relative">
                  <motion.div
                    className={`h-full rounded-full ${getProgressColor(skill.level)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut",
                    }}
                  >
                    {/* Sjaj animacija */}
                    <motion.div
                      className="absolute top-0 left-0 h-full w-full rounded-full pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0) 100%)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.7, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  </motion.div>
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


// Funkcija za automatski izbor boje progress bara na osnovu procenta
function getProgressColor(level) {
  if (level < 60) return "bg-gradient-to-r from-red-600 to-red-400";
  if (level < 80) return "bg-gradient-to-r from-yellow-500 to-yellow-300";
  return "bg-gradient-to-r from-green-600 to-green-400";
}

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

