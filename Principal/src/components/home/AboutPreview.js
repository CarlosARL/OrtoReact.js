import React from 'react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../../utils/animations';
import './AboutPreview.css';
const AboutPreview = () => {
  const [ref, fadeInStyle] = useFadeIn();
  

  return (
    <section className="about-preview" ref={ref} style={fadeInStyle}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre a Amazon Ortho</h2>
            <p>
              A Amazon Ortho é líder na distribuição de materiais de próteses ortopédicas em Manaus, AM. 
              Nosso compromisso com a excelência nos permite oferecer produtos de alta qualidade e serviços 
              de profissionais instrumentadores altamente qualificados.
            </p>
            <ul className="about-highlights">
              <li><i className="fas fa-check"></i> Ampla variedade de próteses ortopédicas</li>
              <li><i className="fas fa-check"></i> Equipe de instrumentadores especializados</li>
              <li><i className="fas fa-check"></i> Atendimento personalizado</li>
              <li><i className="fas fa-check"></i> Entrega rápida em toda Manaus</li>
            </ul>
            <Link to="/about" className="btn btn-primary">Conheça Nossa História</Link>
          </div>
          <div className="about-image">
            <img src="/images/about-preview.jpg" alt="Equipe Amazon Ortho" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;