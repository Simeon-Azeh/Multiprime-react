import React, { useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const images = [
  '/images/trickstar.png',
  '/images/hard_drille.png',
  '/images/time_no_dey.png',
  '/images/about4.png',
  '/images/about5.jpg',
  '/images/about6.jpg'
];

function DiscoverMarquee() {
  const { t } = useTranslation();
  const duplicatedImages = [...images, ...images]; // Duplicate images for seamless scrolling

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white dot-pattern dark:bg-dark-body transition-colors py-10 px-4 md:px-0 overflow-hidden pt-40">
      <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 flex flex-col items-center h-96 overflow-hidden" data-aos="fade-right">
          <div className="marquee-container">
            <div className="marquee">
              {/* Create two rows of images */}
              {Array.from({ length: 2 }).map((_, rowIndex) => (
                <div key={rowIndex} className="marquee-row">
                  {duplicatedImages.map((image, index) => (
                    <div key={index} className="marquee-item">
                      <img
                        src={image}
                        alt={`Scrolling ${index}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 mt-6 md:mt-0 md:ml-8 font-inter px-1 md:px-0" data-aos="fade-left">
          <h2 className="text-2xl md:text-6xl font-medium mb-2 text-[#FF5722] dark:text-gray-200">{t('discover_prime')}</h2>
          <p className="mt-4 text-light-text dark:text-slate-300 text-justify">
            {t('discover_description')}
          </p>
          
          {/* Search Input */}
          <div className="mt-8 flex justify-center md:justify-start">
          <FaSearch className="text-gray-500 dark:text-slate-300 mr-2 absolute bottom-3 left-0" />
            <input 
              type="text" 
              placeholder={t('search_placeholder')} 
              className="border-b-2 border-[#FF5722] bg-transparent text-gray-700 py-2 px-4 w-full md:w-2/3 focus:outline-none dark:bg-dark-body dark:text-slate-300 ml-2"
            />
           <button 
                  type="submit" 
                  className='bg-[#FF5722] text-white rounded py-2 px-4  transition-transform duration-300 hover:translate-y-[-2px] border-b-2 border-[#FF5722]     dark:text-slate-300 dark:bg-[#1B1B1A] dark:border-gray-700 rounded-bl-none rounded-tr-none'
                >
                  {t('search')}
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverMarquee;
