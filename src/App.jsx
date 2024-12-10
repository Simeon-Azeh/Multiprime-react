import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './routes/i18n'; // Import i18n configuration
import Home from './pages/Home';
import Releases from './pages/Music/Releases';
import Discover from './pages/Music/Discover';
import DiscoverMovies from './pages/Movies/Discover';
import Profile from './pages/Music/Profile';
import Dance from './pages/Dance';
import Blog from './pages/Blog';
import BlogDetail from './components/BlogDetails';
import posts from './data/post';
import ContactPage from './pages/Contact';
import MovieReleases from './pages/Movies/Releases';
import Modelling from './pages/Modelling';

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
     <Route path="/releases" element={<Releases/>} />
     <Route path="/music/discover" element={<Discover/>} />
     <Route path='/music/releases' element={<Releases/>} />
     <Route path='/music/profiles' element={<Profile/>} />
     <Route path='/dance' element={<Dance/>} />
     <Route path='/movies/discover' element={<DiscoverMovies/>} />
    
     <Route path='/movies/releases' element={<MovieReleases/>} />
      <Route path='/modelling' element={<Modelling/>} />
      <Route path='/contact' element={<ContactPage/>} />

     <Route path="/blog" element={<Blog posts={posts} />} />
    
     <Route path="/blog/:id" element={<BlogDetail posts={posts} />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
