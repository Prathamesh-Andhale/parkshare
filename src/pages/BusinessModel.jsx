import React from 'react'
import SectionHeading from '../components/SectionHeading'
import BmcGrid from '../components/BmcGrid'
import { siteData } from '../data/siteData'
import { 
  Calculator, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  Layers, 
  Building, 
  FileCheck 
} from 'lucide-react'

export default function BusinessModel() {
  return (
    <div className="space-y-20 pb-20">
      
      {/* HEADER SECTION */}
      <section className="pt-12 sm:pt-16 pb-4 text-center max-w-4xl mx-auto px-4">
        <SectionHeading
          badge="Venture Mechanics"
          title="Business Model & Monetization Architecture"
          subtitle="A comprehensive 9-block Business Model Canvas and unit economic projection designed for capital efficiency and frictionless peer-to-peer scaling."
        />
      </section>

      {/* 9-BLOCK BMC GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-teal" />
            <h3 className="font-bold text-navy text-sm sm:text-base">Business Model Canvas (9 Blocks)</h3>
          </div>
          <span className="text-xs text-muted">Academic Framework · Alexander Osterwalder Standard</span>
        </div>

        <BmcGrid bmc={siteData.bmc} />
      </section>

      {/* UNIT ECONOMICS & WHY DIFFERENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Unit Economics Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-bg text-teal flex items-center justify-center">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal bg-teal-bg px-2.5 py-0.5 rounded-full">
                  Unit Economics (Illustrative)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-1">Per-Booking Revenue Mechanics</h3>
              <p className="text-xs text-muted mb-6">
                Based on introductory Mumbai corridor pricing of ₹50/hour for an average 1.5-hour stay.
              </p>

              <div className="space-y-3 bg-surface p-5 rounded-2xl border border-slate-200 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600">Average Hourly Rate</span>
                  <span className="font-bold text-navy">{siteData.unitEconomics.hourlyRate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600">Average Duration Parked</span>
                  <span className="font-bold text-navy">{siteData.unitEconomics.avgDuration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600">Average Gross Booking Value</span>
                  <span className="font-bold text-navy">{siteData.unitEconomics.avgBookingValue}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-teal font-semibold">ParkShare Commission (Take Rate ~15%)</span>
                  <span className="font-bold text-teal">{siteData.unitEconomics.commissionPerBooking}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-600">Driver Convenience Fee</span>
                  <span className="font-bold text-navy">{siteData.unitEconomics.driverFee}</span>
                </div>
                <div className="flex justify-between pt-2 text-sm font-extrabold text-navy">
                  <span>Net Revenue per Booking</span>
                  <span className="text-teal">{siteData.unitEconomics.netRevenuePerBooking}</span>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-navy text-white text-xs space-y-1">
                <div className="flex justify-between font-bold text-teal-light">
                  <span>Target Monthly Scale:</span>
                  <span>{siteData.unitEconomics.monthlyVolumeTarget}</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>Projected Commission Revenue:</span>
                  <span className="font-bold text-white">{siteData.unitEconomics.projectedMonthlyRevenue}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-muted italic">
              *{siteData.unitEconomics.disclaimer}
            </p>
          </div>

          {/* Why ParkShare is Different */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-navy bg-slate-100 px-2.5 py-0.5 rounded-full">
                  Competitive Moat
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-1">Why ParkShare is Different</h3>
              <p className="text-xs text-muted mb-6">
                Engineered specifically to solve the social friction and trust deficits of private property sharing.
              </p>

              <div className="space-y-3.5">
                {siteData.differentiators.map((diff, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface border border-slate-100 text-left">
                    <h4 className="text-xs font-bold text-navy flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                      {diff.title}
                    </h4>
                    <p className="text-xs text-muted pl-5">{diff.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-teal flex items-center gap-2">
              <span>Zero hardware, 100% accountability</span>
            </div>
          </div>

        </div>
      </section>

      {/* COMPETITION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
          <SectionHeading
            badge="Market Landscape"
            title="Competitive Analysis"
            subtitle="Honest assessment of incumbent mobility solutions vs. ParkShare's peer-to-peer approach."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {siteData.competition.competitors.map((comp, idx) => (
              <div key={idx} className="bg-surface p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-navy">{comp.name}</h4>
                  <div className="mt-2 text-xs text-slate-700">
                    <strong className="text-slate-900 block text-[11px] uppercase tracking-wider text-muted mb-0.5">Core Focus</strong>
                    {comp.focus}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-amber-800 bg-amber-50/50 p-2 rounded">
                  <strong className="block text-[10px] uppercase text-amber-900">Limitation</strong>
                  {comp.limitation}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-teal-bg/60 border border-teal/20 text-xs text-slate-800 leading-relaxed flex items-center gap-3">
            <Building className="w-6 h-6 text-teal flex-shrink-0" />
            <div>
              <strong>ParkShare's Strategic Focus:</strong> {siteData.competition.ourEdge}
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC IP NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200/80 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 bg-amber-200 text-amber-900 rounded-xl flex-shrink-0">
            <FileCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Academic Intellectual Property Notice
            </h4>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
              {siteData.ipNote}
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
