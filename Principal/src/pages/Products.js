import React, { useState } from 'react';
import './Products.css';
import Card from '../components/common/Card';

const Products = () => {
  const [filter, setFilter] = useState('all');

  const products = [
    { id: 1, name: 'Prótese de Joelho', category: 'joelho', image: 'https://www.zimmerbiomet.com/en/products-and-solutions/specialties/knee/_jcr_content/root/container/container_265335360/container_1041203467_1111888084/product_card_copy_1189395050/image.coreimg.png/1722011892796/nexgen-legacy-constrained-condylar-lcck-1-cmyk-straightened-450x450.png' },
    { id: 2, name: 'Prótese de Quadril', category: 'quadril', image: '/images/hip-prosthesis.jpg' },
    { id: 3, name: 'Prótese de Ombro', category: 'ombro', image: '/images/shoulder-prosthesis.jpg' },
    { id: 4, name: 'Implante de Coluna', category: 'coluna', image: '/images/spine-implant.jpg' },
    { id: 5, name: 'Fixador Externo', category: 'trauma', image: '/images/external-fixator.jpg' },
    { id: 6, name: 'Placa de Titânio', category: 'trauma', image: '/images/titanium-plate.jpg' },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <h1>Nossos Produtos</h1>
          <p>Soluções ortopédicas de alta qualidade para suas necessidades</p>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="products-filter">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todos</button>
            <button onClick={() => setFilter('joelho')} className={filter === 'joelho' ? 'active' : ''}>Joelho</button>
            <button onClick={() => setFilter('quadril')} className={filter === 'quadril' ? 'active' : ''}>Quadril</button>
            <button onClick={() => setFilter('ombro')} className={filter === 'ombro' ? 'active' : ''}>Ombro</button>
            <button onClick={() => setFilter('coluna')} className={filter === 'coluna' ? 'active' : ''}>Coluna</button>
            <button onClick={() => setFilter('trauma')} className={filter === 'trauma' ? 'active' : ''}>Trauma</button>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <Card 
          key={product.id}
          title={product.name}
          content={product.description}
          image={product.image}
          link={{ url: `/products/${product.id}`, text: 'Ver Detalhes' }}
        />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;