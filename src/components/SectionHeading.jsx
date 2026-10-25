import React from 'react'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  className = ""
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-bg text-teal border border-teal/20">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
