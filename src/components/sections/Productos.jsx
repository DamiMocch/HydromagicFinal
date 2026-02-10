import React, { useState } from 'react';

// Importación de imágenes
import product1 from '@/assets/images/producto1.png';
import product10 from '@/assets/images/producto10.png';
import product11 from '@/assets/images/producto11.png';
import product2 from '@/assets/images/producto2.png';
import product3 from '@/assets/images/producto3.png';
import product4 from '@/assets/images/producto4.png';
import product5 from '@/assets/images/producto5.png';
import product6 from '@/assets/images/producto6.png';
import product7 from '@/assets/images/producto7.png';
import product8 from '@/assets/images/producto8.png';
import product9 from '@/assets/images/producto9.png';

export default function Products() {
  const products = [
    { name: "Carrara", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product1 },
    { name: "Bolonia I", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product2 },
    { name: "Atenas I", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product3 },
    { name: "Verona", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product4 },
    { name: "París", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product5 },
    { name: "Roma", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product6 },
    { name: "Milán", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product7 },
    { name: "Florencia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product8 },
    { name: "Turín", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product9 },
    { name: "Nápoles", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product10 },
    { name: "Venecia", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", image: product11 },
  ];

  const [selected, setSelected] = useState(2);

  // Lógica para el carrusel infinito circular
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      let index = (selected + i + products.length) % products.length;
      visible.push({ ...products[index], originalIndex: index });
    }
    return visible;
  };

  // LIMITAR PAGINACIÓN A 5 PUNTOS
  // Dividimos el total de productos entre 5 para saber qué punto activar
  const totalDots = 5;
  const dots = Array.from({ length: totalDots });

  return (
    <section className="products-section">
      <h2 className="products-title">
        Conoce nuestros modelos para cada <br /> espacio y estilo de vida
      </h2>

      <div className="products-container">
        {getVisibleProducts().map((product) => {
          const diff = Math.abs(product.originalIndex - selected);
          
          let cardClass = "product-card-large";
          // Lógica para asignar clases según distancia al centro
          if (diff === 1 || diff === products.length - 1) cardClass = "product-card-medium";
          if (diff === 2 || diff === products.length - 2) cardClass = "product-card-small";

          return (
            <div 
              className={`product-card-base ${cardClass}`} 
              key={product.originalIndex}
              onClick={() => setSelected(product.originalIndex)} // <--- CLIC PARA CAMBIAR
            >
              <div
                className="product-image"
                style={{ 
                  backgroundImage: `url(${product.image})`,
                  backgroundColor: 'transparent'
                }}
              ></div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          );
        })}
      </div>

      <div className="products-pagination">
        {dots.map((_, idx) => {
          // Lógica para que el punto activo se mueva proporcionalmente
          const isActive = Math.round((selected / (products.length - 1)) * (totalDots - 1)) === idx;
          
          return (
            <div
              key={idx}
              className={`pagination-dot ${isActive ? "active" : ""}`}
              onClick={() => {
                // Al hacer clic en un punto, salta a una posición proporcional
                const targetIndex = Math.floor((idx / (totalDots - 1)) * (products.length - 1));
                setSelected(targetIndex);
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
}