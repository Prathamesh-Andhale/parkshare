import React from 'react'
import PrintPage from '../components/PrintPage'
import Logo from '../components/Logo'
import { siteData } from '../data/siteData'
import { ExternalLink, MapPin, Mail, Globe, Video, BookOpen, ShieldCheck } from 'lucide-react'

export default function Profile() {
  const brochureLiveUrl = `${siteData.urls.liveUrl}#/brochure`

  return (
    <PrintPage title="ParkShare Startup Profile">
      {/* 
        A4 single-page sheet container. 
        On screen: card with padding and shadow. 
        On print: tight A4 page with high density so it fits exactly on 1 page! 
      */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg text-slate-800 print:p-0 print:border-none print:shadow-none print:rounded-none text-[11px] leading-[1.35]">
        
        {/* HEADER: Title & Logo */}
        <div className="border-b-2 border-navy pb-3 mb-3 flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold tracking-widest text-teal uppercase block">
              Academic Venture Creation · Experiment 9 (EIPR)
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-navy tracking-tight">
              STARTUP PROFILE
            </h1>
          </div>
          <div>
            <Logo className="h-10 w-auto" />
          </div>
        </div>

        {/* METADATA STRIP: Address, Website, Video, Brochure */}
        <div className="bg-surface rounded-xl p-3 border border-slate-200 mb-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px]">
          <div>
            <strong className="text-navy block">Address:</strong>
            <span className="text-slate-700">{siteData.startup.fullAddress}</span>
          </div>

          <div>
            <strong className="text-navy block">Website:</strong>
            <a 
              href={siteData.urls.liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-teal font-semibold hover:underline break-all"
            >
              {siteData.urls.liveUrl}
            </a>
          </div>

          <div>
            <strong className="text-navy block">Promotional Video:</strong>
            {siteData.urls.videoUrl ? (
              <a 
                href={siteData.urls.videoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-teal font-semibold hover:underline break-all"
              >
                {siteData.urls.videoUrl}
              </a>
            ) : (
              <span className="text-slate-500 italic">Available on video portal ({siteData.urls.liveUrl}#/video)</span>
            )}
          </div>

          <div>
            <strong className="text-navy block">Brochure:</strong>
            <a 
              href={brochureLiveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-teal font-semibold hover:underline break-all"
            >
              {brochureLiveUrl}
            </a>
          </div>
        </div>

        {/* ABSTRACT */}
        <div className="mb-3">
          <h2 className="text-xs font-bold text-navy uppercase tracking-wider mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Abstract
          </h2>
          <p className="text-slate-700 text-justify bg-teal-bg/30 p-2.5 rounded-lg border border-teal/15">
            ParkShare is a smart, reservable parking marketplace that connects drivers with authorized unused parking spaces. It shows only an approximate location until a refundable deposit is paid, verifies arrival and departure with live photo, GPS and timestamp, and bills for actual parking time.
          </p>
        </div>

        {/* STARTUP FORMATION & ABOUT US (TEAM CARDS) */}
        <div className="mb-3">
          <h2 className="text-xs font-bold text-navy uppercase tracking-wider mb-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Startup & Founding Team
          </h2>
          <p className="text-slate-600 mb-2">
            <strong>ParkShare</strong> was formed in 2026 by Prathamesh Andhale, Swapnil Bhiungade, Vedant Bhushette and Dev Tayade at Sardar Patel Institute of Technology (SPIT), Munshi Nagar, Andheri (West), Mumbai.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {siteData.team.map((member) => (
              <div 
                key={member.id} 
                className="bg-surface p-2 rounded-lg border border-slate-200 text-center"
              >
                <div className="text-[11px] font-bold text-navy">{member.name}</div>
                <div className="text-[9px] font-mono text-teal font-semibold">ID: {member.id}</div>
                <div className="text-[9px] text-slate-600 mt-0.5 font-medium">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* EXECUTIVE SUMMARY */}
        <div className="mb-3 bg-surface p-3 rounded-xl border border-slate-200">
          <h2 className="text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Executive Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[10px]">
            <div>
              <strong className="text-navy">Problem:</strong> Mumbai's 14.5L+ cars face acute parking deficits, wasting time/fuel in traffic, while thousands of residential driveways sit empty.
            </div>
            <div>
              <strong className="text-navy">Solution:</strong> A zero-hardware P2P marketplace unlocking idle private spots with transaction-gated privacy and photo/GPS timestamps.
            </div>
            <div>
              <strong className="text-navy">Target Customers:</strong> Urban commuters & visitors in dense corridors (demand); homeowners, societies & small businesses (supply).
            </div>
            <div>
              <strong className="text-navy">Revenue Model:</strong> ~15% commission per booking + driver service fees (projected ₹6.75L/month at 60k bookings).
            </div>
            <div>
              <strong className="text-navy">Greater Mumbai Pilot:</strong> 6-month launch in Andheri & BKC targeting 300–500 active spaces and 10,000 bookings.
            </div>
            <div>
              <strong className="text-navy">Key Differentiators:</strong> Escrow deposits, gated exact address reveal, actual-duration billing, tamper-proof proof trail.
            </div>
          </div>
        </div>

        {/* VISION, MISSION & VALUES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-200 text-[10px]">
          <div className="p-2 rounded-lg bg-teal-bg/20 border border-teal/10">
            <strong className="text-teal font-bold block uppercase text-[9px]">Company Vision</strong>
            <p className="text-slate-700 mt-0.5">{siteData.vision}</p>
          </div>

          <div className="p-2 rounded-lg bg-navy/5 border border-navy/10">
            <strong className="text-navy font-bold block uppercase text-[9px]">Company Mission</strong>
            <p className="text-slate-700 mt-0.5">{siteData.mission}</p>
          </div>

          <div className="p-2 rounded-lg bg-surface border border-slate-200">
            <strong className="text-navy font-bold block uppercase text-[9px]">Company Values</strong>
            <div className="mt-0.5 text-slate-700 font-medium">
              <strong>Trust:</strong> Two-way verified photo & GPS proof.<br />
              <strong>Privacy:</strong> Gated location unlock after deposit.<br />
              <strong>Fairness:</strong> Pay strictly for actual duration.<br />
              <strong>Convenience:</strong> Zero hardware needed.
            </div>
          </div>
        </div>

        {/* FOOTER SIGN-OFF */}
        <div className="mt-3 pt-2 border-t border-slate-200 flex justify-between items-center text-[9px] text-muted">
          <span>Sardar Patel Institute of Technology · Entrepreneurship & IPR Course (Experiment 9)</span>
          <span className="font-semibold text-teal">Official Startup Profile · 2026</span>
        </div>

      </div>
    </PrintPage>
  )
}
