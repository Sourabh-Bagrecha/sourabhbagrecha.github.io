import React , { useState } from "react";
import { motion } from "framer-motion";


const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());

    if(section){
      section.scrollIntoView({ behaviour: "smooth"});
    }
    setIsOpen(false);
  };

  return (
    <motion.nav className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}>
        
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <h1 className="text-xl font-bold tracking-wide text-cyan-400">Sourabh Bagrecha</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={() => scrollToSection(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      /* Mobile Menu */
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-cyan-400 transition"
                onClick={() => scrollToSection(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
      </motion.nav>
  );
};



export default Navbar;