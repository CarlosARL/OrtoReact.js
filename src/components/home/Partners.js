import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: 'Parceiro 1', logo: '/images/partner-1.png' },
    { name: 'Parceiro 2', logo: '/images/partner-2.png' },
    { name: 'Groupe Lépine', logo: 'https://www.groupe-lepine.com/img/groupe-lepine-logo-1638373850.jpg' },
    { name: 'Parceiro 4', logo: '/images/partner-4.png' },
    { name: 'Parceiro 5', logo: '/images/partner-5.png' },
    { name: 'Parceiro 6', logo: '/images/partner-6.png' },
  ];

  return (
    <section className="partners">
      <div className="container">
        <h2 className="section-title">Nossos Parceiros</h2>
        <div className="partners-carousel">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;