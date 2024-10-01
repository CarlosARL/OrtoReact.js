import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: 'Parceiro 1', logo: '/images/partner-1.png' },
    { name: 'Parceiro 2', logo: '/images/partner-2.png' },
    { name: 'Groupe Lépine', logo: 'https://www.groupe-lepine.com/img/groupe-lepine-logo-1638373850.jpg' }
  ];

  const settings = {
    arrows:false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const sectionRef = useRef(null);

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

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="partners section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nossos Parceiros</h2>
        <p className="section-subtitle">Trabalhamos com as melhores marcas do mercado ortopédico</p>
        <Slider {...settings} className="partners-carousel">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;