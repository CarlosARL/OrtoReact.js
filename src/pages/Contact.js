 
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log('Form submitted:', formData);
    // Limpar o formulário após o envio
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para atender suas necessidades</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
              </form>
            </div>
            <div className="contact-info">
              <h2>Informações de Contato</h2>
              <p><i className="fas fa-map-marker-alt"></i> Rua 24 de Maio, 220, Sala 1113 Edifício Rio Negro, CENTRO, Manaus - AM, 69010-080</p>
              <p><i className="fas fa-phone"></i> (92) 99982-7339</p>
              <p><i className="fas fa-envelope"></i> contato@amazonortho.com</p>
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;