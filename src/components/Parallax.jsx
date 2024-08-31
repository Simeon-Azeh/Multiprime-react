import React, { useEffect, useState } from 'react';

function Parallax({ backgroundImage, speed = 0.5, children, height = '600px' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setIsLoaded(true);
  }, [backgroundImage]);

  return (
    <div
      className={`relative overflow-hidden ${isLoaded ? '' : 'hidden'}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
}

export default Parallax;
