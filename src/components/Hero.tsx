import React from 'react';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="animate-fade-in" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
            Innovación & Liderazgo
          </h2>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1.5rem' }}>
            Hola, soy <span className="text-gradient">Favio</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            Profesional orientado a resultados con enfoque en innovación, análisis de datos y estrategias empresariales de vanguardia. Construyendo soluciones para el mañana, hoy.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#portfolio" className="btn btn-primary">
              Ver Portafolio
            </a>
            <a href="#contact" className="btn btn-outline">
              Contactar
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="glass-panel animate-fade-in delay-300" style={{ 
        position: 'absolute', 
        right: '10%', 
        top: '30%', 
        width: '300px', 
        height: '350px', 
        transform: 'rotate(15deg)',
        zIndex: 1,
        opacity: 0.5
      }}>
      </div>
      <div className="glass-panel animate-fade-in delay-200" style={{ 
        position: 'absolute', 
        right: '25%', 
        top: '45%', 
        width: '200px', 
        height: '200px', 
        transform: 'rotate(-10deg)',
        zIndex: 2,
        background: 'rgba(0, 229, 255, 0.05)'
      }}>
      </div>
    </section>
  );
}
