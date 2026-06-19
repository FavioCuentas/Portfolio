import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: '4rem 0 2rem', background: 'rgba(0,0,0,0.5)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>¿Listo para el futuro?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '500px' }}>
            Siempre abierto a discutir nuevas oportunidades, proyectos innovadores y estrategias corporativas.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
            <a href="mailto:faviocuentas@yahoo.com" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
              Enviar Mensaje
            </a>
            <a href="https://www.linkedin.com/in/faviocuentas" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 2.5rem' }}>
              LinkedIn
            </a>
          </div>
          
          <div style={{ width: '100%', height: '1px', background: 'var(--glass-border)', marginBottom: '2rem' }}></div>
          
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Favio. Todos los derechos reservados. Diseño Empresa y Vanguardia.
          </p>
        </div>
      </div>
    </footer>
  );
}
