import React from 'react'
import { Play, ExternalLink, Film, AlertCircle, Sparkles } from 'lucide-react'
import { siteData } from '../data/siteData'

export function parseVideoUrl(url) {
  if (!url || typeof url !== 'string') return null
  const clean = url.trim()
  if (!clean) return null

  // 1. Google Drive
  const driveFileMatch = clean.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  const driveIdMatch = clean.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (driveFileMatch && driveFileMatch[1]) {
    return {
      type: 'drive',
      id: driveFileMatch[1],
      embedUrl: `https://drive.google.com/file/d/${driveFileMatch[1]}/preview`,
      originalUrl: clean,
    }
  }
  if (driveIdMatch && driveIdMatch[1]) {
    return {
      type: 'drive',
      id: driveIdMatch[1],
      embedUrl: `https://drive.google.com/file/d/${driveIdMatch[1]}/preview`,
      originalUrl: clean,
    }
  }

  // 2. YouTube
  const ytMatch = clean.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube',
      id: ytMatch[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=0&rel=0`,
      originalUrl: clean,
    }
  }

  // 3. Direct video format
  if (/\.(mp4|webm|ogg)($|\?)/i.test(clean)) {
    return {
      type: 'video',
      embedUrl: clean,
      originalUrl: clean,
    }
  }

  // Fallback: if it's an alphanumeric ID (assume Google Drive ID)
  if (!clean.includes('/') && clean.length >= 20) {
    return {
      type: 'drive',
      id: clean,
      embedUrl: `https://drive.google.com/file/d/${clean}/preview`,
      originalUrl: `https://drive.google.com/file/d/${clean}/view`,
    }
  }

  return {
    type: 'unknown',
    embedUrl: clean,
    originalUrl: clean,
  }
}

export default function VideoPlayer({ url, title, label, className = "" }) {
  const targetUrl = url || siteData.urls.videoUrl || ""
  const videoInfo = parseVideoUrl(targetUrl)

  if (!videoInfo || !videoInfo.embedUrl) {
    return (
      <div className={`aspect-video w-full rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-dark text-white flex flex-col items-center justify-center p-8 text-center relative overflow-hidden border border-navy-light ${className}`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00969B_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-teal/20 text-teal-light border border-teal/30 mx-auto flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 fill-teal-light translate-x-0.5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Promotional Video Coming Soon
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our pitch video is currently being finalized. Once recorded, you can paste the video link into <code className="bg-white/10 px-1.5 py-0.5 rounded text-teal-light font-mono text-xs">src/data/siteData.js</code> to view it live here.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* 16:9 Player Window */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-800/80">
        {videoInfo.type === 'video' ? (
          <video
            src={videoInfo.embedUrl}
            controls
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={videoInfo.embedUrl}
            title={title || "ParkShare Video"}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>

      {/* Action and Info Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 px-1">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
          </span>
          <Film className="w-4 h-4 text-teal" />
          <span className="font-medium text-navy/80">
            {label || (videoInfo.type === 'drive' ? 'Google Drive Stream' : videoInfo.type === 'youtube' ? 'YouTube Stream' : 'Video Player')} · SPIT Mumbai Venture Creation
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={videoInfo.originalUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-navy hover:bg-navy-light text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm hover:scale-[1.02]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in Full Screen / Google Drive</span>
          </a>
        </div>
      </div>
    </div>
  )
}
