import React, { useState } from 'react';
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

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-content">
            <blockquote>"{testimonials[currentTestimonial].quote}"</blockquote>
            <p className="testimonial-author">{testimonials[currentTestimonial].author}</p>
            <p className="testimonial-title">{testimonials[currentTestimonial].title}</p>
          </div>
          <div className="testimonial-controls">
            <button onClick={prevTestimonial}><i className="fas fa-chevron-left"></i></button>
            <button onClick={nextTestimonial}><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;