import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import Card from '../common/Card';
import './ProductList.css';

const ProductList = () => {
    const [filter, setFilter] = useState('all');


  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="products-page">
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
    </div>
  );
};

export default ProductList;