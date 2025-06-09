import React from 'react';
import { SiDotnet } from 'react-icons/si';
import { FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { SiJquery } from 'react-icons/si';


const skills = [
  { name: 'HTML5', icon: <FaHtml5 color="#fff" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#fff" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#fff" /> },
  { name: 'React', icon: <FaReact color="#fff" /> },
  { name: '.NET Core', icon: <SiDotnet color="#fff" /> },
  { name: 'MySQL', icon: <FaDatabase color="#fff" /> },
  { name: 'Git', icon: <FaGitAlt color="#fff" /> },         
  { name: 'jQuery', icon: <SiJquery color="#fff" /> }, 
];

const bgGradients = [
  'linear-gradient(135deg, #4db6ac, #00796b)',
  'linear-gradient(135deg, #ff6f61, #d84315)',
  'linear-gradient(135deg, #fbc02d, #f57f17)',
  'linear-gradient(135deg, #7e57c2, #5e35b1)',
  'linear-gradient(135deg, #29b6f6, #0288d1)',
  'linear-gradient(135deg, #ffb74d, #ef6c00)',
  'linear-gradient(135deg, #f4511e, #bf360c)',   
  'linear-gradient(135deg, #8e24aa, #6a1b9a)',   
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #cc2b5e, #753a88)',
        color: '#fff',
        textAlign: 'center',
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '2rem',
          textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
        }}
      >
        My Skills
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {skills.map(({ name, icon }, index) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '90px',           // smaller width
              padding: '1rem',          // smaller padding
              borderRadius: '1rem',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              background: bgGradients[index % bgGradients.length],
              color: '#fff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div> {/* smaller icon */}
            <p style={{ fontSize: '1rem', fontWeight: '600' }}>{name}</p>           {/* smaller text */}
          </div>
        ))}
      </div>
    </section>
  );
}
