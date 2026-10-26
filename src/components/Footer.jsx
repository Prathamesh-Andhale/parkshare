import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { siteData } from '../data/siteData'
import { Mail, MapPin, ExternalLink, ShieldCheck, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-navy-light/40 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-light/50">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <Logo className="h-10 w-auto" whiteText={true} />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {siteData.startup.description}
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span>{siteData.startup.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                <a 
                  href={`mailto:${siteData.startup.contactEmail}`}
                  className="hover:text-teal transition-colors underline-offset-2 hover:underline"
                >
                  {siteData.startup.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Platform</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-teal transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="hover:text-teal transition-colors">How It Works</Link></li>
              <li><Link to="/business-model" className="hover:text-teal transition-colors">Business Model</Link></li>
              <li><Link to="/video" className="hover:text-teal transition-colors">Promotional Video</Link></li>
              <li><Link to="/contact" className="hover:text-teal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Documents & Team */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Documents</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/downloads" className="hover:text-teal transition-colors">Downloads Hub</Link></li>
              <li><Link to="/profile" className="hover:text-teal transition-colors">Startup Profile (A4)</Link></li>
              <li><Link to="/brochure" className="hover:text-teal transition-colors">Brochure (2-Page A4)</Link></li>
              <li><Link to="/about" className="hover:text-teal transition-colors">Founding Team</Link></li>
            </ul>
          </div>

          {/* Course & Institution */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Academic Venture</h4>
            <div className="bg-navy-dark/60 p-3.5 rounded-xl border border-navy-light/60 space-y-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5 text-teal font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>EIPR Exp 9: Venture</span>
              </div>
              <p>Sardar Patel Institute of Technology (SPIT), Andheri (W), Mumbai.</p>
              <p className="text-[10px] text-slate-400">S.Y. MCA Batch 2026–2027</p>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p className="font-medium text-slate-300">
              ParkShare is an academic startup project for the Entrepreneurship and IPR course, SPIT Mumbai.
            </p>
            <p className="text-[11px] mt-0.5 text-slate-400">
              Official URL: <a href={siteData.urls.liveUrl} className="text-teal hover:underline">{siteData.urls.liveUrl}</a>
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={siteData.urls.repoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-teal transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
            <span>•</span>
            <span>© {currentYear} ParkShare. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
