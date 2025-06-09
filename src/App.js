import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#222', color: 'white' }}>
        <p>© {new Date().getFullYear()} Sourabh G. Bagrecha. All rights reserved.</p>
      </footer>
    </div>
  );
}
