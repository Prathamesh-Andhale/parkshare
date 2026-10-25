import React from 'react'
import SectionHeading from '../components/SectionHeading'
import { siteData } from '../data/siteData'
import { Play, Video as VideoIcon, ExternalLink, Sparkles, Clock, Film } from 'lucide-react'

export default function Video() {
  const rawUrl = siteData.urls.videoUrl?.trim() || ""

  // Extract Google Drive ID
  let videoId = null
  if (rawUrl) {
    const fileMatch = rawUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    const idMatch = rawUrl.match(/id=([a-zA-Z0-9_-]+)/)
    if (fileMatch && fileMatch[1]) {
      videoId = fileMatch[1]
    } else if (idMatch && idMatch[1]) {
      videoId = idMatch[1]
    } else if (!rawUrl.includes('/') && rawUrl.length > 10) {
      videoId = rawUrl
    }
  }

  const embedUrl = videoId ? `https://drive.google.com/file/d/${videoId}/preview` : null

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
          
          {embedUrl ? (
            <div className="space-y-4">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                <iframe
                  src={embedUrl}
                  title="ParkShare Promotional Video"
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-muted flex items-center gap-2">
                  <Film className="w-4 h-4 text-teal" />
                  <span>A short, non-technical promotional video</span>
                </div>

                <a
                  href={rawUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-navy hover:bg-navy-light text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open on Google Drive</span>
                </a>
              </div>
            </div>
          ) : (
            /* COMING SOON POLISHED PLACEHOLDER */
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-dark text-white flex flex-col items-center justify-center p-8 text-center relative overflow-hidden border border-navy-light">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00969B_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-teal/20 text-teal-light border border-teal/30 mx-auto flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 fill-teal-light translate-x-0.5" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Promotional Video Coming Soon
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our video pitch is currently being finalized. Once recorded, the Google Drive link can be pasted directly into <code className="bg-white/10 px-1.5 py-0.5 rounded text-teal-light font-mono text-xs">src/data/siteData.js</code>.
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-slate-300 font-medium">
                  <Clock className="w-3.5 h-3.5 text-teal-light" />
                  <span>A short, non-technical promotional video</span>
                </div>
              </div>
            </div>
          )}

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
