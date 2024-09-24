import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Instrumentação Cirúrgica',
      description: 'Oferecemos profissionais altamente treinados para auxiliar em procedimentos ortopédicos, garantindo eficiência e segurança durante as cirurgias.',
      icon: 'fas fa-tools'
    },
    {
      title: 'Gestão de Instrumentais',
      description: 'Nosso serviço de gestão de instrumentais garante que todos os equipamentos estejam sempre disponíveis, esterilizados e em perfeitas condições de uso.',
      icon: 'fas fa-clipboard-check'
    },
    {
      title: 'Treinamento Técnico',
      description: 'Fornecemos treinamento especializado para equipes médicas sobre o uso adequado de nossos produtos e as mais recentes técnicas cirúrgicas.',
      icon: 'fas fa-chalkboard-teacher'
    },
    {
      title: 'Logística Especializada',
      description: 'Nossa equipe de logística garante a entrega rápida e segura de produtos em toda Manaus, atendendo às necessidades urgentes dos hospitais e clínicas.',
      icon: 'fas fa-truck'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Nossos Serviços</h1>
          <p>Soluções completas para profissionais de saúde</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;