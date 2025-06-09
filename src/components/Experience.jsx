import React from 'react';

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)', 
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          marginBottom: '2rem',
          color: '#ffffff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
        }}
      >
        Experience
      </h2>

      <div
        style={{
          maxWidth: '700px',
          margin: '2rem auto',
          padding: '2rem',
          background: 'linear-gradient(135deg, #ffffff, #e0f0ff)',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          color: '#1a1a1a',
          fontFamily: `'Poppins', sans-serif`,
          lineHeight: '1.8',
        }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <h3
            style={{
              margin: 0,
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#222222',
            }}
          >
            Software Developer
          </h3>
          <p style={{ margin: 0, color: '#444444' }}>
            PPMS Jewellers Pvt Ltd (Oct 2023 – Present)
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <ul style={{ textAlign: 'left', paddingLeft: '1.2rem', color: '#444444', margin: 0 }}>
            <li>Developed and maintained web apps using ASP.NET MVC and MySQL</li>
            <li>Integrated GSTHero, WhatsApp Business API, and Crystal Reports</li>
            <li>Optimized performance, debugging, and improved database queries</li>
            <li>Followed Agile methodology and CI/CD practices</li>
            <li>Practised SOLID principles during software developement</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
