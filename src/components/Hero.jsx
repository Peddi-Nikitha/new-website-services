import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in-on-scroll">
            Mahdi Ahmed Hasan Al-Sheikh
            <span className="hero-subtitle">Contracting Est</span>
          </h1>
          <p className="hero-description fade-in-on-scroll">
            Manpower & Heavy Equipments Consultancy
          </p>
          <p className="hero-tagline fade-in-on-scroll">
            Your trusted partner for professional manpower solutions and heavy equipment rental services
          </p>
          <div className="hero-buttons fade-in-on-scroll">
            <button className="btn btn-primary glass-button scale-in-on-scroll" style={{ transitionDelay: '0.1s' }} onClick={() => scrollToSection('services')}>
              Our Services
            </button>
            <button className="btn btn-secondary glass-button scale-in-on-scroll" style={{ transitionDelay: '0.2s' }} onClick={() => scrollToSection('contact')}>
              Contact Us
            </button>
          </div>
          <div className="scroll-indicator fade-in-on-scroll">
            <FaArrowDown />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

