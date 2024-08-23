import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

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
        <Hero />
      </div>
    </div>
  )
}

export default Home
