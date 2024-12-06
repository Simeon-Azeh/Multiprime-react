import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import HeroImg from '/images/heroImg.png';

const roles = ["Frontend Engineer", "Brand Manager", "Graphic Designer", "Web Developer"];

const NewsletterForm = ({ t }) => (
  <div className='mt-8 font-inter'>
    <h3 className='text-sm font-medium text-gray-500 dark:text-slate-50' data-aos="fade-up" data-aos-delay="700">
      {t('newsletter')}
    </h3>
    <form className='mt-2 font-inter'>
      <input 
        type="email" 
        placeholder={t('email_placeholder')} 
        className='border rounded py-2 px-4 text-gray-700 bg-transparent outline-none dark:bg-[#1B1B1A] dark:text-slate-300 dark:border-gray-700 border-l-0 border-r-0 border-t-0 border-b-2 border-[#FF5722] border-solid rounded-br-none rounded-tl-none'
        required
        aria-label={t('email_placeholder')}
      />
      <button 
        type="submit" 
        className='bg-[#FF5722] text-white rounded py-2 px-4 transition-transform duration-300 hover:translate-y-[-2px] border-b-2 border-[#FF5722] dark:text-slate-300 dark:bg-[#1B1B1A] dark:border-gray-700 rounded-bl-none rounded-tr-none'
      >
        {t('subscribe')}
      </button>
    </form>
  </div>
);

const RoleText = ({ currentRole, fade }) => (
  <span className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
    {currentRole}
  </span>
);

function Hero() {
  const { t } = useTranslation();
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [fade, setFade] = useState(true);

  const memoizedRoles = useMemo(() => roles, []);

  const updateRole = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = memoizedRoles.indexOf(prevRole);
        return memoizedRoles[(currentIndex + 1) % memoizedRoles.length];
      });
      setFade(true);
    }, 500);
  }, [memoizedRoles]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const intervalId = setInterval(updateRole, 3000);

    return () => clearInterval(intervalId);
  }, [updateRole]);

  return (
    <div className='bg-light-body dark:bg-dark-body transition-colors h-[100vh] flex items-center md:justify-center dot-pattern pt-56 md:pt-20'>
      <div className='w-full px-4 mx-auto text-center md:w-4/5 lg:px-0 font-Inter'>
        <div className='flex flex-col items-center md:justify-center md:flex-row'>
          <div className='w-full text-center md:w-1/2 md:text-left'>
          <h2 className='relative overflow-hidden inline-block text-2xl lg:text-5xl font-semibold lg:font-medium dark:text-slate-50 text-[#37474F] font-inter' data-aos="fade-up" data-aos-delay="400"> {t('never')} <span className='dark:text-slate-300 text-[#FF5722]'>{t('miss')}</span> {t('a')} <span className='dark:text-slate-300 text-[#FF5722]'>{t('beat')}</span>... </h2> 
            <p className='mt-2 mb-2 font-normal text-gray-500 dark:text-slate-300 lg:text-justify' data-aos="fade-up" data-aos-delay="200">
              {t('hero_description')}
            </p>
            <NewsletterForm t={t} />
            <div className='flex items-center justify-center gap-4 mt-4 lg:justify-start'>
              <Link to='/about' className='inline-flex items-center mt-8 text-white bg-[#FF5722] dark:bg-[#1B1B1A] py-2 px-4 rounded transition-transform duration-300 hover:translate-y-[-2px] dark:text-slate-300 font-inter border border-[#FF5722] dark:border-gray-700'>
                {t('learn_more')} <IoMdArrowForward className='ml-2' />
              </Link>
              <Link to='/register' className='inline-flex items-center mt-8 text-[#FF5722] dark:text-slate-300 font-inter border rounded py-2 px-4 font-medium border-[#FF5722] border-solid dark:border-gray-700'>
                {t('contact_sales')} <IoMdArrowForward className='ml-2' />
              </Link>
            </div>
          </div>
          <div className='mt-8 md:mt-0 md:w-1/2 flex-grow flex justify-center items-center min-h-[300px]'>
            <img src={HeroImg} alt="hero-img" className='object-cover h-auto max-w-full mx-auto dark:filter dark:grayscale ' data-aos="fade-up" data-aos-delay="800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;