import React from 'react'
import { FaBuilding, FaCheckCircle, FaGlobe, FaUsers } from 'react-icons/fa'
import './Clients.css'

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'Saudi Electricity Company',
      logo: '/clients/client-1.svg'
    },
    {
      id: 2,
      name: 'Sinopec SIPC',
      logo: '/clients/client-2.svg'
    },
    {
      id: 3,
      name: 'SWCC',
      logo: '/clients/client-3.svg'
    },
    {
      id: 4,
      name: 'Sadara',
      logo: '/clients/client-4.svg'
    },
    {
      id: 5,
      name: 'SABIC',
      logo: '/clients/client-5.svg'
    },
    {
      id: 6,
      name: 'Aramco',
      logo: '/clients/client-6.svg'
    },
    {
      id: 7,
      name: 'Royal Commission',
      logo: '/clients/client-7.svg'
    },
    {
      id: 8,
      name: 'NEOM',
      logo: '/clients/client-8.svg'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '1000+', label: 'Projects Completed', icon: <FaCheckCircle /> },
    { number: '15+', label: 'Years Experience', icon: <FaBuilding /> },
    { number: '50+', label: 'Countries Served', icon: <FaGlobe /> }
  ]

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <h2 className="section-title fade-in-on-scroll">Our Clients & Partners</h2>
        <p className="section-subtitle fade-in-on-scroll" style={{ transitionDelay: '0.1s' }}>
          Trusted by leading companies and organizations across various industries
        </p>

        {/* Stats Section */}
        <div className="clients-stats fade-in-on-scroll" style={{ transitionDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card scale-in-on-scroll" style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Clients Section */}
        <div className="clients-about fade-in-on-scroll" style={{ transitionDelay: '0.4s' }}>
          <div className="clients-about-content">
            <h3>Our Valued Clients</h3>
            <p>
              Mahdi Ahmed Hasan Al-Sheikh Contracting Est has been privileged to serve a diverse range of 
              clients across multiple industries. Our commitment to excellence, reliability, and professional 
              service has earned us the trust of leading companies and organizations throughout the region.
            </p>
            <p>
              We take pride in building long-term partnerships with our clients, delivering quality manpower 
              solutions and heavy equipment services that meet and exceed their expectations. Our client 
              portfolio includes major construction companies, infrastructure developers, industrial 
              organizations, and government entities.
            </p>
          </div>
        </div>

        {/* Client Logos - Horizontal Row Layout (Like Reference) */}
        <div className="clients-logos-section fade-in-on-scroll" style={{ transitionDelay: '0.5s' }}>
          <div className="clients-logos-row">
            {clients.map((client, index) => (
              <div 
                key={client.id} 
                className="client-logo-frame scale-in-on-scroll" 
                style={{ transitionDelay: `${0.6 + index * 0.08}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="client-logo-image"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.src = `https://via.placeholder.com/200x120/f0f0f0/666666?text=${encodeURIComponent(client.name)}`
                    e.target.style.opacity = '0.5'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="clients-cta fade-in-on-scroll" style={{ transitionDelay: '0.8s' }}>
          <div className="clients-cta-content">
            <h3>Partner With Us</h3>
            <p>
              Join our growing list of satisfied clients. Let us help you achieve your project goals 
              with our professional manpower and equipment solutions.
            </p>
            <button 
              className="btn btn-primary" 
              onClick={() => {
                const contactElement = document.getElementById('contact')
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#contact'
                }
              }}
            >
              Become Our Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
