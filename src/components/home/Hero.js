import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title slide-in-left">Amazon Ortho</h1>
        <p className="hero-subtitle slide-in-right">
          Excelência em Distribuição de Próteses Ortopédicas em Manaus
        </p>
        <Link to="/contact" className="btn btn-primary fade-in">Entre em Contato</Link>
      </div>
    </section>
  );
};

export default Hero;