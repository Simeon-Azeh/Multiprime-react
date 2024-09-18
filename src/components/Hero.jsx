import React, { useState, useEffect } from 'react';
import { MdWavingHand } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import { GiArchiveRegister } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import HeroImg from '/images/heroImg.png';

const roles = ["Frontend Engineer", "Brand Manager", "Graphic Designer", "Web Developer"];

function Hero() {
  const { t } = useTranslation();
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const intervalId = setInterval(() => {
      setFade(false); // Trigger the fade-out animation
      setTimeout(() => {
        setCurrentRole((prevRole) => {
          const currentIndex = roles.indexOf(prevRole);
          return roles[(currentIndex + 1) % roles.length];
        });
        setFade(true); // Trigger the fade-in animation
      }, 500); // Wait for the fade-out animation to complete before changing the text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='bg-light-body dark:bg-dark-body transition-colors h-[100vh] flex items-center justify-center dot-pattern pt-10 md:pt-0'>
      <div className='w-full md:w-4/5 mx-auto px-4 lg:px-0 font-Inter text-center'>
        <div className='flex flex-col md:flex-row items-center justify-center '>
          <div className='w-full md:w-1/2 text-center md:text-left'>
          
            <h2 className='relative overflow-hidden inline-block text-2xl lg:text-5xl font-semibold lg:font-medium dark:text-slate-50 text-[#37474F] font-inter  ' data-aos="fade-up" data-aos-delay="400">
              {t('nothing_beats')} <span className='dark:text-slate-300 text-[#FF5722]'>{t('prime')}</span> {t('entertainment')} <span className='dark:text-slate-300 text-[#FF5722]'>{t('like_prime')}</span>
            </h2>
            <p className='mt-2 dark:text-slate-300 text-gray-500 font-normal mb-2 lg:text-justify' data-aos="fade-up" data-aos-delay="200">
              {t('hero_description')} 
            </p>

            {/* Newsletter Signup Section */}
            <div className='mt-8 font-inter'>
              <h3 className='text-sm font-medium dark:text-slate-50 text-gray-500' data-aos="fade-up" data-aos-delay="700">
                {t('newsletter')}
              </h3>
             
              <form className='mt-2 font-inter'>
                <input 
                  type="email" 
                  placeholder={t('email_placeholder')} 
                  className='border rounded py-2 px-4 text-gray-700 bg-transparent outline-none dark:bg-[#1B1B1A] dark:text-slate-300 dark:border-gray-700 border-l-0 border-r-0 border-t-0 border-b-2 border-[#FF5722] border-solid rounded-br-none rounded-tl-none'
                  required
                />
                <button 
                  type="submit" 
                  className='bg-[#FF5722] text-white rounded py-2 px-4  transition-transform duration-300 hover:translate-y-[-2px] border-b-2 border-[#FF5722]     dark:text-slate-300 dark:bg-[#1B1B1A] dark:border-gray-700 rounded-bl-none rounded-tr-none'
                >
                  {t('subscribe')}
                </button>
              </form>
            </div>
            <div className='flex items-center gap-4 mt-4 justify-center lg:justify-start '>
              <Link to='/about' className='inline-flex items-center mt-8 text-white bg-[#FF5722] dark:bg-[#1B1B1A] py-2 px-4 rounded transition-transform duration-300 hover:translate-y-[-2px] dark:text-slate-300 font-inter border border-[#FF5722] dark:border-gray-700 '>
                {t('learn_more')} <IoMdArrowForward className='ml-2' />
              </Link>
              <Link to='/register' className='inline-flex items-center mt-8 text-[#FF5722] dark:text-slate-300 font-inter border rounded py-2 px-4 font-medium border-[#FF5722] border-solid dark:border-gray-700'>
                {t('contact_sales')} <IoMdArrowForward className='ml-2' />
              </Link>
            </div>
          </div>
          <div className='mt-8 md:mt-0 md:w-1/2 flex-grow flex justify-center items-center min-h-[300px]'>
  <img src={HeroImg} alt="hero-img" className='max-w-full h-auto mx-auto object-cover' data-aos="fade-up" data-aos-delay="800" />
</div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
