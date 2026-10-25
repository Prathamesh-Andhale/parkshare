import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Printer, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react'

export default function DownloadCard({
  title,
  description,
  route,
  pdfPath,
  icon: Icon = FileText,
  badge = "A4 Document",
  actionText = "Open Printable Page"
}) {
  const [pdfExists, setPdfExists] = useState(false)

  useEffect(() => {
    if (pdfPath) {
      // Check if real PDF exists without breaking
      fetch(pdfPath, { method: 'HEAD' })
        .then(res => {
          if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
            setPdfExists(true)
          } else {
            setPdfExists(false)
          }
        })
        .catch(() => setPdfExists(false))
    }
  }, [pdfPath])

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-teal-bg text-teal flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
            {badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>
      </div>

      <div className="space-y-2 pt-4 border-t border-slate-100">
        {/* Main route button */}
        <Link
          to={route}
          className="w-full py-2.5 px-4 rounded-xl bg-navy hover:bg-navy-light text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Printer className="w-4 h-4 text-teal-light" />
          {actionText}
        </Link>

        {/* Real PDF link if file is detected, otherwise fallback information */}
        {pdfExists ? (
          <a
            href={pdfPath}
            download
            className="w-full py-2 px-4 rounded-xl bg-teal-bg hover:bg-teal/20 text-teal font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-teal/20"
          >
            <Download className="w-4 h-4" />
            Download Direct PDF
          </a>
        ) : (
          <div className="text-[11px] text-center text-muted flex items-center justify-center gap-1 py-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
            <span>Formatted for standard A4 printing</span>
          </div>
        )}
      </div>
    </div>
  )
}
