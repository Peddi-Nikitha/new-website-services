import React from 'react'
import { FaAward, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Committed to delivering excellence in every project'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Team',
      description: 'Highly skilled and certified professionals'
    },
    {
      icon: <FaHandshake />,
      title: 'Trusted Partner',
      description: 'Building long-term relationships with clients'
    },
    {
      icon: <FaChartLine />,
      title: 'Quality Service',
      description: 'Maintaining highest standards in all operations'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Leading provider of professional manpower solutions and heavy equipment rental services
        </p>

        <div className="about-content">
          <div className="about-text">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" 
                alt="Construction team" 
                className="about-image"
              />
            </div>
            <h3>Mahdi Ahmed Hasan Al-Sheikh Contracting Est</h3>
            <p>
              We are a premier contracting establishment specializing in providing comprehensive 
              manpower solutions and heavy equipment rental services. With a commitment to excellence 
              and a focus on quality, we serve clients across various industries.
            </p>
            <p>
              Our team consists of highly skilled professionals, certified operators, and experienced 
              technicians who are dedicated to meeting and exceeding our clients' expectations. We 
              understand the importance of reliability, safety, and efficiency in every project we undertake.
            </p>
            <p>
              Whether you need skilled workers, heavy equipment, or professional support services, 
              we have the expertise and resources to deliver exceptional results.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

