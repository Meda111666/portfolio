import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Web aplikacija (Primjer)",
      description: "Moderna web aplikacija izgrađena sa React-om i Node.js-om.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://eventapp.zile028.com",
      image: "/Screenshot_2.png",
    },
    {
      id: 2,
      title: "E-commerce platforma (Primjer)",
      description: "Online prodavnica sa integracijom plaćanja.",
      tech: ["React", "Express"],
      link: "https://medinprojectfinal1.vercel.app/",
      image: "/Screenshot_3.png",
    },
    {
      id: 3,
      title: "Sportski web sajt (Primjer)",
      description: "Blog o sportu sa najnovijim vijestima i analizama.",
      tech: ["WordPress", "PHP", "MySQL"],
      link: "https://lopta.blog",
      image: "/Screenshot_4.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Pozadinska slika sa gradijentom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/85"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Moji Projekti
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative rounded-lg shadow-2xl border-2 border-blue-500/30 hover:border-blue-400 transition-all overflow-hidden group h-[400px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.5)",
              }}
            >
              {/* Pozadinska slika */}
              <div
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url("${project.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: index === 0 ? "center -50px" : "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Gradient overlay - lakši da se više vidi slika */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent group-hover:from-slate-900/95 group-hover:via-slate-900/60 group-hover:to-slate-900/20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <motion.h3
                  className="text-2xl font-bold mb-3 text-gray-100 drop-shadow-lg"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 mb-4 drop-shadow-md text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-blue-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-blue-400 shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(37, 99, 235, 1)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm px-5 py-2.5 rounded-lg font-semibold shadow-xl hover:shadow-blue-500/50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pogledaj web sajt
                    <span className="text-lg">→</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
