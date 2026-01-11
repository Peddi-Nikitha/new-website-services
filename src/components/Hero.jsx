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

  // Gallery images for scrolling animation
  const galleryImages = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1541976590-713941681591?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581091877018-dac6a371d50f?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop',
  ]

  return (
    <section id="home" className="hero" style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Scrolling Image Gallery Background */}
      <div className="hero-scrolling-gallery">
        <div className="gallery-row gallery-row-left">
          <div className="gallery-track">
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="gallery-row gallery-row-right">
          <div className="gallery-track gallery-track-reverse">
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
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

