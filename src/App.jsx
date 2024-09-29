// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import NewsPage from './pages/News';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import ForgotPasswordPage from './components/ForgotPassword';
import Footer from './components/Footer';
import FillForm from './components/FillForm';
import Dashboard from './components/Dashboard'; 

import './i18n'; // Import i18n configuration

const App = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onLanguageChange={handleLanguageChange} />
        <main className="flex-1 p-8"> {/* Main Content Section */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media-center" element={<NewsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="fill-form" element={<FillForm />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
