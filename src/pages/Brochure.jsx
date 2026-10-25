import React from 'react'
import PrintPage from '../components/PrintPage'
import Logo from '../components/Logo'
import { siteData } from '../data/siteData'
import { 
  Search, 
  CreditCard, 
  Camera, 
  Receipt, 
  Car, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Clock 
} from 'lucide-react'

export default function Brochure() {
  return (
    <PrintPage title="ParkShare Startup Brochure (2-Page A4)">
      
      {/* ========================================================
          PAGE 1 (Printable A4 Sheet 1)
          ======================================================== */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg text-slate-800 print:p-0 print:border-none print:shadow-none print:rounded-none mb-8 print:mb-0 avoid-break text-[11px] leading-[1.38]">
        
        {/* Header */}
        <div className="border-b-2 border-navy pb-3 mb-4 flex items-center justify-between">
          <div>
            <Logo className="h-10 sm:h-12 w-auto" />
            <div className="text-[9px] font-bold tracking-widest text-teal uppercase mt-1">
              {siteData.startup.tagline}
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-bold text-navy bg-surface px-2.5 py-1 rounded border border-slate-200 uppercase">
              Venture Overview · Page 1 of 2
            </span>
            <div className="text-[9px] text-muted mt-1">SPIT Mumbai EIPR Project</div>
          </div>
        </div>

        {/* Hero Tagline & Introduction */}
        <div className="bg-gradient-to-r from-navy to-navy-light text-white p-4 rounded-2xl mb-4 shadow-sm">
          <h1 className="text-base sm:text-lg font-extrabold leading-snug">
            {siteData.startup.heroHeadline}
          </h1>
          <p className="text-xs text-slate-200 mt-1 leading-relaxed">
            {siteData.startup.heroSubtext}
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {/* Problem */}
          <div className="bg-rose-50/70 p-3.5 rounded-xl border border-rose-100">
            <div className="text-[10px] font-bold text-rose-700 uppercase tracking-wider mb-1">
              The Urban Parking Crisis
            </div>
            <h3 className="text-xs font-bold text-navy mb-1.5">Problem</h3>
            <p className="text-slate-700 text-[10px] leading-relaxed">
              Mumbai has 14.5L+ cars and 63.2% traffic congestion. Drivers waste 20–35 minutes circling for legal parking, burning fuel and causing gridlock. Meanwhile, thousands of private stilts and driveways sit idle during work hours with no trusted sharing mechanism.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-teal-bg/60 p-3.5 rounded-xl border border-teal/20">
            <div className="text-[10px] font-bold text-teal uppercase tracking-wider mb-1">
              The ParkShare Solution
            </div>
            <h3 className="text-xs font-bold text-navy mb-1.5">Solution</h3>
            <p className="text-slate-700 text-[10px] leading-relaxed">
              A peer-to-peer marketplace that safely unlocks idle private capacity. We reveal exact locations only after a refundable deposit, capture live photo/GPS proof upon arrival and departure, and meter fees by actual duration without hardware sensors.
            </p>
          </div>
        </div>

        {/* How It Works in 4 Icon Steps */}
        <div className="mb-4 bg-surface p-3.5 rounded-xl border border-slate-200">
          <div className="text-[10px] font-bold text-navy uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span>How It Works (4 Simple Steps)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
              <div className="w-8 h-8 rounded-lg bg-teal-bg text-teal mx-auto flex items-center justify-center mb-1.5">
                <Search className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-navy">1. Search & Select</div>
              <p className="text-[9px] text-muted mt-0.5">Browse verified spaces by approximate distance & hourly rate.</p>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
              <div className="w-8 h-8 rounded-lg bg-teal-bg text-teal mx-auto flex items-center justify-center mb-1.5">
                <CreditCard className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-navy">2. Deposit & Reveal</div>
              <p className="text-[9px] text-muted mt-0.5">Pay ₹300–₹500 refundable deposit to unlock exact building & navigation.</p>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
              <div className="w-8 h-8 rounded-lg bg-teal-bg text-teal mx-auto flex items-center justify-center mb-1.5">
                <Camera className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-navy">3. Live Proof Arrival</div>
              <p className="text-[9px] text-muted mt-0.5">Snap arrival photo; timestamp & GPS auto-start the session timer.</p>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
              <div className="w-8 h-8 rounded-lg bg-teal-bg text-teal mx-auto flex items-center justify-center mb-1.5">
                <Receipt className="w-4 h-4" />
              </div>
              <div className="text-[10px] font-bold text-navy">4. Pay & Refund</div>
              <p className="text-[9px] text-muted mt-0.5">Depart with clean photo; deposit returns; pay only for actual duration.</p>
            </div>
          </div>
        </div>

        {/* Key Benefits for Drivers & Providers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {/* For Drivers */}
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-1.5 font-bold text-navy text-xs mb-2">
              <Car className="w-4 h-4 text-teal" />
              <span>Key Benefits for Drivers</span>
            </div>
            <ul className="space-y-1.5 text-[10px] text-slate-700">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                <span><strong>Guaranteed parking:</strong> Reserved spot before arriving at dense Mumbai hubs.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                <span><strong>Fair metering:</strong> Pay down to the actual minute without unfair rounding.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                <span><strong>Vehicle safety:</strong> Gated private parking eliminates towing risks.</span>
              </li>
            </ul>
          </div>

          {/* For Providers */}
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-1.5 font-bold text-navy text-xs mb-2">
              <Building2 className="w-4 h-4 text-teal" />
              <span>Key Benefits for Providers</span>
            </div>
            <ul className="space-y-1.5 text-[10px] text-slate-700">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                <span><strong>Passive earnings:</strong> Monetize dormant slots without hardware or sensors.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                <span><strong>Privacy protected:</strong> Exact home address hidden until deposit is held.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                <span><strong>Vetted users:</strong> Identity-verified drivers with photo timestamps.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Page 1 Footer */}
        <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-[9px] text-muted">
          <span>ParkShare · Peer-to-Peer Mobility Platform</span>
          <span className="font-semibold text-teal">Page 1 of 2</span>
        </div>

      </div>

      {/* PAGE BREAK FOR PRINT */}
      <div className="page-break" />

      {/* ========================================================
          PAGE 2 (Printable A4 Sheet 2)
          ======================================================== */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg text-slate-800 print:p-0 print:border-none print:shadow-none print:rounded-none avoid-break text-[11px] leading-[1.38]">
        
        {/* Header */}
        <div className="border-b-2 border-navy pb-3 mb-4 flex items-center justify-between">
          <div>
            <Logo className="h-10 sm:h-12 w-auto" />
            <div className="text-[9px] font-bold tracking-widest text-teal uppercase mt-1">
              Economics & Strategy
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-bold text-navy bg-surface px-2.5 py-1 rounded border border-slate-200 uppercase">
              Venture Overview · Page 2 of 2
            </span>
            <div className="text-[9px] text-muted mt-1">SPIT Mumbai EIPR Project</div>
          </div>
        </div>

        {/* Business Model Summary & Pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          
          <div className="bg-surface p-3.5 rounded-xl border border-slate-200">
            <div className="text-[10px] font-bold text-navy uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>Business Model Summary</span>
            </div>
            <p className="text-slate-700 text-[10px] leading-relaxed">
              Two-sided aggregator charging a <strong>~15% marketplace commission</strong> on completed bookings plus nominal driver platform convenience fees. Providers retain 85% of earnings with direct automated UPI settlements.
            </p>
          </div>

          <div className="bg-teal-bg/40 p-3.5 rounded-xl border border-teal/20">
            <div className="text-[10px] font-bold text-teal uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Pricing & Revenue Metrics</span>
            </div>
            <div className="space-y-1 text-[10px] text-slate-800 font-medium">
              <div>• <strong>Hourly Pricing:</strong> ₹25 to ₹60 / hour (corridor-based)</div>
              <div>• <strong>Commission:</strong> ~15% take-rate per transaction</div>
              <div>• <strong>Refundable Deposit:</strong> ₹300 to ₹500 security escrow hold</div>
            </div>
          </div>

        </div>

        {/* Pilot Roadmap */}
        <div className="mb-4 bg-surface p-3.5 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal" />
              <span>Pilot & Scale Roadmap</span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wide bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
              *Targets, not forecasts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
            {siteData.roadmap.map((stage, idx) => (
              <div key={idx} className="bg-white p-2.5 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between">
                  <strong className="text-teal font-bold">{stage.period}: {stage.milestone}</strong>
                </div>
                <p className="text-slate-600 mt-1 text-[9px] leading-relaxed">{stage.target}</p>
              </div>
            ))}
          </div>
          <p className="text-[8.5px] text-muted italic mt-2">
            Note: All roadmap phases, target slots, and volumes are operational goals set for the venture creation exercise and subject to pilot validation.
          </p>
        </div>

        {/* The Team */}
        <div className="mb-4">
          <div className="text-[10px] font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span>Founding Team (S.Y. MCA, SPIT Mumbai)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            {siteData.team.map((m) => (
              <div key={m.id} className="bg-surface p-2 rounded-lg border border-slate-200 flex flex-col items-center">
                {m.image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${m.image}`}
                    alt={m.name}
                    className="w-10 h-10 rounded-full object-cover object-top mb-1 border border-white shadow-xs"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center mb-1">
                    {m.initials}
                  </div>
                )}
                <div className="text-[10px] font-bold text-navy leading-tight">{m.name}</div>
                <div className="text-[8.5px] font-mono text-teal font-semibold">ID: {m.id}</div>
                <div className="text-[8.5px] text-slate-600 mt-0.5 leading-tight">{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Links & Contact */}
        <div className="bg-navy text-white p-3.5 rounded-xl border border-navy-light flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-teal-light font-bold">
              <Globe className="w-3.5 h-3.5" />
              <span>Official Website:</span>
            </div>
            <a 
              href={siteData.urls.liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-teal-light underline break-all block"
            >
              {siteData.urls.liveUrl}
            </a>
          </div>

          <div className="space-y-1 text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-end gap-1.5 text-teal-light font-bold">
              <Mail className="w-3.5 h-3.5" />
              <span>Public Contact Email:</span>
            </div>
            <a 
              href={`mailto:${siteData.startup.contactEmail}`}
              className="text-white hover:text-teal-light underline block"
            >
              {siteData.startup.contactEmail}
            </a>
          </div>
        </div>

        {/* Page 2 Footer Sign-off */}
        <div className="mt-4 pt-2 border-t border-slate-200 flex justify-between items-center text-[9px] text-muted">
          <span>Sardar Patel Institute of Technology · Munshi Nagar, Andheri (West), Mumbai 400058</span>
          <span className="font-semibold text-teal">Page 2 of 2</span>
        </div>

      </div>

    </PrintPage>
  )
}
