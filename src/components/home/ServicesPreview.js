import React, { useEffect, useRef } from 'react';
import './ServicesPreview.css';

const ServicesPreview = () => {
  const services = [
    {
      icon: 'fas fa-tools',
      title: 'Instrumentação Cirúrgica',
      description: 'Profissionais altamente treinados para auxiliar em procedimentos ortopédicos.'
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Gestão de Instrumentais',
      description: 'Controle e manutenção eficiente de instrumentais cirúrgicos.'
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Treinamento Técnico',
      description: 'Capacitação contínua para equipes médicas sobre novos produtos e técnicas.'
    },
    {
      icon: 'fas fa-truck',
      title: 'Logística Especializada',
      description: 'Entrega rápida e segura de produtos em toda Manaus.'
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-preview" className="services-preview section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">Suporte Profissional para Cirurgias Ortopédicas</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <a href="/services" className="btn btn-primary">Saiba Mais Sobre Nossos Serviços</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;