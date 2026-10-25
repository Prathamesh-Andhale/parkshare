import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { Menu, X, Play, FileDown } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About & Team' },
  { to: '/business-model', label: 'Business Model' },
  { to: '/downloads', label: 'Downloads' },
  { to: '/video', label: 'Video' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Do not show full navbar in print mode (handled in css, but good to reinforce)
  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/80 transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="ParkShare Home"
          >
            <Logo className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all
                  ${isActive 
                    ? 'text-teal bg-teal-bg/80' 
                    : 'text-navy/80 hover:text-navy hover:bg-slate-100'}
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/video"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-navy bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-teal fill-teal" />
              <span>Video</span>
            </Link>
            <Link
              to="/downloads"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-teal hover:bg-teal-dark shadow-sm transition-all flex items-center gap-1.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Downloads</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              to="/video"
              className="p-2 rounded-lg text-navy bg-slate-100 hover:bg-slate-200"
              aria-label="Watch video"
            >
              <Play className="w-4 h-4 text-teal fill-teal" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `
                block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors
                ${isActive 
                  ? 'text-teal bg-teal-bg font-bold' 
                  : 'text-slate-700 hover:text-navy hover:bg-slate-50'}
              `}
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 flex items-center justify-between"
            >
              <span>Startup Profile (A4)</span>
              <FileDown className="w-4 h-4 text-teal" />
            </Link>
            <Link
              to="/brochure"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 flex items-center justify-between"
            >
              <span>Brochure (2 Pages A4)</span>
              <FileDown className="w-4 h-4 text-teal" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
