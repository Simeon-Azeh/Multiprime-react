// src/pages/Dance.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import Membership from '../components/Membership';
import VideoGallery from '../components/VideoGallery';
import Blog from '../components/Blog';

function Dance() {
  return (
    <div>
      <Banner />
      <div className="sticky top-0 z-50 mt-20 md:mt-12">
        <Header />
      </div>
      <div className="">
       
      <Blog />
      </div>
     
     
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Dance;
