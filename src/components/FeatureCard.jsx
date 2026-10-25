import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureCard({
  icon: Icon,
  badge,
  title,
  subtitle,
  description,
  className = ""
}) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-teal-bg text-teal flex items-center justify-center">
              <Icon className="w-6 h-6 stroke-[2]" />
            </div>
          )}
          {badge && (
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-navy mb-1">{title}</h3>
        {subtitle && (
          <p className="text-xs font-medium text-teal mb-3">{subtitle}</p>
        )}
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
