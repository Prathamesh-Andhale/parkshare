import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Camera, 
  ArrowRight, 
  Play, 
  Car, 
  Building2, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  FileDown 
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import { siteData } from '../data/siteData'

export default function Home() {
  const valueIcons = [MapPin, ShieldCheck, Camera, Clock]

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-8 sm:pb-16 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal/15 to-navy/10 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-bg text-teal border border-teal/20 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span>Academic Startup · SPIT Mumbai Venture Creation</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto leading-tight sm:leading-[1.15]"
          >
            {siteData.startup.heroHeadline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            {siteData.startup.heroSubtext}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/how-it-works"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-teal hover:bg-teal-dark text-white font-bold text-sm shadow-lg shadow-teal/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/video"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-navy font-bold text-sm border border-slate-200 shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 text-teal fill-teal" />
              <span>Watch the Video</span>
            </Link>
          </motion.div>

          {/* Micro Tagline Pill */}
          <div className="mt-8 text-xs font-semibold text-muted tracking-widest uppercase">
            {siteData.startup.tagline}
          </div>

        </div>
      </section>

      {/* STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl p-8 sm:p-10 text-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-navy-light">
          {siteData.stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col justify-between ${idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-teal-light tracking-tight block">
                  {stat.value}
                </span>
                <h3 className="text-sm font-semibold text-white mt-1.5">{stat.label}</h3>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-light/60">
                <p className="text-[11px] text-slate-300 font-medium">{stat.source}</p>
                <p className="text-[10px] text-teal-light mt-0.5">{stat.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
          <SectionHeading
            badge="The Urban Challenge"
            title="Urban drivers waste hours searching for parking while private spaces sit idle."
            subtitle="The parking deficit in Indian metros creates congestion, excess carbon emissions, and daily commuter frustration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-rose-50/60 rounded-2xl p-6 sm:p-7 border border-rose-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">The Commuter's Daily Struggle</h3>
                <p className="text-sm text-muted leading-relaxed">
                  In Greater Mumbai alone, over 14.5 lakh registered cars compete for sparse authorized curbside parking. Drivers waste 20 to 35 minutes cruising blocks, burn expensive fuel, risk steep traffic towing fines, and contribute directly to 63.2% traffic congestion.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-rose-100/80 text-xs font-semibold text-rose-700">
                ● High fuel waste · towing anxiety · unpredictable pricing
              </div>
            </div>

            <div className="bg-amber-50/60 rounded-2xl p-6 sm:p-7 border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">The Unused Private Inventory</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Simultaneously, thousands of private residential driveways, standalone bungalow stilts, housing society visitor slots, and office spots remain completely vacant for 8 to 12 hours every working day without an easy, trustworthy mechanism to monetize them.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-100/80 text-xs font-semibold text-amber-800">
                ● Zero revenue from idle capacity · safety concerns without verified drivers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR VALUE PROPOSITIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Principles"
          title="Engineered for Trust, Privacy & Fairness"
          subtitle="ParkShare eliminates the risks of peer-to-peer parking through cryptographic location gating, refundable security deposits, and tamper-proof verification."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.valueCards.map((card, idx) => {
            const Icon = valueIcons[idx % valueIcons.length]
            return (
              <FeatureCard
                key={card.id}
                icon={Icon}
                badge={card.badge}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
              />
            )
          })}
        </div>
      </section>

      {/* TWO AUDIENCE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="A Balanced Marketplace"
          title="Tailored Value for Both Sides of the Street"
          subtitle="Drivers get guaranteed spots near their destination; providers earn hands-free revenue from dormant spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* For Drivers */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-bg text-teal flex items-center justify-center mb-5">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy">{siteData.audiences.drivers.title}</h3>
              <p className="text-sm text-teal font-medium mt-1 mb-6">{siteData.audiences.drivers.subtitle}</p>

              <ul className="space-y-3.5 text-sm text-muted">
                {siteData.audiences.drivers.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:text-teal-dark uppercase tracking-wider"
              >
                <span>Explore the Driver Flow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* For Parking Providers */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy">{siteData.audiences.providers.title}</h3>
              <p className="text-sm text-navy font-medium mt-1 mb-6">{siteData.audiences.providers.subtitle}</p>

              <ul className="space-y-3.5 text-sm text-muted">
                {siteData.audiences.providers.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <Link
                to="/business-model"
                className="inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-teal uppercase tracking-wider"
              >
                <span>View Provider Unit Economics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy via-navy to-navy-light rounded-3xl p-8 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-light bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
              Download Startup Collateral
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
              Review our Startup Profile, Venture Pitch & Business Model Canvas
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Access official printable A4 documents created for Experiment 9: Venture Creation under the Entrepreneurship & IPR course at SPIT Mumbai.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/downloads"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-teal hover:bg-teal-dark text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <FileDown className="w-4 h-4" />
                <span>Go to Downloads Hub</span>
              </Link>
              <Link
                to="/profile"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>View Startup Profile (A4)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
