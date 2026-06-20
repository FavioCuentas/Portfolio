"use client";

import React, { useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  duration?: string;
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'corporate' | 'academic'>('corporate');

  const corporateExperiences: ExperienceItem[] = [
    {
      title: "Jefe Nacional de Innovación, Contact Center y Programación Web/Sistemas",
      company: "TOYOSA S.A.",
      period: "Ene 2014 - Sep 2020",
      duration: "6 años y 8 meses",
      description: "Responsable de liderar iniciativas nacionales de innovación, transformación digital, experiencia del cliente y desarrollo tecnológico para las marcas Toyota, Lexus, Hino y Yamaha. Incremento de ventas superior al 20% durante tres años consecutivos y reducción del 30% en tiempos de respuesta postventa."
    },
    {
      title: "Supervisor de Operaciones de Atención al Cliente",
      company: "TRACFONE / NET1",
      period: "Feb 2005 - Jul 2010",
      duration: "5 años y 5 meses",
      description: "Supervisión de operaciones de atención al cliente para el mercado estadounidense. Dirección de procesos operativos y controles de calidad para mejorar la experiencia del cliente y la eficiencia del servicio."
    },
    {
      title: "Consultor y Asesor en Tecnología y Proyectos",
      company: "ITEAM Business & Technology",
      period: "Ago 2022 - Actualidad",
      duration: "3 años y 10 meses",
      description: "Consultoría especializada en transformación digital, automatización de procesos, dirección de proyectos y desarrollo de soluciones tecnológicas para empresas de los sectores hotelero, agroindustrial, retail y servicios."
    },
    {
      title: "Jefe Nacional de Coordinación y Procesos",
      company: "DATEC Bolivia S.R.L.",
      period: "Sep 2011 - Ene 2014",
      duration: "2 años y 4 meses",
      description: "Responsable de la coordinación nacional de procesos, soporte técnico y proyectos tecnológicos corporativos. Liderazgo en la implementación de más de 100 sistemas ATM para entidades financieras a nivel nacional."
    },
    {
      title: "Purchase Planner",
      company: "EKE S.R.L.",
      period: "Oct 2020 - Jul 2022",
      duration: "1 año y 9 meses",
      description: "Planificación de abastecimiento, logística y gestión de inventarios en EE. UU. Administración de ventas electrónicas a través de Amazon, eBay, Shopify y Walmart para repuestos automotrices."
    },
    {
      title: "Gerente de Proyectos",
      company: "LARGOTEK",
      period: "Jul 2023 - Feb 2025",
      duration: "1 año y 7 meses",
      description: "Planificación y ejecución de proyectos de implementación de ERP Odoo, dirección de áreas de soporte, implementación, ventas y marketing. Optimización de flujos de trabajo organizacionales."
    },
    {
      title: "Director Comercial y Operaciones",
      company: "FOS – Force One System Technologies",
      period: "Feb 2025 - Feb 2026",
      duration: "1 año",
      description: "Dirección comercial y operativa de la compañía, desarrollo de modelos de monetización para soluciones de software (SaaS, licenciamiento, suscripciones) y gestión de cuentas estratégicas."
    },
    {
      title: "Gerente de Operaciones",
      company: "LARGOTEK",
      period: "Sep 2022 - Jul 2023",
      duration: "10 meses",
      description: "Diseño y optimización de procesos operativos, gestión de recursos humanos, tecnológicos y financieros para asegurar niveles de servicio y continuidad en proyectos tecnológicos."
    }
  ];

  const academicExperiences: ExperienceItem[] = [
    {
      title: "Docente de Pregrado, Evaluador y Tutor de Tesis",
      company: "Universidad Católica Boliviana San Pablo (Santa Cruz)",
      period: "Feb 2023 - Actualidad",
      description: "Docencia en las Facultades de Ingeniería Industrial y Administración de Empresas. Asignaturas: Gestión de Procesos, Business Intelligence, Ciencia de Datos y Taller de Grado I y II."
    },
    {
      title: "Docente de Pregrado",
      company: "Universidad Tecnológica Privada de Santa Cruz (UTEPSA)",
      period: "Feb 2023 - Actualidad",
      description: "Responsable de la formación en inglés para negocios e ingeniería, desarrollando competencias lingüísticas y de comunicación profesional en entornos corporativos."
    },
    {
      title: "Docente de Inglés",
      company: "Instituto First Class – La Paz",
      period: "Ene 2006 - Dic 2010",
      description: "Docencia responsable de la formación de estudiantes en niveles inicial, intermedio, avanzado y superior, y preparación para exámenes de certificación internacional como TOEFL."
    },
    {
      title: "Instructor de Inglés Corporativo",
      company: "Embajada Británica / Ministerio de Relaciones Exteriores de Bolivia",
      period: "Ene 2010 - Dic 2010",
      description: "Diseño y ejecución de programas de capacitación lingüística para el personal diplomático y de apoyo directo al Embajador del Reino Unido en Bolivia."
    }
  ];

  const activeList = activeTab === 'corporate' ? corporateExperiences : academicExperiences;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="animate-fade-in text-gradient" style={{ display: 'inline-block', fontSize: '2.5rem' }}>
            Trayectoria Profesional
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
            {activeTab === 'corporate' 
              ? "Cargos corporativos organizados por tiempo de permanencia, destacando roles estratégicos, de liderazgo y dirección." 
              : "Experiencia docente en educación superior y capacitación corporativa técnica y de negocios."}
          </p>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <button 
            onClick={() => setActiveTab('corporate')}
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '30px',
              border: '1px solid ' + (activeTab === 'corporate' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'),
              background: activeTab === 'corporate' ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255,255,255,0.02)',
              color: activeTab === 'corporate' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'corporate') {
                e.currentTarget.style.border = '1px solid rgba(0, 229, 255, 0.5)';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'corporate') {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }
            }}
          >
            Experiencia Corporativa
          </button>
          <button 
            onClick={() => setActiveTab('academic')}
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '30px',
              border: '1px solid ' + (activeTab === 'academic' ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.1)'),
              background: activeTab === 'academic' ? 'rgba(124, 77, 255, 0.1)' : 'rgba(255,255,255,0.02)',
              color: activeTab === 'academic' ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'academic') {
                e.currentTarget.style.border = '1px solid rgba(124, 77, 255, 0.5)';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'academic') {
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }
            }}
          >
            Experiencia Docente
          </button>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {activeList.map((exp, index) => (
            <div key={index} className={`timeline-item animate-fade-in delay-${(index % 3 + 1) * 100}`}>
              <div className="glass-panel" style={{ transition: 'transform 0.3s ease' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ 
                    display: 'inline-block', 
                    padding: '0.35rem 1.1rem', 
                    background: activeTab === 'corporate' ? 'rgba(0, 229, 255, 0.1)' : 'rgba(124, 77, 255, 0.1)', 
                    color: activeTab === 'corporate' ? 'var(--accent-primary)' : 'var(--accent-secondary)', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    {exp.period}
                  </span>
                  
                  {activeTab === 'corporate' && exp.duration && (
                    <span style={{ 
                      fontSize: '0.82rem', 
                      color: 'var(--accent-primary)',
                      background: 'rgba(0, 229, 255, 0.05)',
                      border: '1px solid rgba(0, 229, 255, 0.2)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      fontWeight: 500
                    }}>
                      🕒 Duración: {exp.duration}
                    </span>
                  )}
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
                <h4 style={{ fontSize: '1.1rem', color: activeTab === 'corporate' ? 'var(--accent-secondary)' : 'var(--accent-primary)', marginBottom: '1.25rem', fontWeight: 500 }}>
                  {exp.company}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.98rem', lineHeight: 1.6 }}>
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
