import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: "Director de Operaciones y Desarrollo Comercial",
      company: "Force One System Technologies",
      period: "Feb 2025 - Presente",
      description: "Desarrollo de modelos de monetización para soluciones tecnológicas, gestión de cuentas estratégicas y dirección de equipos multidisciplinarios de ventas, marketing y operaciones."
    },
    {
      title: "Docente Universitario & Evaluador de Tesis",
      company: "Universidad Católica - UCB Santa Cruz",
      period: "Feb 2023 - Presente",
      description: "Integración de herramientas tecnológicas, analítica de datos e inteligencia de negocios en procesos de enseñanza-aprendizaje. Orientación en investigación aplicada."
    },
    {
      title: "Consultor y Asesor en Tecnología y Proyectos",
      company: "ITEAM Business & Technology",
      period: "Ago 2022 - Presente",
      description: "Liderazgo de proyectos de transformación digital y automatización de procesos orientados a la mejora de la gestión empresarial y experiencia del cliente."
    },
    {
      title: "Gerente Adjunto de Proyecto",
      company: "Largotek",
      period: "Jul 2023 - Feb 2025",
      description: "Planificación y ejecución de proyectos de implementación ERP Odoo, asegurando el cumplimiento de estándares de calidad, diseño de estrategias de crecimiento y expansión comercial."
    },
    {
      title: "Jefe Nacional de Coordinación y Procesos",
      company: "Datec Corp",
      period: "Sep 2011 - Ene 2024",
      description: "Supervisión de equipos de postventa, dirección de proyectos de implementación tecnológica corporativa y diseño de mejoras de procesos para optimizar la operación y rentabilidad."
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="animate-fade-in text-gradient" style={{ display: 'inline-block', fontSize: '2.5rem' }}>
            Trayectoria Profesional
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item animate-fade-in delay-${(index % 3 + 1) * 100}`}>
              <div className="glass-panel">
                <span style={{ 
                  display: 'inline-block', 
                  padding: '0.3rem 1rem', 
                  background: 'rgba(0, 229, 255, 0.1)', 
                  color: 'var(--accent-primary)', 
                  borderRadius: '20px', 
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '1rem' 
                }}>
                  {exp.period}
                </span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: 500 }}>
                  {exp.company}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
