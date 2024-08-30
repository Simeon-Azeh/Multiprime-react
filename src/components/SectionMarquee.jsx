import React, { useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
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

function SectionMarquee() {
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
    <div className="bg-white dot-pattern dark:bg-dark-body transition-colors py-10 px-4 md:px-0 overflow-hidden">
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
          <h2 className="text-2xl md:text-6xl font-medium mb-2 text-[#FF5722] dark:text-gray-200">{t('about_prime')}</h2>
          <p className="mt-4 text-light-text dark:text-slate-300 text-justify">
            {t('about_description')}
          </p>
          <button className='mt-4 px-4 py-3 bg-[#FF5722] text-white rounded dark:bg-[#141414] dark:border dark:border-gray-700 flex items-center gap-1 hover:translate-y-[-3px] duration-300'>{t('about_btn')}<IoIosArrowForward /></button>
        </div>
      
      </div>
     
    </div>
  );
}

export default SectionMarquee;
