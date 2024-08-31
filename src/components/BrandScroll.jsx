import React, { useState, useEffect } from 'react';

function BrandScroll() {

const brands = [
  '/images/brand1.png',
  '/images/brand2.png',
  '/images/brand3.png',
  // Add more brand image URLs
];

return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex items-center animate-marquee">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="w-auto h-16 mx-4"
          />
        ))}
        {/* Repeat the brands array to make the marquee infinite */}
        {brands.map((brand, index) => (
          <img
            key={`${index}-duplicate`}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="w-auto h-16 mx-4"
          />
        ))}
      </div>
    </div>
  );
}
export default BrandScroll;
