import React, { useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const images = [
  '/images/trickstar.png',
  '/images/hard_drille.png',
  '/images/time_no_dey.png',
  '/images/about4.png',
  '/images/about5.jpg',
  '/images/about6.jpg'
];

function MoviesMarquee() {
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
    <div className="px-4 py-10 pt-40 overflow-hidden transition-colors bg-white dot-pattern dark:bg-dark-body md:px-0">
      <div className="flex flex-col items-center w-full mx-auto md:w-4/5 md:flex-row">
        <div className="relative flex flex-col items-center w-full overflow-hidden md:w-1/2 h-96" data-aos="fade-right">
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
        <div className="w-full px-1 mt-6 md:w-4/5 md:mt-0 md:ml-8 font-inter md:px-0" data-aos="fade-left">
          <h2 className="text-2xl md:text-6xl font-medium mb-2 text-[#FF5722] dark:text-gray-200">{t('discover_primemovies')}</h2>
          <p className="mt-4 text-justify text-light-text dark:text-slate-300">
            {t('primemovies_description')}
          </p>
          
          {/* Search Input */}
          <div className="flex justify-center mt-8 md:justify-start">
         <Link to='/' className='font-medium text-[#FF5722] dark:text-white'>
         Explore others <IoIosArrowForward className='inline-block ml-1' />
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesMarquee;
