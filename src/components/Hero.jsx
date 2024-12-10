import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import HeroImg from '/images/heroImg.png';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { query, where, getDocs } from 'firebase/firestore';
import { app } from '../Firebase/firebase'; // Ensure you have the Firebase app initialized
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const db = getFirestore(app);

const roles = ["Frontend Engineer", "Brand Manager", "Graphic Designer", "Web Developer"];

const NewsletterForm = ({ t }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
  
    try {
      // Query the database to check if the email already exists
      const subscriptionsRef = collection(db, 'subscriptions');
      const q = query(subscriptionsRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        // Email already exists in the subscriptions
        setError('You are already subscribed.');
      } else {
        // Add the new subscription
        await addDoc(subscriptionsRef, {
          email,
          subscribedAt: new Date(),
        });
        setSuccess(true);
        setEmail('');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      console.error('Error checking or adding document: ', err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='mt-8 font-inter'>
      <h3 className='text-sm font-medium text-gray-500 dark:text-slate-50' data-aos="fade-up" data-aos-delay="700">
        {t('newsletter')}
      </h3>
      <form onSubmit={handleSubmit} className='mt-2 font-inter'>
        <input 
          type="email" 
          placeholder={t('email_placeholder')} 
          className='border rounded py-2 px-4 text-gray-700 bg-transparent outline-none dark:bg-[#1B1B1A] dark:text-slate-300 dark:border-gray-700 border-l-0 border-r-0 border-t-0 border-b-2 border-[#FF5722] border-solid rounded-br-none rounded-tl-none'
          required
          aria-label={t('email_placeholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          type="submit" 
          className='bg-[#FF5722] text-white rounded py-2 px-4 transition-transform duration-300 hover:translate-y-[-2px] border-b-2 border-[#FF5722] dark:text-slate-300 dark:bg-[#1B1B1A] dark:border-gray-700 rounded-bl-none rounded-tr-none'
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {success && <p className="flex items-center gap-2 p-2 px-6 mt-4 text-sm text-green-600 rounded-md bg-slate-100 dark:bg-gray-800 dark:text-white"><IoMdCheckmarkCircleOutline /> Thank you for subscribing! It means alot.</p>}
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
    </div>
  );
};

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
              <Link to='/contact' className='inline-flex items-center mt-8 text-[#FF5722] dark:text-slate-300 font-inter border rounded py-2 px-4 font-medium border-[#FF5722] border-solid dark:border-gray-700'>
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