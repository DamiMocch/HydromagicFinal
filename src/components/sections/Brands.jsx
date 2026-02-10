import React from 'react';

import brand1 from '@/assets/images/brand1.svg';
import brand2 from '@/assets/images/brand2.svg';
import brand3 from '@/assets/images/brand3.svg';
import brand4 from '@/assets/images/brand4.svg';
import brand5 from '@/assets/images/brand5.svg';
import brand6 from '@/assets/images/brand6.svg';

export default function Brands() {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <section className="brands-section">
      <div className="brands-container">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
