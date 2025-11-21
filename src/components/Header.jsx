import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-slate-800 shadow-lg z-50 border-b border-slate-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-xl font-bold text-blue-400 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <FaCode className="text-2xl" />
          <span>MJ_Dev</span>
        </motion.h1>
        <ul className="flex space-x-4 md:space-x-6 text-xs md:text-base text-gray-300">
          {["O meni", "Vizija", "Projekti", "Blog", "Kontakt"].map(
            (item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.a
                  href={`#${
                    item === "O meni"
                      ? "about"
                      : item === "Vizija"
                      ? "vision"
                      : item === "Projekti"
                      ? "projects"
                      : item === "Blog"
                      ? "blog"
                      : "contact"
                  }`}
                  className="hover:text-blue-400 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              </motion.li>
            )
          )}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
