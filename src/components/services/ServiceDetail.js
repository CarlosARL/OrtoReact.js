import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../data/services';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return <div>Serviço não encontrado</div>;
  }

  return (
    <div className="service-detail">
      <div className="container">
        <h2>{service.title}</h2>
        <div className="service-info">
          <i className={service.icon}></i>
          <p>{service.description}</p>
          <button className="btn btn-primary">Solicitar Serviço</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;