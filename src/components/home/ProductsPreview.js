import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductsPreview.css';

const ProductsPreview = () => {
  const products = [
    {
      name: "Próteses de Joelho",
      description: "Soluções avançadas para artroplastia total e parcial do joelho.",
      image: "https://www.ortocir.com.br/wp-content/uploads/2021/03/Imagens-New-Wave-principal-foto-1-1-350x350.png",
      
      link: "/products#knee"
    },
    {
      name: "Próteses de Quadril",
      description: "Opções modernas para substituição total e parcial do quadril.",
      image: "https://www.ortocir.com.br/wp-content/uploads/2021/03/ortocir-hastes-famorais-p7tg1dxafix6mxf.png",
      link: "/products#hip"
    },
    {
      name: "Próteses de Ombro",
      description: "Soluções inovadoras para artroplastia total e reversa do ombro.",
      image: "https://www.zimmerbiomet.com/en/products-and-solutions/specialties/shoulder/_jcr_content/root/container/container_265335360/container_807943635/product_card_copy_co/image.coreimg.png/1717783248218/ashcomshoulder.png",
      link: "/products#shoulder"
    },
    {
      name: "Implantes de Coluna",
      description: "Ampla gama de dispositivos para cirurgias da coluna vertebral.",
      image: "/images/spine-implants.jpg",
      link: "/products#spine"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="products-preview" className="products-preview" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nossos Produtos</h2>
        <p className="section-subtitle">Distribuição de Próteses Ortopédicas de Qualidade</p>
        <Slider {...settings} className="products-slider">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div className="product-image">
                <img src={product.image} alt={product.name} width="10" height="10" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a href={product.link} className="btn btn-secondary">Ver Detalhes</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductsPreview;
