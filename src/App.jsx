import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './routes/i18n'; // Import i18n configuration
import Home from './pages/Home';
function App() {
  
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // If AOS is used, ensure it's refreshed here
      // AOS.refresh();
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    
    </Routes>
  </BrowserRouter>
  )
}

export default App
