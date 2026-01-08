import React from 'react'
import {
  FaWrench, FaPlug, FaCog, FaTools, FaHammer, FaHardHat,
  FaTruck, FaCar, FaPaintRoller, FaIndustry,
  FaUserTie, FaClipboardCheck, FaShieldAlt, FaFileAlt,
  FaUser, FaUserCog, FaUserCheck, FaUserShield, FaUserGraduate,
  FaBuilding, FaRoad, FaWater,
  FaTachometerAlt, FaCogs, FaBolt, FaTree,
  FaAnchor, FaSprayCan, FaFire, FaArrowUp,
  FaSitemap, FaProjectDiagram, FaChartBar, FaCalculator,
  FaSearch, FaEye, FaCheckCircle, FaExclamationTriangle,
  FaIdCard, FaHandshake, FaHeadset, FaBriefcase, FaCube,
  FaFlask
} from 'react-icons/fa'

// Icon mapping for different service items
export const getServiceIcon = (itemName) => {
  const name = itemName.toLowerCase()
  
  // Technical & Skilled Workers
  if (name.includes('instrument')) return <FaTachometerAlt />
  if (name.includes('electric') || name.includes('e&i')) return <FaPlug />
  if (name.includes('cable')) return <FaBolt />
  if (name.includes('ac') || name.includes('hvac')) return <FaIndustry />
  if (name.includes('millwright') || name.includes('mechanic')) return <FaCog />
  if (name.includes('plumber')) return <FaWater />
  if (name.includes('pipe')) return <FaCogs />
  if (name.includes('structural') || name.includes('fabricator')) return <FaBuilding />
  if (name.includes('form worker') || name.includes('rebar')) return <FaHammer />
  if (name.includes('mason')) return <FaCube />
  if (name.includes('carpenter')) return <FaTools />
  if (name.includes('scaffold')) return <FaArrowUp />
  if (name.includes('rigger')) return <FaAnchor />
  if (name.includes('sand blaster') || name.includes('grinder')) return <FaSprayCan />
  if (name.includes('painter')) return <FaPaintRoller />
  if (name.includes('welder')) return <FaFire />
  
  // Operators & Drivers
  if (name.includes('crane operator') || name.includes('crane')) return <FaIndustry />
  if (name.includes('forklift')) return <FaTruck />
  if (name.includes('bobcat') || name.includes('excavator') || name.includes('loader')) return <FaIndustry />
  if (name.includes('operator')) return <FaUserCog />
  if (name.includes('driver')) return <FaCar />
  
  // General & Office Staff
  if (name.includes('admin') || name.includes('office')) return <FaBriefcase />
  if (name.includes('document')) return <FaFileAlt />
  if (name.includes('secretary')) return <FaHeadset />
  if (name.includes('labor')) return <FaHardHat />
  
  // Engineering & Management
  if (name.includes('manager') || name.includes('engineer')) return <FaUserTie />
  if (name.includes('planning')) return <FaProjectDiagram />
  if (name.includes('civil')) return <FaBuilding />
  if (name.includes('mechanical')) return <FaCog />
  if (name.includes('electrical')) return <FaBolt />
  if (name.includes('piping')) return <FaCogs />
  if (name.includes('quantity') || name.includes('surveyor')) return <FaCalculator />
  
  // QA/QC & Inspection
  if (name.includes('qa') || name.includes('qc') || name.includes('inspector')) return <FaSearch />
  if (name.includes('ndt')) return <FaEye />
  if (name.includes('welding')) return <FaFire />
  if (name.includes('painting') || name.includes('coating')) return <FaPaintRoller />
  
  // Supervision & Safety
  if (name.includes('commissioning')) return <FaCheckCircle />
  if (name.includes('hse') || name.includes('safety')) return <FaShieldAlt />
  if (name.includes('environmental')) return <FaTree />
  if (name.includes('permit')) return <FaIdCard />
  if (name.includes('supervisor') || name.includes('foreman')) return <FaUserShield />
  if (name.includes('hydrotest')) return <FaWater />
  
  // Equipment
  if (name.includes('loader') || name.includes('dozer') || name.includes('excavator')) return <FaIndustry />
  if (name.includes('compactor') || name.includes('grader')) return <FaRoad />
  if (name.includes('generator')) return <FaBolt />
  if (name.includes('compressor')) return <FaCog />
  if (name.includes('welding machine')) return <FaFire />
  if (name.includes('truck') || name.includes('dump')) return <FaTruck />
  if (name.includes('mixer') || name.includes('concrete')) return <FaIndustry />
  if (name.includes('bus') || name.includes('ambulance')) return <FaCar />
  if (name.includes('tanker') || name.includes('water')) return <FaWater />
  if (name.includes('oil') || name.includes('diesel') || name.includes('gasoline')) return <FaFlask />
  if (name.includes('manlift')) return <FaArrowUp />
  if (name.includes('prime mover')) return <FaTruck />
  
  // Default icon
  return <FaTools />
}

