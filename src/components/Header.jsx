import React, { useState, useEffect } from 'react';
import { Drawer, Spin } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import ReactFlagsSelect from 'react-flags-select';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Header() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [musicDropdownOpen, setMusicDropdownOpen] = useState(false);
  const [moviesDropdownOpen, setMoviesDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const toggleMusicDropdown = () => {
    setMusicDropdownOpen(!musicDropdownOpen);
    if (moviesDropdownOpen) {
      setMoviesDropdownOpen(false);
    }
  };

  const toggleMoviesDropdown = () => {
    setMoviesDropdownOpen(!moviesDropdownOpen);
    if (musicDropdownOpen) {
      setMusicDropdownOpen(false);
    }
  };

  const handleLanguageChange = (countryCode) => {
    setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(countryCode === 'US' ? 'en' : 'fr');
      setLoading(false);
    }, 1000); // 1 second delay
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-light-body dark:bg-dark-body transition-colors">
      <div className='flex justify-between w-full lg:w-4/5 mx-auto items-center py-4 px-6 md:px-0 font-inter sticky top-0 z-50'>
        <div className="text-lg font-semibold">
          <Link to="/">
            <h1 className='font-montserrat-alt text-[#] dark:text-slate-50 text-light-text'>
              Multi_<span className='dark:text-gray-300 text-[#FF5722]'>Prime</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-light-text dark:text-slate-50 font-medium font-Inter">
          <Link to="/">
            <span className="hover:border-b-2 border-[#FF5722] dark:border-gray-400 dark:border-solid">{t('feed')}</span>
          </Link>
          <div className="relative">
            <button onClick={toggleMusicDropdown} className="flex items-center hover:text-[#FF5722] dark:hover:text-gray-400">
              {t('music')}
              {musicDropdownOpen ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
            </button>
            {musicDropdownOpen && (
              <div className="absolute dark:bg-[#1a1818] dark:text-white py-2 mt-2 space-y-2 rounded border bg-white text-[#414760] dark:border-gray-600 dark:border-solid">
                <Link to="/resume">
                  <span className="block py-2 px-4 hover:text-[#FF5722] dark:hover:text-slate-300">{t('discover')}</span>
                </Link>
                <Link to="/portfolio">
                  <span className="block py-2 px-4 hover:text-[#FF5722] dark:hover:text-slate-300">{t('releases')}</span>
                </Link>
                <Link to="/portfolio">
                  <span className="block py-2 px-4 hover:text-[#FF5722] dark:hover:text-slate-300">{t('profiles')}</span>
                </Link>
              </div>
            )}
          </div>
          <Link to="/services">
            <span className="hover:border-b-2 border-[#FF5722] dark:border-gray-400 dark:border-solid">{t('dance')}</span>
          </Link>
          <div className="relative">
            <button onClick={toggleMoviesDropdown} className="flex items-center hover:text-[#FF5722] dark:hover:text-gray-400">
              {t('movies')}
              {moviesDropdownOpen ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
            </button>
            {moviesDropdownOpen && (
              <div className="absolute dark:bg-[#1a1818] dark:text-white py-2 mt-2 space-y-2 rounded border bg-white text-[#414760] dark:border-gray-600 dark:border-solid">
                <Link to="/resume">
                  <span className="block py-2 px-4 hover:text-[#FF5722] dark:hover:text-slate-300">{t('discover')}</span>
                </Link>
                <Link to="/portfolio">
                  <span className="block py-2 px-4 hover:text-[#FF5722] dark:hover:text-slate-300">{t('releases')}</span>
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact">
            <span className="hover:border-b-2 border-[#FF5722] dark:border-gray-400 dark:border-solid">{t('modelling')}</span>
          </Link>
          <Link to="/contact">
            <span className="hover:border-b-2 border-[#FF5722] dark:border-gray-400 dark:border-solid">{t('blog')}</span>
          </Link>
          <Link to="/contact">
            <span className="hover:border-b-2 border-[#FF5722] dark:border-gray-400 dark:border-solid">{t('contact')}</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="hover:text-gray-400 dark:text-slate-50 text-[#414760]">
            {darkMode ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
          </button>
          {loading ? (
            <Spin />
          ) : (
            <ReactFlagsSelect
              countries={["US", "FR"]}
              customLabels={{ US: "EN", FR: "FR" }}
              selected={i18n.language === 'en' ? 'US' : 'FR'}
              onSelect={handleLanguageChange}
              className="custom-flag-select text-[#414760] dark:text-slate-50 pr-8"
            />
          )}
          <a href="https://www.facebook.com/kongnyuy.simeon.3?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className=" dark:hover:text-gray-400 dark:text-slate-50 text-light-text hover:text-[#FF5722]">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.linkedin.com/in/simeonazeh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="dark:hover:text-gray-400 dark:text-slate-50 text-light-text hover:text-[#FF5722]">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com/Simeon-Azeh" target="_blank" rel="noopener noreferrer" className="dark:hover:text-gray-400 dark:text-slate-50 text-light-text hover:text-[#FF5722]">
            <FaWhatsapp size={20} />
          </a>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="hover:text-gray-400 dark:text-slate-50 text-[#414760]">
            {darkMode ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
          </button>
          {loading ? (
            <Spin  />
          ) : (
            <ReactFlagsSelect
              countries={["US", "FR"]}
              customLabels={{ US: "EN", FR: "FR" }}
              selected={i18n.language === 'en' ? 'US' : 'FR'}
              onSelect={handleLanguageChange}
              className="custom-flag-select"
            />
          )}
          <button onClick={showDrawer} className="dark:text-slate-50 text-light-text hover:text-[#FF5722]">
            <MenuOutlined className="text-xl" />
          </button>
        </div>
      </div>

      <Drawer title={t('menu')} placement="right" onClose={onClose} visible={visible} className='bg-[#f7f7f7] font-inter font-medium'>
        <Link to="/">
          <span className="block py-2 px-4 text-[#414760] hover:text-[#2c2b2b]">{t('feed')}</span>
        </Link>
        <div className="relative">
          <button onClick={toggleMusicDropdown} className="flex items-center justify-between py-2 px-4 text-[#414760] hover:text-[#2c2b2b] w-full">
            {t('music')}
            {musicDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {musicDropdownOpen && (
            <div className="pl-4">
              <Link to="/resume">
                <span className="block py-2 px-4 text-[#414760] hover:text-[#FF5722]">{t('discover')}</span>
              </Link>
              <Link to="/portfolio">
                <span className="block py-2 px-4 text-[#414760] hover:text-[#FF5722]">{t('releases')}</span>
              </Link>
              <Link to="/portfolio">
                <span className="block py-2 px-4 text-[#414760] hover:text-[#FF5722]">{t('profiles')}</span>
              </Link>
            </div>
          )}
        </div>
        <Link to="/services">
          <span className="block py-2 px-4 text-[#414760] hover:text-[#2c2b2b]">{t('dance')}</span>
        </Link>
        <div className="relative">
          <button onClick={toggleMoviesDropdown} className="flex items-center justify-between py-2 px-4 text-[#414760] hover:text-[#2c2b2b] w-full">
            {t('movies')}
            {moviesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {moviesDropdownOpen && (
            <div className="pl-4">
              <Link to="/resume">
                <span className="block py-2 px-4 text-[#414760] hover:text-[#FF5722]">{t('discover')}</span>
              </Link>
              <Link to="/portfolio">
                <span className="block py-2 px-4 text-[#414760] hover:text-[#FF5722]">{t('releases')}</span>
              </Link>
            </div>
          )}
        </div>
        <Link to="/contact">
          <span className="block py-2 px-4 text-[#414760] hover:text-[#2c2b2b]">{t('modelling')}</span>
        </Link>
        <Link to="/contact">
          <span className="block py-2 px-4 text-[#414760] hover:text-[#2c2b2b]">{t('blog')}</span>
        </Link>
        <Link to="/contact">
          <span className="block py-2 px-4 text-[#414760] hover:text-[#2c2b2b]">{t('contact')}</span>
        </Link>
        <div className="flex space-x-4 px-4 mt-4">
          <a href="https://www.facebook.com/kongnyuy.simeon.3?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-[#414760] hover:text-[#2c2b2b]">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.linkedin.com/in/simeonazeh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-[#414760] hover:text-[#2c2b2b]">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Simeon-Azeh" target="_blank" rel="noopener noreferrer" className="text-[#414760] hover:text-[#2c2b2b]">
            <FaGithub size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[#414760] hover:text-[#2c2b2b]">
            <FaInstagram size={20} />
          </a>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
