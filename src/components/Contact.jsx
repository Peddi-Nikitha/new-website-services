import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title fade-in-on-scroll">Contact Us</h2>
        <p className="section-subtitle fade-in-on-scroll" style={{ transitionDelay: '0.1s' }}>
          Get in touch with us for your manpower and equipment needs
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card fade-in-left-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>Call us for immediate assistance</p>
              <a href="tel:+966XXXXXXXXX">+966 XX XXX XXXX</a>
            </div>

            <div className="info-card fade-in-left-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>Send us an email anytime</p>
              <a href="mailto:info@mahdicontracting.com">info@mahdicontracting.com</a>
            </div>

            <div className="info-card fade-in-left-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>Visit our office</p>
              <span>Saudi Arabia</span>
            </div>
          </div>

          <form className="contact-form fade-in-right-on-scroll" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit scale-in-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

