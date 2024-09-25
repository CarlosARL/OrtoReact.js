import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import './ServiceList.css';

const ServiceList = () => {
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

export default ServiceList;