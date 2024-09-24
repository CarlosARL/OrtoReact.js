import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Amazon Ortho Logo" />
        </Link>
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link></li>
            <li><Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Produtos</Link></li>
            <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Serviços</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link></li>
          </ul>
        </nav>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;