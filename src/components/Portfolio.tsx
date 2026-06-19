import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Dashboard Analítico',
      category: 'Data / Business Intelligence',
      image: 'linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)'
    },
    {
      title: 'Automatización de Procesos',
      category: 'Innovación',
      image: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
    },
    {
      title: 'Estrategia Corporativa',
      category: 'Consultoría',
      image: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)'
    }
  ];

  return (
    <section id="portfolio" className="section" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="animate-fade-in text-gradient" style={{ display: 'inline-block', fontSize: '2.5rem' }}>
            Portafolio
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-secondary)', margin: '1rem auto', borderRadius: '2px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
            Una selección de proyectos futuros e iniciativas empresariales que demuestran la intersección entre datos, tecnología y estrategia empresarial.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className={`glass-panel animate-fade-in delay-${(index + 1) * 100}`} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', background: project.image, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                  <span style={{ color: '#fff', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Próximamente</span>
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0 1rem' }}>{project.title}</h3>
                <a href="#portfolio" className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                  Ver Detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
