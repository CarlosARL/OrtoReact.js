import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Hero.css';

const Hero = () => {
  const slides = [
    {
      image: '/images/hero-1.jpg',
      title: 'Amazon Ortho',
      subtitle: 'Excelência em Distribuição de Próteses Ortopédicas em Manaus',
      cta: { text: 'Conheça Nossa História', link: '#about' }
    },
    {
      image: '/images/hero-2.jpg',
      title: 'Produtos de Qualidade',
      subtitle: 'Distribuímos as Melhores Marcas de Próteses Ortopédicas',
      cta: { text: 'Veja Nossos Produtos', link: '#products' }
    },
    {
      image: '/images/hero-3.jpg',
      title: 'Instrumentadores Especializados',
      subtitle: 'Equipe Qualificada para Suporte em Cirurgias',
      cta: { text: 'Conheça Nossos Serviços', link: '#services' }
    }
  ];

  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        showDots={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div className="hero-image" style={{backgroundImage: `url(${slide.image})`}}></div>
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a href={slide.cta.link} className="btn btn-primary">{slide.cta.text}</a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;