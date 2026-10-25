import React from 'react'
import { 
  Search, 
  CreditCard, 
  MapPin, 
  Camera, 
  Clock, 
  LogOut, 
  Receipt 
} from 'lucide-react'

const STEP_ICONS = [
  Search,
  CreditCard,
  MapPin,
  Camera,
  Clock,
  LogOut,
  Receipt
]

export default function Timeline({ steps }) {
  return (
    <div className="relative max-w-4xl mx-auto py-6">
      {/* Central line for desktop */}
      <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal via-navy/30 to-teal -translate-x-1/2" />

      {/* Left line for mobile */}
      <div className="md:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200" />

      <div className="space-y-8 md:space-y-12">
        {steps.map((item, idx) => {
          const IconComponent = STEP_ICONS[idx % STEP_ICONS.length]
          const isEven = idx % 2 === 0

          return (
            <div 
              key={item.step} 
              className={`relative flex items-start md:items-center ${
                isEven ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Content Card */}
              <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                <div className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all ${
                  isEven ? 'md:text-left' : 'md:text-left'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-bg text-teal">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Node / Pin */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-navy border-4 border-white shadow-md text-white flex items-center justify-center group hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 text-teal-light" />
                </div>
              </div>

              {/* Empty placeholder for grid balance on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
