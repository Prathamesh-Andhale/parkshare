import React, { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import VideoPlayer from '../components/VideoPlayer'
import { siteData } from '../data/siteData'
import { Film, Sparkles, CheckCircle2, Play } from 'lucide-react'

export default function Video() {
  const [selectedVideo, setSelectedVideo] = useState('explainer')

  const currentVideoData = selectedVideo === 'explainer' 
    ? siteData.videos.explainer 
    : siteData.videos.teaser

  return (
    <div className="space-y-16 pb-20">
      
      {/* HEADER SECTION */}
      <section className="pt-12 sm:pt-16 pb-4 text-center max-w-4xl mx-auto px-4">
        <SectionHeading
          badge="Pitch Deck & Demos"
          title="ParkShare Video Showcase"
          subtitle="Explore our venture pitch media created for Experiment 9: Venture Creation under SPIT Mumbai's Entrepreneurship & IPR course."
        />

        {/* Video Switcher Tabs */}
        <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner">
          <button
            onClick={() => setSelectedVideo('explainer')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              selectedVideo === 'explainer'
                ? 'bg-white text-navy shadow-sm'
                : 'text-muted hover:text-navy'
            }`}
          >
            <Film className="w-4 h-4 text-teal" />
            <span>Full Product Explainer</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-bg text-teal">
              Walkthrough
            </span>
          </button>

          <button
            onClick={() => setSelectedVideo('teaser')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              selectedVideo === 'teaser'
                ? 'bg-white text-navy shadow-sm'
                : 'text-muted hover:text-navy'
            }`}
          >
            <Sparkles className="w-4 h-4 text-teal" />
            <span>Concept Teaser</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
              30 Sec
            </span>
          </button>
        </div>
      </section>

      {/* VIDEO CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl overflow-hidden space-y-4">
          <div className="px-2 pt-2 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal">
                {currentVideoData.badge}
              </span>
              <h3 className="text-lg font-bold text-navy mt-0.5">
                {currentVideoData.title}
              </h3>
              <p className="text-xs text-muted mt-0.5">
                {currentVideoData.subtitle}
              </p>
            </div>
          </div>

          <VideoPlayer
            key={selectedVideo}
            url={currentVideoData.url}
            title={currentVideoData.title}
            label={currentVideoData.badge}
          />
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
