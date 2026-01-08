import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import './App.css'

function App() {
  console.log('App component rendering')
  
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
