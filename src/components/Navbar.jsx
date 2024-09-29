import React, { useState } from 'react';
import { FaUser, FaSearch, FaUniversalAccess, FaLanguage, FaHome, FaExclamationTriangle } from 'react-icons/fa'; // Import the alert icon
import { Link, useNavigate } from 'react-router-dom';
import MinistryLogo from '../assets/Ministry.png';
import WebLogo from '../assets/Web_Logo.jpg';  // Import your website logo
import Search from './Search';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isLanguageVisible, setLanguageVisible] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate(); // For programmatic navigation

  const handleSearchToggle = () => setSearchVisible(!isSearchVisible);
  const handleLanguageToggle = () => setLanguageVisible(!isLanguageVisible);
  const handleAlertToggle = () => setAlertVisible(!isAlertVisible);
  const handleLogin = () => navigate('/login'); // Navigate to Login page

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageVisible(false); // Close language selection after choosing a language
  };

  return (
    <>
      <header className="absolute w-full flex flex-col items-center p-4">
        {/* Top Navbar Section with Ministry and Web Logo */}
        <div className="flex items-center justify-between w-full max-w-7xl px-4">
          <div className="flex items-center space-x-4">
            {/* Web Logo */}
            <img
              src={MinistryLogo}
              alt="Ministry Logo"
              className="h-[100px] object-contain"
            />
            <img
              src={WebLogo}
              alt="Website Logo"
              className="h-[100px] object-contain"
            />
          </div>

          <div className="flex items-center space-x-6 mr-4">
            {/* User, Search, Accessibility, Language, and Alert Icons */}
            <FaUser
              title={t('navbar.login')}
              className="cursor-pointer hover:text-gray-400"
              onClick={handleLogin} // Navigate to Login page
            />
            <FaSearch
              title={t('navbar.search')}
              className="cursor-pointer hover:text-gray-400"
              onClick={handleSearchToggle}
            />
            <FaUniversalAccess title={t('navbar.accessibility')} className="cursor-pointer hover:text-gray-400" />
            <FaLanguage
              title={t('navbar.language')}
              className="cursor-pointer hover:text-gray-400"
              onClick={handleLanguageToggle}
            />
            <FaExclamationTriangle // Alert icon
              title={t('navbar.alert')}
              className="cursor-pointer hover:text-red-600"
              onClick={handleAlertToggle}
            />
          </div>
        </div>

        {/* Second Navbar Section */}
        <nav className="flex justify-center w-full mt-2 max-w-7xl px-4">
          <ul className="flex space-x-8 font-medium">
            <li><Link to="/" className="flex items-center space-x-2 hover:text-gray-500 font-bold"><FaHome /><span>{t('navbar.home')}</span></Link></li>
            <li><Link to="/about" className="hover:text-gray-500 font-bold">{t('navbar.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500 font-bold">{t('navbar.contact')}</Link></li>
            <li><Link to="/knowledge-center" className="hover:text-gray-500 font-bold">{t('navbar.knowledgeCenter')}</Link></li>
            <li><Link to="/media-center" className="hover:text-gray-500 font-bold">{t('navbar.mediaCenter')}</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-500 font-bold">{t('navbar.dashboard')}</Link></li>
          </ul>
        </nav>
      </header>

      {/* Render the Search Component */}
      <Search isVisible={isSearchVisible} onClose={() => setSearchVisible(false)} />

      {/* Render the Language Component at the upper part of the screen */}
      {isLanguageVisible && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-50 p-4">
          <button onClick={() => changeLanguage('en')} className="m-2 p-2 bg-gray-200 hover:bg-gray-300 rounded">English</button>
          <button onClick={() => changeLanguage('hi')} className="m-2 p-2 bg-gray-200 hover:bg-gray-300 rounded">Hindi</button>
        </div>
      )}

      {/* Render the Alert Overlay */}
      {isAlertVisible && (
        <div className="fixed inset-0 bg-red-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <FaExclamationTriangle className="text-red-600 text-6xl mb-4" />
            <h2 className="text-2xl font-bold text-red-600">{t('alert.title')}</h2>
            <p className="text-gray-700">{t('alert.message')}</p>
            {/* Close button or click anywhere to close the alert */}
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              onClick={handleAlertToggle}
            >
              {t('alert.close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
