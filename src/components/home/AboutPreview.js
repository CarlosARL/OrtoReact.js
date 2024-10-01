import React, { useEffect, useRef } from 'react';
import './AboutPreview.css'

const AboutPreview = () => {
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);

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

    observer.observe(aboutTextRef.current);
    observer.observe(aboutImageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-preview" className="about-preview section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" ref={aboutTextRef}>
            <h2>Sobre a Amazon Ortho</h2>
            <h3>Sua Parceira em Soluções Ortopédicas em Manaus</h3>
            <p>
              A Amazon Ortho é líder na distribuição de materiais de próteses ortopédicas em Manaus, AM. 
              Nosso compromisso com a excelência nos permite oferecer produtos de alta qualidade e serviços 
              de profissionais instrumentadores altamente qualificados, garantindo o sucesso de cada procedimento.
            </p>
            <ul className="about-highlights">
              <li><i className="fas fa-check"></i> Ampla variedade de próteses ortopédicas</li>
              <li><i className="fas fa-check"></i> Equipe de instrumentadores especializados</li>
              <li><i className="fas fa-check"></i> Atendimento personalizado</li>
              <li><i className="fas fa-check"></i> Entrega rápida em toda Manaus</li>
            </ul>
            <a href="/about" className="btn btn-primary">Saiba Mais</a>
          </div>
          <div className="about-image" ref={aboutImageRef}>
            <img src="/images/about-preview.jpg" alt="Equipe Amazon Ortho" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;