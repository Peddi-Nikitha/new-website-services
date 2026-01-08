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
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions for all your manpower and equipment needs
        </p>

        <div className="services-tabs">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{services[key].icon}</span>
              <span className="tab-text">{services[key].title}</span>
            </button>
          ))}
        </div>

        <div className="services-cards">
          {Object.keys(services).map((key) => {
            const service = servicesData[key]
            return (
              <div 
                key={key} 
                className={`service-card ${activeTab === key ? 'active' : ''}`}
                onClick={() => navigate(`/service/${key}`)}
              >
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <div className="service-card-icon">{services[key].icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description.substring(0, 120)}...</p>
                  <button className="service-card-btn">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="services-content">
          {servicesData[activeTab] && servicesData[activeTab].categories ? (
            servicesData[activeTab].categories.map((category, catIndex) => (
              <div key={catIndex} className="service-category">
                <h3 className="category-title">{category.name}</h3>
                <div className="service-items-grid">
                  {category.items && category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="service-item-card"
                      onClick={() => navigate(`/service/${activeTab}`)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          navigate(`/service/${activeTab}`)
                        }
                      }}
                    >
                      <div className="service-item-icon-wrapper">
                        {getServiceIcon(item)}
                      </div>
                      <div className="service-item-content">
                        <span className="service-item-name">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div>Loading services...</div>
          )}
          
          <div className="service-view-more">
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

