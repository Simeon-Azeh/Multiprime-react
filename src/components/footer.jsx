import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiSoundcloudLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-10 bg-light-body dark:bg-dark-body text-light-text dark:text-white font-inter">
      <div className="grid w-4/5 grid-cols-1 gap-16 pt-4 pb-4 mx-auto mb-4 border-t dark:border-gray-700 md:grid-cols-4">
        <div className="col-span-1">
          <h2 className="mb-4 text-2xl font-medium">Multi_prime</h2>
        </div>

        <div className="flex flex-col items-center col-span-1">
          <h3 className="mb-4 text-xl font-medium">{t('quickLinks')}</h3>
          <ul className="space-y-2 text-center">
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('home')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('music')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('videos')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('models')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('blog')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('merch')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('contact')}</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center col-span-1">
          <h3 className="mb-4 text-xl font-medium">{t('help')}</h3>
          <ul className="space-y-2 text-center">
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('faqs')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('terms')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('privacy')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('subscriptions')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('pricing')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('support')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors">{t('helpdesk')}</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center col-span-1 lg:ml-8">
          <h3 className="flex justify-start mb-4 text-xl font-medium text-left">{t('followUs')}</h3>
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start">
            <a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors flex items-center gap-2"><FaFacebookF />Facebook</a>
            <a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors flex items-center gap-2"><FaXTwitter /> (formerly Twitter)</a>
            <a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors flex items-center gap-2"><FaInstagram /> Instagram</a>
            <a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors flex items-center gap-2"><FiYoutube /> Youtube</a>
            <a href="#" className="hover:text-[#FF5722] dark:hover:text-gray-300 font-medium text-light-text dark:text-white transition-colors flex items-center gap-2"><RiSoundcloudLine /> Soundcloud</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2 pt-4 mt-8 text-center border-t border-gray-300 border-solid dark:border-gray-700 lg:flex-row">

        <div className='flex gap-4'>
        <p className="text-sm">{t('termsAndConditions')}</p>
        <p className="text-sm">{t('privacyPolicy')}</p>
        <p className="text-sm">{t('refundPolicy')}</p>
       
        
        </div>
        <p className="text-sm">&copy; 2024 Multiprime. {t('allRightsReserved')}</p>
       
      </div>
    </footer>
  );
}

export default Footer;
