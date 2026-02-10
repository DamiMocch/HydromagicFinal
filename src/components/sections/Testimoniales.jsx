import '../../styles/styles.css';

import React, { useState } from 'react';

import boton1 from '@/assets/icons/boton1.png';
import boton2 from '@/assets/icons/boton2.png';
import iconoTestimoniales from '@/assets/icons/iconoTestimoniales.svg';
import testimonialesBg from '@/assets/images/testimoniales.png';
import usuario from '@/assets/images/usuario.png';

export default function Testimoniales() {
  const [selected, setSelected] = useState(0);

  const testimonios = [
    {
      texto: "Nos asesoraron para elegir el modelo correcto y el proceso fue muy claro. Excelente atención de los asesores y entera confianza en recomendar sus grandes productos",
      nombre: "Lorem ipsum dolor sit",
      puesto: "Asesor Comercial",
      foto: usuario,
    },
    {
      texto: "Servicio rápido y personalizado, los productos llegaron en tiempo y con excelente calidad. Superaron mis expectativas en cada paso.",
      nombre: "Cliente B",
      puesto: "CEO Empresa B",
      foto: usuario,
    },
    {
      texto: "Muy satisfechos con la compra y la atención. Recomendados totalmente por su profesionalismo y calidad humana.",
      nombre: "Cliente C",
      puesto: "Gerente Empresa C",
      foto: usuario,
    },
  ];

  const totalDots = 5;
  const dots = Array.from({ length: totalDots });

  const nextSlide = () => {
    setSelected((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSelected((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  return (
    <section
      className="testimoniales-section"
      style={{ backgroundImage: `url(${testimonialesBg})` }}
    >
      <div className="testimoniales-top-buttons">
        <img 
          src={boton1} 
          alt="Botón anterior" 
          onClick={prevSlide} 
          className="nav-button"
        />
        <img 
          src={boton2} 
          alt="Botón siguiente" 
          onClick={nextSlide} 
          className="nav-button"
        />
      </div>

      <div className="testimonio-card">
        <img src={iconoTestimoniales} alt="Icono" className="testimonio-icon" />
        <h2 className="testimonio-title">Lo que dicen de nosotros</h2>
        
        <p className="testimonio-text" key={selected}>
          {testimonios[selected].texto}
        </p>

        <div className="testimonio-user">
          <img src={testimonios[selected].foto} alt={testimonios[selected].nombre} />
          <div className="user-info">
            <p className="user-name">{testimonios[selected].nombre}</p>
            <p className="user-position">{testimonios[selected].puesto}</p>
          </div>
        </div>
      </div>

      <div className="testimoniales-pagination">
        {dots.map((_, index) => {
          const isActive = Math.round((selected / (testimonios.length - 1)) * (totalDots - 1)) === index;
          return (
            <div
              key={index}
              className={`pagination-dot ${isActive ? "active" : ""}`}
              onClick={() => {
                const targetIndex = Math.round((index / (totalDots - 1)) * (testimonios.length - 1));
                setSelected(targetIndex);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}