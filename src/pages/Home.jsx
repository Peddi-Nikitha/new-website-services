import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { initScrollAnimations } from '../utils/scrollAnimation'

const Home = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = initScrollAnimations()
    
    return () => {
      // Cleanup observer on unmount
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

