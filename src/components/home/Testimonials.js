import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Amazon Ortho tem sido uma parceira incrível. Seus produtos e serviços são de alta qualidade e sua equipe é sempre prestativa.",
      author: "Dr. Carlos Silva",
      title: "Cirurgião Ortopédico"
    },
    {
      quote: "Como instrumentadora, aprecio o suporte excepcional que a Amazon Ortho oferece. Eles fazem meu trabalho mais fácil e eficiente.",
      author: "Enfermeira Ana Souza",
      title: "Instrumentadora Cirúrgica"
    },
    {
      quote: "A qualidade dos produtos da Amazon Ortho é incomparável. Tenho confiança total ao utilizá-los em meus pacientes.",
      author: "Dra. Mariana Santos",
      title: "Ortopedista"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
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
    <section id="testimonials" className="testimonials section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
        <p className="section-subtitle">Depoimentos de profissionais que confiam na Amazon Ortho</p>
        <Slider {...settings} className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;