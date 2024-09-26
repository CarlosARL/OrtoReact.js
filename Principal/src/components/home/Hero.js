import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1>Amazon Ortho</h1>
        <p>Excelência em Distribuição de Próteses Ortopédicas em Manaus</p>
        <a href="#products" className="cta-button">Conheça Nossos Produtos</a>
      </div>
    </section>
  );
};

export default Hero;