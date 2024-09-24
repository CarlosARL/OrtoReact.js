import React from 'react';
import { Link } from 'react-router-dom';
import { useSlideIn } from '../../utils/animations';
import './ProductsPreview.css';

const ProductsPreview = () => {
  const [ref, slideInStyle] = useSlideIn('right');

  const products = [
    {
      name: "Próteses de Joelho",
      description: "Soluções avançadas para artroplastia total e parcial do joelho.",
      image: "/images/knee-prosthesis.jpg"
    },
    {
      name: "Próteses de Quadril",
      description: "Opções modernas para substituição total e parcial do quadril.",
      image: "/images/hip-prosthesis.jpg"
    },
    {
      name: "Próteses de Ombro",
      description: "Soluções inovadoras para artroplastia total e reversa do ombro.",
      image: "/images/shoulder-prosthesis.jpg"
    }
  ];

  return (
    <section className="products-preview" ref={ref} style={slideInStyle}>
      <div className="container">
        <h2 className="section-title">Nossos Produtos</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/products" className="btn btn-primary">Ver Todos os Produtos</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;