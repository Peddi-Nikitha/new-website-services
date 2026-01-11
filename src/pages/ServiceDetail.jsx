import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCheckCircle, FaUsers, FaTools, FaShieldAlt } from 'react-icons/fa'
import { servicesData } from '../data/servicesData'
import { getServiceIcon } from '../utils/serviceIcons'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { initScrollAnimations } from '../utils/scrollAnimation'
import './ServiceDetail.css'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const service = servicesData[serviceId]

  useEffect(() => {
    // Scroll to top when component mounts or serviceId changes
    window.scrollTo({ top: 0, behavior: 'instant' })
    
    // Initialize scroll animations
    const observer = initScrollAnimations()
    
    return () => {
      // Cleanup observer on unmount
      if (observer) {
        observer.disconnect()
      }
    }
  }, [serviceId])

  if (!service) {
    return (
      <>
        <Header />
        <div className="service-not-found">
          <h2>Service not found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Go Back Home
          </button>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="service-detail">
        <div className="service-hero" style={{ backgroundImage: `url(${service.heroImage})` }}>
          <div className="service-hero-overlay"></div>
          <div className="container">
            <button className="back-button" onClick={() => navigate('/')}>
              <FaArrowLeft /> Back to Services
            </button>
            <div className="service-hero-content">
              <span className="service-category">{service.category}</span>
              <h1>{service.title}</h1>
              <p className="service-hero-description">{service.description}</p>
            </div>
          </div>
        </div>

        <div className="service-content section">
          <div className="container">
            <div className="service-main-content">
              <div className="service-image-section fade-in-left-on-scroll">
                <img 
                  src={service.heroImage || service.image} 
                  alt={service.title} 
                  className="service-main-image" 
                  loading="lazy"
                />
                <div className="service-image-overlay"></div>
              </div>

              <div className="service-info fade-in-right-on-scroll">
                <h2 className="fade-in-on-scroll">Service Overview</h2>
                <p className="fade-in-on-scroll">{service.description}</p>

                <div className="service-features fade-in-on-scroll">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {service.features.map((feature, index) => (
                      <div key={index} className="feature-item scale-in-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                        <FaCheckCircle className="feature-check" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-benefits fade-in-on-scroll">
                  <h3>Benefits</h3>
                  <ul>
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="fade-in-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-categories-detailed">
              <h2 className="section-title fade-in-on-scroll">Service Categories</h2>
              {service.categories.map((category, index) => (
                <div key={index} className="category-detail-card fade-in-on-scroll" style={{ transitionDelay: `${index * 0.15}s` }}>
                  <div className="category-detail-content">
                    <div className="category-detail-image fade-in-left-on-scroll">
                      <img src={category.image} alt={category.name} />
                    </div>
                    <div className="category-detail-info fade-in-right-on-scroll">
                      <h3>{category.name}</h3>
                      <div className="category-items-grid">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="category-item-card scale-in-on-scroll" style={{ transitionDelay: `${itemIndex * 0.05}s` }}>
                            <div className="category-item-icon-wrapper">
                              {getServiceIcon(item)}
                            </div>
                            <span className="category-item-name">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="service-cta scale-in-on-scroll">
              <h2>Interested in Our Services?</h2>
              <p>Contact us today to discuss your requirements</p>
              <button className="btn btn-primary" onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                navigate('/#contact')
              }}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ServiceDetail

