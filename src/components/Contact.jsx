import React, { useState } from 'react';
import { FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been received.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h3 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>Contact me.</h3>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          gap: '3rem',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
       <div
  style={{
    flex: '1 1 380px',          
    maxWidth: '400px',
    background: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(6px)',
    minWidth: '280px',
  }}
>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                color: '#000',
              }}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                color: '#000',
              }}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                resize: 'none',
                color: '#000',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.85rem',
                borderRadius: '8px',
                backgroundColor: '#fff',
                color: '#764ba2',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#eee')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
            >
              Send
            </button>
          </form>
        </div>
             <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
  <FaEnvelope size={24} />
  <a
    href="mailto:bagrechasourabh622@gmail.com"
    style={{ color: '#fff', textDecoration: 'none' }}
  >
    bagrechasourabh622@gmail.com
  </a>
</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <FaInstagram size={24} />
            <span>@iam_soorabh</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <FaMapMarkerAlt size={24} />
            <span>P U N E ( M H ), I N D I A.</span>
          </div>
         </div>
        </div>
        <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  style={{
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    padding: '0.8rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '50px',
    backgroundColor: '#fff',
    color: '#764ba2',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'background 0.3s ease-in-out',
    zIndex: 1000
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = '#eee')}
  onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
>
  <b>↑ Top</b>
</button>
    </section>
  );
}
