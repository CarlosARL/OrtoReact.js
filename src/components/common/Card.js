import React from 'react';
import './Card.css';

const Card = ({ title, content, image, link }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        {link && (
          <a href={link.url} className="card-link">
            {link.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;