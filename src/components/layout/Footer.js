import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="footer-logo">
            <img src="images/amazon-ortho-logo-white.svg" alt="Amazon Ortho Logo" width="200" height="50" />
            <p>Amazon Ortho: Sua parceira confiável na distribuição de próteses ortopédicas e serviços de instrumentação em Manaus, AM.</p>
          </div>
          <div className="footer-links">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="about.html">Sobre Nós</a></li>
              <li><a href="products.html">Produtos</a></li>
              <li><a href="services.html">Serviços</a></li>
              <li><a href="contact.html">Contato</a></li>
              <li><a href="privacy.html">Política de Privacidade</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contato</h3>
            <p><i className="fas fa-map-marker-alt"></i> Rua 24 de Maio, 220, Sala 1113 Edifício Rio Negro, CENTRO, Manaus - AM, 69010-080</p>
            <p><i className="fas fa-phone"></i> (92) 99982-7339</p>
            <p><i className="fas fa-envelope"></i> contato@amazonortho.com</p>
          </div>
          <div className="footer-social">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-map">
            <h3>Localização</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7754882999536!2d-60.02543902443848!3d-3.1311384405495583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c05c532794a2d%3A0x2ff2202e39d64d3b!2sR.%2024%20de%20Maio%2C%20220%20-%20Centro%2C%20Manaus%20-%20AM%2C%2069010-080!5e0!3m2!1spt-BR!2sbr!4v1696903439010!5m2!1spt-BR!2sbr"
              width="100%"
              height="200"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; Amazon Ortho 2024. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;