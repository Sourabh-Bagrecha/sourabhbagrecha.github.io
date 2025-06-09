import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = (id) => ({
    color: activeSection === id ? '#61dafb' : 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '500',
    borderBottom:
      activeSection === id ? '2px solid #61dafb' : '2px solid transparent',
    transition: 'all 0.3s ease',
    paddingBottom: '0.2rem',
  });

  return (
    <nav
      style={{
        padding: '1rem',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', 
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem',
        fontFamily: `'Poppins', sans-serif`,
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)', 
      }}
    >
      <a href="#skills" style={navLinkStyle('skills')}>Skills</a>
      <a href="#projects" style={navLinkStyle('projects')}>Projects</a>
      <a href="#contact" style={navLinkStyle('contact')}>Contact</a>
    </nav>
  );
}
