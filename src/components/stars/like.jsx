import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const CarCard = ({ car }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // isLiked qiymatini teskari holatga o'tkazish
  };

  return (
    <div className="car-card">
      <h3>{car.name}</h3>
      <p>{car.category}</p>
      <FaHeart 
        onClick={handleLikeClick} 
        style={{ color: isLiked ? 'red' : '#ccc', cursor: 'pointer' }}
      />
    </div>
  );
};