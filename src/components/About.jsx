import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
        color: '#fff',
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '2rem',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        <b>About Me</b>
      </h2>

      <div
        style={{
          maxWidth: '850px',
          margin: '0 auto',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '1rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(6px)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
        }}
      >
        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: '1.8',
            fontWeight: '400',
            color: '#f0f0f0',
            textAlign: 'justify',
            color: '#000',
          }}
        >
          I'm <b>Sourabh Goutamchand Bagrecha</b>, a Software Developer with <b>1.7 years</b> of experience in building scalable web applications.
          Currently working at <b>PPMS Jewellers Pvt Ltd, (PUNE)</b>, I specialize in backend development using <b>ASP.NET MVC</b> and frontend technologies
          like <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>jQuery</b>, and <b>React JS</b>. I also have hands-on experience with <b>MySQL</b>, <b>RESTful APIs</b>, and tools like
          <b> Crystal Reports</b>, <b>WhatsApp Business API</b>, and <b>GSTHero</b>. I enjoy building efficient and user-focused applications while continuously
          improving my skills in modern software architecture and agile practices.
        </p>
      </div>
    </section>
  );
}
