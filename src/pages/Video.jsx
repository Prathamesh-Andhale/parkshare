import React from 'react'
import SectionHeading from '../components/SectionHeading'
import VideoPlayer from '../components/VideoPlayer'

export default function Video() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* HEADER SECTION */}
      <section className="pt-12 sm:pt-16 pb-4 text-center max-w-4xl mx-auto px-4">
        <SectionHeading
          badge="Pitch Deck & Demo"
          title="ParkShare Promotional Video"
          subtitle="A short, non-technical promotional video showcasing our peer-to-peer parking solution for Greater Mumbai commuters."
        />
      </section>

      {/* VIDEO CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl overflow-hidden">
          <VideoPlayer />
        </div>
      </section>

      {/* VIDEO HIGHLIGHTS NOTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">01</span>
            <h4 className="font-bold text-navy text-sm mt-1">Problem Hook</h4>
            <p className="text-xs text-muted mt-1">Mumbai's 63% traffic congestion and curbside parking hunt.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">02</span>
            <h4 className="font-bold text-navy text-sm mt-1">Solution Demo</h4>
            <p className="text-xs text-muted mt-1">Transaction-gated location reveals and live photo-GPS proof.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">03</span>
            <h4 className="font-bold text-navy text-sm mt-1">Venture Model</h4>
            <p className="text-xs text-muted mt-1">15% commission take-rate and suburban Mumbai pilot rollout.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
