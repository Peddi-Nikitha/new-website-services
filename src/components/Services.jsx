import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  FaUsers, FaCog, FaTruck, FaWrench, FaHardHat, 
  FaBuilding, FaPaintRoller, FaTools, FaCar, 
  FaTachometerAlt, FaClipboardCheck, FaShieldAlt, FaArrowRight
} from 'react-icons/fa'
import { servicesData } from '../data/servicesData'
import { getServiceIcon } from '../utils/serviceIcons'
import './Services.css'

const Services = () => {
  const [activeTab, setActiveTab] = useState('manpower')
  const navigate = useNavigate()

  const services = {
    manpower: {
      icon: <FaUsers />,
      title: 'Manpower / Skilled & Unskilled Services',
      categories: [
        {
          name: 'Technical & Skilled Workers',
          items: [
            'Instrument Fitter', 'Instrument Technician', 'Electrician', 'Electrical Technician',
            'E&I Technician', 'Cable Puller', 'AC Technician', 'Millwright', 'Plumber',
            'Diesel Mechanic', 'Auto Electrician', 'Pipe Fitter', 'Pipe Fabricator',
            'Structural Erector', 'Structural Fabricator', 'Form Worker', 'Rebar Worker',
            'Mason', 'Carpenter', 'Scaffolder', 'Rigger (Level I, II, III – Aramco / TUV Certified)',
            'Sand Blaster', 'Grinder Man', 'Painter', 'Multi Welder', 'Plate Welder',
            'Welder (2G / 3G / 4G / 5G / 6G)', 'Welder – Alloy Steel'
          ]
        },
        {
          name: 'Operators & Drivers',
          items: [
            'Crane Operator', 'Forklift Operator', 'Bobcat Operator', 'Excavator Operator',
            'Boom Truck Operator', 'Side Boom Operator', 'Heavy Duty Driver',
            'Trailer Driver', 'Light Duty Driver'
          ]
        },
        {
          name: 'General & Office Staff',
          items: [
            'Labor', 'Admin Officer', 'Document Controller', 'Office Boy', 'Secretary'
          ]
        }
      ]
    },
    equipment: {
      icon: <FaTruck />,
      title: 'Equipment Rental Services',
      categories: [
        {
          name: 'Construction & Industrial Equipment',
          items: [
            'Loader', 'Loader with Operator', 'Bobcat', 'Dozer', 'Excavator',
            'Backhoe Loader', 'Forklift', 'Forklift with Operator', 'Cranes',
            'Crane with Operator', 'Side Boom', 'Compactors', 'Grader',
            'Generator', 'Compressor', 'Welding Machine', 'Motor Welding Machine'
          ]
        },
        {
          name: 'Vehicles & Tankers',
          items: [
            'Truck', 'Dump Truck', 'Trailer Dump Truck', 'Prime Movers',
            'Transit Mixer (Concrete Mixer)', 'Bus', 'Ambulance', 'Water Tanker',
            'Sweet Water Tanker', 'Diesel or Gasoline Tanker', 'Crude Oil Tanker',
            'Manlift', 'Manlift with Operator'
          ]
        }
      ]
    },
    support: {
      icon: <FaClipboardCheck />,
      title: 'Professional Support Services',
      categories: [
        {
          name: 'Engineering & Management',
          items: [
            'Construction Manager', 'Project Manager', 'Planning Engineer', 'Civil Engineer',
            'Mechanical Engineer', 'Electrical Engineer', 'Instrument Engineer',
            'Piping Engineer', 'Quantity Surveyor'
          ]
        },
        {
          name: 'QA / QC & Inspection',
          items: [
            'QA/QC Manager', 'QC Supervisor', 'Civil QC Inspector', 'Mechanical QC Inspector',
            'Electrical QC Inspector', 'Instrument QC Inspector', 'Welding QC Inspector',
            'Painting & Coating QC Inspector', 'Piping QC Inspector', 'NDT Coordinator',
            'NDT Inspector'
          ]
        },
        {
          name: 'Supervision & Safety',
          items: [
            'Commissioning Engineer', 'Commissioning Supervisor', 'HSE Manager',
            'Safety Officer', 'Safety Supervisor', 'Safety Inspector', 'Environmental Coordinator',
            'Work Permit Receiver', 'Civil Supervisor', 'Mechanical Supervisor',
            'Electrical Supervisor', 'Instrument Supervisor', 'Piping Supervisor',
            'Hydrotest Supervisor', 'Civil Foreman', 'Mechanical Foreman',
            'Electrical Foreman', 'Instrument Foreman', 'Piping Foreman'
          ]
        }
      ]
    }
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header fade-in-on-scroll">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle" style={{ transitionDelay: '0.1s' }}>
            Comprehensive solutions for all your manpower and equipment needs
          </p>
        </div>

        {/* Main Service Cards - Modern Scroll Animation */}
        <div className="services-showcase">
          {Object.keys(services).map((key, index) => {
            const service = servicesData[key]
            const isActive = activeTab === key
            return (
              <div 
                key={key} 
                className={`service-showcase-card service-card-scroll-animate ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
                style={{ '--stagger-delay': `${index * 0.12}s` }}
                data-parallax="true"
              >
                <div className="service-showcase-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-showcase-overlay"></div>
                  <div className="service-showcase-icon service-icon-scroll-animate">{services[key].icon}</div>
                </div>
                <div className="service-showcase-content">
                  <h3 className="service-title-scroll-animate">{service.title}</h3>
                  <p className="premium-desc-animate">{service.description.substring(0, 100)}...</p>
                  <div className="service-showcase-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag premium-feature-animate">{feature}</span>
                    ))}
                  </div>
                  <button 
                    className="service-showcase-btn premium-btn-animate"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/service/${key}`)
                    }}
                  >
                    Explore Service <FaArrowRight />
                  </button>
                </div>
                {isActive && <div className="service-showcase-indicator"></div>}
              </div>
            )
          })}
        </div>

        {/* Service Tabs */}
        <div className="services-tabs fade-in-on-scroll" style={{ transitionDelay: '0.5s' }}>
          {Object.keys(services).map((key, index) => (
            <button
              key={key}
              className={`tab-button scale-in-on-scroll ${activeTab === key ? 'active' : ''}`}
              style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{services[key].icon}</span>
              <span className="tab-text">{services[key].title}</span>
            </button>
          ))}
        </div>

        {/* Service Details Content */}
        <div className="services-content">
          {servicesData[activeTab] && servicesData[activeTab].categories ? (
            servicesData[activeTab].categories.map((category, catIndex) => (
              <div key={catIndex} className="service-category">
                <div className="category-header category-header-animate" style={{ animationDelay: `${catIndex * 0.3}s` }}>
                  <h3 className="category-title category-title-animate">{category.name}</h3>
                  <div className="category-badge">{category.items.length} Services</div>
                </div>
                <div className="service-items-grid">
                  {category.items && category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="service-item-card service-item-card-animate"
                      style={{ animationDelay: `${0.5 + catIndex * 0.3 + itemIndex * 0.15}s` }}
                      onClick={() => navigate(`/service/${activeTab}`)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          navigate(`/service/${activeTab}`)
                        }
                      }}
                    >
                      <div className="service-item-icon-wrapper service-item-icon-animate">
                        {getServiceIcon(item)}
                      </div>
                      <div className="service-item-content">
                        <span className="service-item-name service-item-title-animate">{item}</span>
                      </div>
                      <div className="service-item-arrow">
                        <FaArrowRight />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div>Loading services...</div>
          )}
          
          <div className="service-view-more fade-in-on-scroll" style={{ transitionDelay: '1.0s' }}>
            <button 
              className="btn btn-primary view-more-btn"
              onClick={() => navigate(`/service/${activeTab}`)}
            >
              View Full Details <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

