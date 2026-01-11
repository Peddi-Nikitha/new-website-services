import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link animate-fade-in-left">
            <Logo />
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => { scrollToSection('home'); closeMenu() }} className="nav-link-item">Home</Link>
            <Link to="/" onClick={() => { scrollToSection('about'); closeMenu() }} className="nav-link-item">About</Link>
            <Link to="/" onClick={() => { scrollToSection('services'); closeMenu() }} className="nav-link-item">Services</Link>
            <Link to="/" onClick={() => { scrollToSection('contact'); closeMenu() }} className="nav-link-item">Contact</Link>
          </nav>

          <button className="menu-toggle animate-fade-in-right" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

