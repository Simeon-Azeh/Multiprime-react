import React from 'react'
import Header from '../../components/Header'

import Membership from '../../components/Membership'
import Pricing from '../../components/Pricing'
import Testimonial from '../../components/Testimonial'
import Footer from '../../components/footer'

import MoviesMarquee from '../../components/MoviesMarquee'
import VideoGallery from '../../components/VideoGallery'


function Discover() {
  return (
    <div>
     
      <div className='sticky top-0 z-50 '>
        <Header/>
      </div>
    
      <div className=''>
        <MoviesMarquee />
      </div>
    
     <div className='bg-white dark:bg-dark-body'>
        <h2 className='w-4/5 mx-auto mb-4 text-3xl font-medium text-[#FF5722] font-inter dark:text-slate-50'>These videos may interest you...</h2>
        <VideoGallery />
     </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Discover
