import React from 'react'
import { FaHardHat, FaTools } from 'react-icons/fa'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <FaHardHat className="logo-icon-main" />
        <FaTools className="logo-icon-tools" />
      </div>
      <div className="logo-text">
        <h2 className="logo-title">Mahdi Ahmed Hasan Al-Sheikh Contracting Est</h2>
        <p className="logo-subtitle">Manpower & Heavy Equipments Consultancy</p>
      </div>
    </div>
  )
}

export default Logo

