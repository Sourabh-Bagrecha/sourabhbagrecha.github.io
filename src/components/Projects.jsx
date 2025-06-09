import React from 'react';

const projects = [
  {
    title: 'Microblogging Web App',
    tech: 'Spring Boot, JWT, ReactJS, MySQL, Git',
    points: [
      'User registration and login with JWT',
      'Post, like, comment, follow system',
      'Backend secured with Spring Security',
      'Frontend built with React Hooks',
    ],
    gradient: 'linear-gradient(135deg, #00c6ff, #0072ff)',
    highlight: false,
  },
  {
    title: 'Jewellery ERP Web App',
    tech: 'HTML, CSS, Javascript, JQuery, ASP.NET MVC, MySQL, Crystal Reports',
    points: [
      'Developed complete ERP solution for inventory, billing, and accounts',
      'Integrated GSTHero API and WhatsApp Business API for automation',
      'Implemented Crystal Reports for invoice generation',
      'Handled live data at exhibitions with high reliability',
    ],
    gradient: 'linear-gradient(135deg, #ff512f, #dd2476)',
    highlight: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #1d2b64, #f8cdda)',
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
        Projects
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: project.gradient,
              borderRadius: '1rem',
              padding: project.highlight ? '2rem' : '1.5rem',
              width: project.highlight ? '350px' : '300px',
              color: '#fff',
              boxShadow: project.highlight
                ? '0 12px 35px rgba(255,255,255,0.3)'
                : '0 8px 20px rgba(0,0,0,0.3)',
              border: project.highlight ? '2px solid #fff' : 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              transform: 'translateY(0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow =
                '0 14px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = project.highlight
                ? '0 12px 35px rgba(255,255,255,0.3)'
                : '0 8px 20px rgba(0,0,0,0.3)';
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '0.8rem' }}>
              {project.tech}
            </p>
            <ul style={{ textAlign: 'left', paddingLeft: '1.5rem', margin: 0, listStyleType: 'disc' }}>
              {project.points.map((point, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
