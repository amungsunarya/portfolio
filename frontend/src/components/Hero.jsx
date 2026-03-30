import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent mb-6 md:mb-8 drop-shadow-2xl"
        >
          Amung Sunarya
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 md:mb-12 font-medium"
        >
          IT Support Engineer
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-12"
        >
          6+ Years Experience | IT Support & Infrastructure Specialist
        </motion.p>
      </motion.div>
    </section>
  );
}