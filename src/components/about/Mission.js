import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <h2>Nossa Missão</h2>
        <p>
          Na Amazon Ortho, nossa missão é melhorar a qualidade de vida dos pacientes 
          ortopédicos em Manaus e região, fornecendo produtos de alta qualidade e 
          serviços especializados aos profissionais de saúde. Nos comprometemos a:
        </p>
        <ul>
          <li>Oferecer soluções ortopédicas inovadoras e de alta qualidade</li>
          <li>Proporcionar suporte técnico especializado aos profissionais de saúde</li>
          <li>Contribuir para o avanço da ortopedia na região amazônica</li>
          <li>Manter os mais altos padrões éticos em todas as nossas operações</li>
        </ul>
      </div>
    </section>
  );
};

export default Mission;