"use client";

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
          
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href="https://wa.me/59170532464" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ 
                padding: '0.8rem 2.5rem',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#fff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.013-5.11-2.861-6.958C16.627 1.936 14.156.92 11.517.92c-5.44 0-9.866 4.425-9.87 9.87-.001 1.83.48 3.62 1.392 5.215l-.993 3.628 3.71-.973zm13.1-6.732c-.31-.156-1.837-.905-2.12-.101-.285.102-.55.55-.67.689-.12.138-.24.156-.55.001-.31-.156-1.31-.483-2.497-1.542-.924-.824-1.547-1.842-1.728-2.152-.18-.31-.02-.477.135-.632.14-.139.31-.362.465-.544.155-.181.206-.31.31-.517.103-.207.052-.389-.026-.544-.078-.155-.67-1.619-.92-2.213-.242-.584-.487-.506-.67-.515-.172-.008-.37-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.836-.75 2.096-1.477.26-.728.26-1.352.181-1.477-.078-.125-.285-.202-.596-.358z"/>
              </svg>
              WhatsApp
            </a>
            <a 
              href="mailto:favio.sup@gmail.com" 
              className="btn" 
              style={{ 
                padding: '0.8rem 2.5rem',
                background: 'linear-gradient(135deg, #EA4335 0%, #C5221F 100%)',
                color: '#fff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Gmail
            </a>
            <a 
              href="https://www.linkedin.com/in/faviocuentas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline" 
              style={{ 
                padding: '0.8rem 2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
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
