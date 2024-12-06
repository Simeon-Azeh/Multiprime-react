import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Tabs from '../../components/Tabs'
import Services from '../../components/Services'
import Membership from '../../components/Membership'
import Pricing from '../../components/Pricing'
import Testimonial from '../../components/Testimonial'
import Footer from '../../components/footer'

import DiscoverMarquee from '../../components/DiscoverMarquee'


function Discover() {
  return (
    <div>
     
      <div className='sticky top-0 z-50 '>
        <Header/>
      </div>
    
      <div className=''>
        <DiscoverMarquee className='' />
      </div>
    
      <div>
        <Membership />
      </div>
      
      <div className='px-4 bg-light-body dark:bg-dark-body lg:px-0'>
        <Testimonial />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Discover
