import React from 'react'
import { Link } from 'react-router-dom'
import { Printer, ArrowLeft, Info } from 'lucide-react'

export default function PrintPage({ title, children }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-100 py-6 sm:py-10 print:p-0 print:bg-white">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto px-4 mb-6 no-print">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/downloads"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Back to Downloads"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-navy">{title}</h1>
              <p className="text-xs text-muted">A4 Printable Format · Press button to save as PDF</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="w-full sm:w-auto px-5 py-2.5 bg-teal hover:bg-teal-dark text-white rounded-xl text-xs font-bold shadow-md shadow-teal/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Download as PDF / Print
            </button>
          </div>
        </div>

        <div className="mt-2 text-[11px] text-muted flex items-center gap-1.5 px-2">
          <Info className="w-3.5 h-3.5 text-teal flex-shrink-0" />
          <span>Tip: In your browser print dialog, select <strong>Destination: Save as PDF</strong> and check <strong>Background graphics</strong>.</span>
        </div>
      </div>

      {/* Printable Sheet Container */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 print:p-0 print:max-w-none">
        {children}
      </div>
    </div>
  )
}
