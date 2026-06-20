import React from 'react';

export default function Portfolio() {
  const areas = [
    {
      category: "DATA / BUSINESS INTELLIGENCE",
      title: "Dashboards de Gestión y KPIs",
      description: "Diseño de tableros ejecutivos para seguimiento comercial, operaciones, inventarios, atención al cliente y proyectos. Integración de datos, visualización de indicadores y generación de reportes gerenciales.",
      impact: "Mayor visibilidad del negocio, seguimiento de metas, control de desempeño y decisiones basadas en datos.",
      image: "linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)",
      buttonText: "Ver experiencia"
    },
    {
      category: "AUTOMATIZACIÓN / TRANSFORMACIÓN DIGITAL",
      title: "Optimización y Automatización de Procesos",
      description: "Mapeo, rediseño y digitalización de procesos administrativos, comerciales y operativos. Implementación de flujos de trabajo, controles, reportes y herramientas digitales.",
      impact: "Eficiencia operativa, reducción de errores, trazabilidad y mejora continua.",
      image: "linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)",
      buttonText: "Ver enfoque"
    },
    {
      category: "ERP / SISTEMAS",
      title: "Implementación ERP / Odoo",
      description: "Levantamiento de procesos, definición de alcance, coordinación de implementación, capacitación, soporte y adopción de soluciones ERP orientadas al control empresarial.",
      impact: "Procesos integrados, mejor información gerencial y mayor control operativo.",
      image: "linear-gradient(135deg, #d3cbb8 0%, #6d6052 100%)",
      buttonText: "Ver experiencia"
    },
    {
      category: "OPERACIONES / LEAN SIX SIGMA",
      title: "Mejora Continua y Excelencia Operativa",
      description: "Identificación de cuellos de botella, simplificación de procesos, estandarización, control de calidad, análisis de causas y mejora de tiempos de respuesta.",
      impact: "Reducción de desperdicios, mayor productividad y mejor servicio interno y externo.",
      image: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)",
      buttonText: "Ver enfoque"
    },
    {
      category: "COMERCIAL / B2B / SAAS",
      title: "Estrategia Comercial y Crecimiento",
      description: "Diseño de modelos de negocio, planes comerciales, gestión de pipeline, cuentas clave, alianzas, ventas consultivas y modelos de monetización SaaS, licencias y suscripciones.",
      impact: "Crecimiento sostenible, mejor conversión, foco comercial y rentabilidad.",
      image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      buttonText: "Ver experiencia"
    },
    {
      category: "CUSTOMER EXPERIENCE",
      title: "Atención al Cliente, SLA y Customer Success",
      description: "Diseño de estándares de servicio, seguimiento de SLA, soporte, capacitación, contact center, postventa y mejora de la experiencia del cliente.",
      impact: "Mayor satisfacción, retención, cumplimiento de servicio y relaciones de largo plazo.",
      image: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
      buttonText: "Ver enfoque"
    }
  ];

  return (
    <section id="portfolio" className="section" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="animate-fade-in text-gradient" style={{ display: 'inline-block', fontSize: '2.5rem' }}>
            Áreas de impacto: cómo genero valor
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-secondary)', margin: '1rem auto', borderRadius: '2px' }}></div>
          
          <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', fontWeight: 500, letterSpacing: '1px' }}>
            Transformación digital | Procesos | Datos | Estrategia | Tecnología | Crecimiento comercial
          </h3>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Integro visión de negocio, tecnología, análisis de datos y mejora de procesos para diseñar soluciones que ayuden a las empresas a operar con mayor eficiencia, tomar mejores decisiones, fortalecer la experiencia del cliente y acelerar su crecimiento comercial.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {areas.map((area, index) => (
            <div key={index} className={`glass-panel animate-fade-in delay-${(index + 1) * 100}`} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div style={{ height: '100px', background: area.image, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '1.5rem', background: 'rgba(0,0,0,0.5)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 700 }}>
                    {area.category}
                  </span>
                </div>
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.35rem', margin: '0 0 1rem', lineHeight: 1.3, fontWeight: 600, color: '#fff' }}>
                    {area.title}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {area.description}
                  </p>
                  
                  {/* IMPACT BOX */}
                  <div style={{ 
                    background: 'rgba(0, 229, 255, 0.03)', 
                    border: '1px solid rgba(0, 229, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <strong style={{ display: 'block', fontSize: '0.78rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.35rem' }}>
                      Impacto
                    </strong>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', margin: 0, lineHeight: 1.4 }}>
                      {area.impact}
                    </p>
                  </div>
                </div>
                
                <div>
                  <a href="#experience" className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', width: '100%', display: 'inline-block', textAlign: 'center', transition: 'all 0.3s ease' }}>
                    {area.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CLOSING PHRASE */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '5rem', 
          padding: '2.5rem', 
          background: 'rgba(255,255,255,0.02)', 
          borderRadius: '16px', 
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.01)'
        }} className="animate-fade-in">
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', margin: 0, maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            "Mi propuesta de valor está en convertir necesidades del negocio en soluciones digitales, procesos más eficientes, información accionable y resultados sostenibles."
          </p>
        </div>
      </div>
    </section>
  );
}
