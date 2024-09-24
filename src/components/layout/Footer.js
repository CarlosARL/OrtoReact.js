import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Amazon Ortho</h3>
          <p>Sua parceira confiável na distribuição de próteses ortopédicas e serviços de instrumentação em Manaus, AM.</p>
        </div>
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/products">Produtos</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p><i className="fas fa-map-marker-alt"></i> Rua 24 de Maio, 220, Sala 1113 Edifício Rio Negro, CENTRO, Manaus - AM, 69010-080</p>
          <p><i className="fas fa-phone"></i> (92) 99982-7339</p>
          <p><i className="fas fa-envelope"></i> contato@amazonortho.com</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Amazon Ortho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;