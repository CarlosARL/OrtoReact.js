import React, { useEffect, useRef } from 'react';
import './ContactCTA.css';

const ContactCTA = () => {
  const ctaContentRef = useRef(null);

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

    observer.observe(ctaContentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact-cta" className="contact-cta section">
      <div className="container">
        <div className="cta-content" ref={ctaContentRef}>
          <h2>Precisa de Suporte?</h2>
          <p>Nossa equipe está pronta para atender suas necessidades em próteses ortopédicas e instrumentação.</p>
          <a href="/contact" className="btn btn-primary">Entre em Contato</a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;