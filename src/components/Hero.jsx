import React from "react";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section 
    id="home"
      style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: '#fff',
        textAlign: 'center',
      }} 
      className="min-h-screen flex items-center justify-center text-center px-4 bg-gray-900"
    >
      <div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-cyan-400">Sourabh Bagrecha</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm a passionate Software Developer specializing in ASP.NET MVC and React.js, focused on building scalable, high-performance web applications.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="/resume.pdf"
            download
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-2 rounded-full transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;