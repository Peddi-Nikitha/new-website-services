import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCheckCircle, FaUsers, FaTools, FaShieldAlt } from 'react-icons/fa'
import { servicesData } from '../data/servicesData'
import { getServiceIcon } from '../utils/serviceIcons'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './ServiceDetail.css'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const service = servicesData[serviceId]

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
              <div className="service-image-section">
                <img 
                  src={service.heroImage || service.image} 
                  alt={service.title} 
                  className="service-main-image" 
                  loading="lazy"
                />
                <div className="service-image-overlay"></div>
              </div>

              <div className="service-info">
                <h2>Service Overview</h2>
                <p>{service.description}</p>

                <div className="service-features">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {service.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <FaCheckCircle className="feature-check" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-benefits">
                  <h3>Benefits</h3>
                  <ul>
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-categories-detailed">
              <h2 className="section-title">Service Categories</h2>
              {service.categories.map((category, index) => (
                <div key={index} className="category-detail-card">
                  <div className="category-detail-content">
                    <div className="category-detail-image">
                      <img src={category.image} alt={category.name} />
                    </div>
                    <div className="category-detail-info">
                      <h3>{category.name}</h3>
                      <div className="category-items-grid">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="category-item-card">
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

            <div className="service-cta">
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

