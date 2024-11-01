import React, { useState } from 'react';

const PriceSlider = () => {
  const [price, setPrice] = useState(50); // Narx qiymatini saqlash

  // Narx o'zgartirilganda chaqiriladigan funksiya
  const handlePriceChange = (event) => {
    setPrice(event.target.value); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tanlangan narx: ${price}</h2>
      {/* Slayder inputi */}
      <input
        type="range"
        min="0"
        max="100000"
        value={price}
        onChange={handlePriceChange}
        style={{ width: '300px' }}
      />
      {/* Minimal va maksimal qiymatlarni ko'rsatish */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
        <span>$0</span>
        <span>$100000</span>
      </div>
    </div>
  );
};

export default PriceSlider;
