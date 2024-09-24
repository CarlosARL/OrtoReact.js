import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <section className="services-preview">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="btn btn-primary">Conheça Todos os Serviços</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;