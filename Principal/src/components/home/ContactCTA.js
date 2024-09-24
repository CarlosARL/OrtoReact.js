import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="container">
        <h2 className="cta-title">Pronto para Melhorar seus Procedimentos Ortopédicos?</h2>
        <p className="cta-description">
          Entre em contato conosco hoje para descobrir como podemos ajudar você a oferecer o melhor cuidado aos seus pacientes.
        </p>
        <Link to="/contact" className="btn btn-primary">Fale Conosco</Link>
      </div>
    </section>
  );
};

export default ContactCTA;