import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const SuccessModal = ({ isOpen, onClose, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border-2 border-green-500/50 max-w-md w-full relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex justify-center mb-6"
              >
                <div className="bg-green-600/20 p-4 rounded-full">
                  <FaCheckCircle className="text-6xl text-green-400" />
                </div>
              </motion.div>

              {/* Message */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-center mb-4 text-white"
              >
                Uspješno Poslano! 🎉
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-center mb-6 leading-relaxed"
              >
                {message ||
                  "Hvala na poruci! Odgovorit ću ti u najkraćem mogućem roku."}
              </motion.p>

              {/* Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-400 transition shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                U redu
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
