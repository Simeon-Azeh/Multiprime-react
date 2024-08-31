import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Tabs from '../components/Tabs'
import Services from '../components/Services'
import Membership from '../components/Membership'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'
import Footer from '../components/footer'
import SectionMarquee from '../components/SectionMarquee'
import Subsection from '../components/Subsection'
import BrandScroll from '../components/BrandScroll'
import Drift from 'react-driftjs'


function Home() {
  return (
    <div>
       <Drift appId="m7v62erik89n" />
      <div className='sticky top-0  z-50 '>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Tabs />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Membership />
      </div>
      <div>
        <SectionMarquee />
      </div>
      <div className='bg-light-body dark:bg-dark-body px-4 lg:px-0'>
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

export default Home
