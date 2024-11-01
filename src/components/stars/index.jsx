import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(null); // Reytingni saqlash
  const [hover, setHover] = useState(null); // Hover qilingan yulduzni saqlash

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Yulduzlarni dinamik chiqarish */}
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => setRating(starValue)} // Foydalanuvchi tanlagan reytingni o'rnatish
              style={{ display: 'none' }} // Radio tugmalarini yashirish
            />
            <FaStar
              size={24}
              color={starValue <= (hover || rating) ? "#FFD700" : "#e4e5e9"} // Yulduzlar rangi
              onMouseEnter={() => setHover(starValue)} // Hover paytida vaqtinchalik o'zgarish
              onMouseLeave={() => setHover(null)} // Hoverdan chiqishda o'zgarishni olib tashlash
              style={{ cursor: 'pointer', marginRight: '5px' }}
            />
          </label>
        );
      })}
      {/* Foydalanuvchi tanlagan reyting */}
      <span style={{ marginLeft: '8px' }}>{rating ? `` : ''}</span>
    </div>
  );
};

export default StarRating;
