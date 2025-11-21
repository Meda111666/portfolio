import { useContext } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-20 right-8 bg-slate-800 dark:bg-slate-700 p-3 rounded-full shadow-lg border-2 border-slate-600 dark:border-slate-500 z-50 hover:scale-110 transition-transform"
      whileHover={{ scale: 1.15, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-blue-400 text-xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
