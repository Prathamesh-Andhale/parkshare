import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import BusinessModel from './pages/BusinessModel'
import Downloads from './pages/Downloads'
import Video from './pages/Video'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Brochure from './pages/Brochure'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/brochure" element={<Brochure />} />
          {/* Catch-all redirects back to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
