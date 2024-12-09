// src/pages/Dance.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import Membership from '../components/Membership';
import VideoGallery from '../components/VideoGallery';

function Dance() {
  return (
    <div>
      <Banner />
      <div className="sticky top-0 z-50 mt-20 md:mt-12">
        <Header />
      </div>
      <div className="px-4 py-4 pt-32 bg-white dark:bg-dark-body">
       
        <VideoGallery />
        <button className='flex px-6 py-2 mx-auto mt-6 font-normal border rounded font-inter dark:border-gray-800 text-dark-body dark:text-slate-50'>
            <a href="https://www.youtube.com/channel/UCJFZDBl7YQv9Y5wV7Ew9aCg" target="_blank" rel="noopener noreferrer">
                Watch More
            </a>
        </button>
      </div>
     
      <div>
        <Highlights />
      </div>
     
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Dance;
