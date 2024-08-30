import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-light-body dark:bg-dark-body text-light-text dark:text-white py-10 font-inter">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1">
          <h2 className="text-2xl font-medium mb-4">Multi_prime</h2>
        </div>

        <div className="col-span-1 flex flex-col items-center">
          <h3 className="text-xl font-medium mb-4">{t('quickLinks')}</h3>
          <ul className="space-y-2 text-center">
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('home')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('music')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('videos')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('models')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('blog')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('contact')}</a></li>
          </ul>
        </div>

        <div className="col-span-1 flex flex-col items-center">
          <h3 className="text-xl font-medium mb-4">{t('help')}</h3>
          <ul className="space-y-2 text-center">
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('faqs')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('terms')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('privacy')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('subscriptions')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('blog')}</a></li>
            <li><a href="#" className="hover:text-[#FF5722] transition-colors">{t('footer.contact')}</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-medium mb-4">{t('followUs')}</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FF5722] transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#FF5722] transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-[#FF5722] transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-[#FF5722] transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 text-center border-t border-gray-300 border-solid dark:border-gray-700 pt-4 flex flex-col lg:flex-row gap-2 items-center justify-center">
        <p className="text-sm">&copy; 2024 Multiprime. {t('allRightsReserved')}</p>
        <p className="text-sm">{t('termsAndConditions')}</p>
        <p className="text-sm">{t('privacyPolicy')}</p>
        <p className="text-sm">{t('refundPolicy')}</p>
        <p className="text-sm">{t('disclaimer')}</p>
        <p className="text-sm">{t('copyright')}</p>
      </div>
    </footer>
  );
}

export default Footer;
