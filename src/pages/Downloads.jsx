import React from 'react'
import SectionHeading from '../components/SectionHeading'
import DownloadCard from '../components/DownloadCard'
import { siteData } from '../data/siteData'
import { FileText, BookOpen, Layers, ShieldCheck, Printer, CheckCircle2 } from 'lucide-react'

export default function Downloads() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* HEADER SECTION */}
      <section className="pt-12 sm:pt-16 pb-4 text-center max-w-4xl mx-auto px-4">
        <SectionHeading
          badge="Official Documentation"
          title="Venture Downloads & Printable Collateral"
          subtitle="Access high-fidelity academic startup materials prepared for Sardar Patel Institute of Technology's Entrepreneurship and IPR course."
        />
      </section>

      {/* DOWNLOAD CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Startup Profile */}
          <DownloadCard
            title="Startup Profile"
            description="Comprehensive single-page executive overview including problem statement, Mumbai pilot roadmap, founding team, and venture abstract."
            route="/profile"
            pdfPath={siteData.urls.docs.startupProfilePdf}
            icon={FileText}
            badge="1 Page A4"
            actionText="Open & Print Profile"
          />

          {/* Card 2: Brochure */}
          <DownloadCard
            title="Startup Brochure"
            description="Two-page printable brochure outlining the driver and host value props, 4-step workflow, pricing, revenue model, and multi-year rollout roadmap."
            route="/brochure"
            pdfPath={siteData.urls.docs.brochurePdf}
            icon={BookOpen}
            badge="2 Pages A4"
            actionText="Open & Print Brochure"
          />

          {/* Card 3: Business Model Canvas */}
          <DownloadCard
            title="Business Model Canvas"
            description="Interactive 9-block business model canvas breakdown covering key partners, unit economics, cost structures, and competitive advantage."
            route="/business-model"
            pdfPath={siteData.urls.docs.bmcPdf}
            icon={Layers}
            badge="9 Blocks BMC"
            actionText="View Full Canvas"
          />

        </div>
      </section>

      {/* PRINT INSTRUCTIONS NOTICE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left space-y-4">
          <div className="flex items-center gap-2 text-navy font-bold text-base">
            <Printer className="w-5 h-5 text-teal" />
            <span>How to Save High-Resolution PDFs from Printable Pages</span>
          </div>
          
          <ul className="space-y-2 text-xs sm:text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>Click any document above to open its browser-rendered A4 layout.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>Click the <strong>Download as PDF / Print</strong> button at the top of the document.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>In the print dialog, change <strong>Destination</strong> to <em>Save as PDF</em>, choose <em>A4</em> size, and ensure <em>Background graphics</em> is checked.</span>
            </li>
          </ul>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Styling strictly tested for zero margin overflow and precise page breaks.</span>
            <span className="font-semibold text-teal">Print-Ready Engine</span>
          </div>
        </div>
      </section>

    </div>
  )
}
