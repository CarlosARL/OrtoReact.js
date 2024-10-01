import React from 'react';
import './About.css';
import Mission from '../components/about/Mission';
import Team from '../components/about/Team';
const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Sobre a Amazon Ortho</h1>
          <p>Sua parceira confiável em soluções ortopédicas em Manaus</p>
          <Team />
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            
            <h2>Nossa História</h2>
            <p>
              Fundada em [ano], a Amazon Ortho nasceu da visão de trazer as melhores soluções 
              ortopédicas para a região de Manaus. Desde então, temos crescido constantemente, 
              sempre mantendo nosso compromisso com a qualidade e a inovação.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Nossa Missão</h2>
            <p>
              Nossa missão é melhorar a qualidade de vida dos pacientes ortopédicos em Manaus, 
              fornecendo produtos de alta qualidade e serviços especializados aos profissionais 
              de saúde da região.
            </p>
          </div>

          <div className="about-section">
            <h2>Nossos Valores</h2>
            <ul>
              <li>Qualidade em tudo o que fazemos</li>
              <li>Compromisso com a inovação</li>
              <li>Atendimento personalizado</li>
              <li>Ética e transparência</li>
              <li>Responsabilidade social</li>
            </ul>
          </div>
        </div>
        
      </section>

    </div>
    
  );
};

export default About;