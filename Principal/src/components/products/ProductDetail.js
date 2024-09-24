import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-detail">
      <div className="container">
        <h2>{product.name}</h2>
        <div className="product-info">
          <img src={product.image} alt={product.name} />
          <div className="product-description">
            <p>{product.description}</p>
            <p><strong>Categoria:</strong> {product.category}</p>
            <button className="btn btn-primary">Solicitar Orçamento</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;