import React from 'react';

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #56ab2f, #a8e063)',
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
        Education
      </h2>
      <div
        style={{
          maxWidth: '700px',
          margin: '2rem auto',
          padding: '2rem',
          background: 'linear-gradient(135deg, #ffffff, #e3fcef)', 
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
            Post Graduate Diploma in Advanced Computing (PG-DAC)
          </h3>
          <p style={{ margin: 0, color: '#444444' }}>
            Sunbeam Institute, Hinjewadi, Pune (2 0 2 3).
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3
            style={{
              margin: 0,
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#222222',
            }}
          >
            B.E. in Electronics & Tele-Communication
          </h3>
          <p style={{ margin: 0, color: '#444444' }}>SPPU, Pune (2 0 1 8).</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3
            style={{
              margin: 0,
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#222222',
            }}
          >
            HSC
          </h3>
          <p style={{ margin: 0, color: '#444444' }}>
            Govindrao Junior College, Ichalkaranji, (2 0 1 4).
          </p>
        </div>

        <div>
          <h3
            style={{
              margin: 0,
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#222222',
            }}
          >
            SSC
          </h3>
          <p style={{ margin: 0, color: '#444444' }}>
            Ichalkaranji High School Rajwada, Ichalkaranji, (2 0 1 2).
          </p>
        </div>
      </div>
    </section>
  );
}
