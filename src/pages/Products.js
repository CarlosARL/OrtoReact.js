import React from 'react';
import ProductList from '../components/products/ProductList';
import './Products.css';

const Products = () => {
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
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Products;