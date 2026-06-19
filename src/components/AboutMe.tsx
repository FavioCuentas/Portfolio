import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="section" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="animate-fade-in text-gradient" style={{ display: 'inline-block', fontSize: '2.5rem' }}>
            Sobre Mí
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-secondary)', margin: '1rem auto', borderRadius: '2px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div className="glass-panel animate-fade-in delay-100" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
            <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
              <img 
                src="/profile.jpg" 
                alt="Favio Cuentas - Perfil" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }} 
              />
            </div>
          </div>
          
          <div className="animate-fade-in delay-200">
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Perfil Profesional</h3>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              Soy Ingeniero Industrial, MBA y Master Black Belt Lean Six Sigma, con más de 17 años de experiencia liderando operaciones, transformación digital, mejora continua y proyectos estratégicos en empresas de tecnología, automotriz, retail y servicios.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              A lo largo de mi trayectoria he dirigido equipos multidisciplinarios, optimizado procesos e impulsado iniciativas orientadas a mejorar la eficiencia y rentabilidad. Me apasiona liderar procesos de cambio, desarrollar equipos de alto desempeño y generar soluciones de valor para el crecimiento sostenible de las organizaciones.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Estrategia y Procesos</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Lean Six Sigma, Inteligencia de Negocios y mejora de procesos operativos.</p>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Transformación Digital</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Liderazgo en implementación de tecnología y automatización a nivel corporativo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
