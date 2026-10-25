import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import PhoneDemo from '../components/PhoneDemo'
import { siteData } from '../data/siteData'
import { ShieldCheck, PlusCircle, Calendar, Banknote, CheckCircle2 } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div className="space-y-20 pb-20">
      
      {/* HEADER SECTION */}
      <section className="pt-12 sm:pt-16 pb-6 text-center max-w-4xl mx-auto px-4">
        <SectionHeading
          badge="End-to-End Workflow"
          title="From Search to Departure: Seamless & Accountable"
          subtitle="ParkShare safeguards homeowner privacy and commuter convenience through a 7-step cryptographic reservation and live proof verification cycle."
        />
      </section>

      {/* 7-STEP TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Timeline steps={siteData.howItWorksSteps} />
      </section>

      {/* INTERACTIVE PROTOTYPE DEMO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-100 shadow-sm">
          <SectionHeading
            badge="Interactive Simulator"
            title="Experience the Mobile Driver App Live"
            subtitle="Walk through all 7 stages in this simulated interactive phone mockup. No real payments, cameras, or GPS required."
          />

          <div className="mt-8 flex justify-center">
            <PhoneDemo />
          </div>
        </div>
      </section>

      {/* FOR PROVIDERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl p-8 sm:p-14 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-light bg-navy-light/60 px-3.5 py-1 rounded-full border border-teal/20">
              Host Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-3 tracking-tight">
              Turn Your Idle Parking Slot into Monthly Income
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Monetize your vacant driveway, bungalow stilt, or society parking space with zero hardware and zero hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-navy-dark/60 rounded-2xl p-6 border border-navy-light/60 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal/20 text-teal-light flex items-center justify-center mb-4">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">1. List Your Space</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Submit basic space details, vehicle suitability (Compact, Sedan, SUV), and security gate entry notes. No smart locks or sensors required.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-light/50 text-[11px] text-teal-light">
                ✓ 3-minute self-onboarding
              </div>
            </div>

            <div className="bg-navy-dark/60 rounded-2xl p-6 border border-navy-light/60 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal/20 text-teal-light flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">2. Set Availability & Price</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Decide your hourly rate (typically ₹25–₹60/hr) and calendar schedule (e.g. Monday–Friday 9:00 AM to 6:30 PM, or full weekends).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-light/50 text-[11px] text-teal-light">
                ✓ You maintain 100% schedule control
              </div>
            </div>

            <div className="bg-navy-dark/60 rounded-2xl p-6 border border-navy-light/60 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal/20 text-teal-light flex items-center justify-center mb-4">
                  <Banknote className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">3. Get Paid Automatically</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Verified drivers park and leave with photo/GPS timestamp trails. Earnings are credited directly to your registered UPI ID weekly.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-light/50 text-[11px] text-teal-light">
                ✓ Automated weekly bank settlements
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
