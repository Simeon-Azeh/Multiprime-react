import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Tabs from '../components/Tabs'
import Services from '../components/Services'
import Membership from '../components/Membership'
import Pricing from '../components/Pricing'

function Home() {
  return (
    <div>
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
        <Pricing />
      </div>
    </div>
  )
}

export default Home
