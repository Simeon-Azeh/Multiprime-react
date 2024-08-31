import React from 'react';
import Parallax from './Parallax';
import BlogImg from '/images/blog1.jpg';

function Subsection() {
  return (
    <div>
      <Parallax backgroundImage={BlogImg} speed={0.5} height="600px">
        <h1 className="text-4xl font-bold">Welcome to Multiprime</h1>
        <p className="text-xl mt-2">Experience the Prime Entertainment</p>
      </Parallax>
      
      <div className="normal-section bg-gray-100 py-20 text-center">
        <h2 className="text-2xl font-semibold">Normal Section</h2>
        <p className="text-lg mt-4">This section doesn't have the parallax effect.</p>
      </div>

      <Parallax backgroundImage="/images/blog1.jpg" speed={0.3} height="600px">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-xl mt-2">Photography, Modeling, Music, and more</p>
      </Parallax>

      <div className="normal-section bg-gray-100 py-20 text-center">
        <h2 className="text-2xl font-semibold">Another Normal Section</h2>
        <p className="text-lg mt-4">This section doesn't have the parallax effect either.</p>
      </div>
    </div>
  );
}

export default Subsection;
