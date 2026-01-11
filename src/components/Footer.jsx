import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa'
import Logo from './Logo'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-banner-wrapper fade-in-on-scroll">
        <div className="footer-banner-container">
          <img src="/footerbanner_1.png" alt="Footer Banner" className="footer-banner" />
        </div>
      </div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section fade-in-left-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="footer-logo">
              <Logo />
            </div>
            <p className="footer-description">
              Your trusted partner for professional manpower solutions and heavy equipment rental services.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="scale-in-on-scroll" style={{ transitionDelay: '0.2s' }}><FaFacebook /></a>
              <a href="#" aria-label="Twitter" className="scale-in-on-scroll" style={{ transitionDelay: '0.25s' }}><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn" className="scale-in-on-scroll" style={{ transitionDelay: '0.3s' }}><FaLinkedin /></a>
              <a href="#" aria-label="Instagram" className="scale-in-on-scroll" style={{ transitionDelay: '0.35s' }}><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-section fade-in-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
              <li><a href="#clients" onClick={(e) => { e.preventDefault(); scrollToSection('clients') }}>Clients</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section fade-in-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <h4>Services</h4>
            <ul>
              <li>Manpower Services</li>
              <li>Equipment Rental</li>
              <li>Professional Support</li>
              <li>Technical Workers</li>
            </ul>
          </div>

          <div className="footer-section fade-in-right-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <strong>Phone:</strong><br />
                +966 XX XXX XXXX
              </li>
              <li>
                <strong>Email:</strong><br />
                info@mahdicontracting.com
              </li>
              <li>
                <strong>Location:</strong><br />
                Saudi Arabia
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom fade-in-on-scroll" style={{ transitionDelay: '0.5s' }}>
          <p>&copy; {new Date().getFullYear()} Mahdi Ahmed Hasan Al-Sheikh Contracting Est. All rights reserved.</p>
          <button className="scroll-top scale-in-on-scroll" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

