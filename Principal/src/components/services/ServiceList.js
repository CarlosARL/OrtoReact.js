import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import './ServiceList.css';

const ServiceList = () => {
  return (
    <div className="service-list">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <p>Soluções completas para profissionais de saúde</p>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.id}`} className="btn btn-secondary">Saiba Mais</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;