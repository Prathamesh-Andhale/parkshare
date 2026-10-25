import React from 'react'

export default function Logo({ 
  className = "h-11", 
  iconOnly = false, 
  showTagline = true,
  whiteText = false 
}) {
  if (iconOnly) {
    return (
      <svg 
        viewBox="0 0 64 64" 
        className={className} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ParkShare Pin Logo"
      >
        {/* Top Arc with arrowhead */}
        <path d="M 17 38 A 22 22 0 0 1 47 18" stroke="#00969B" strokeWidth="3.5" strokeLinecap="round"/>
        <polygon points="45,11 53,17 45,23" fill="#00969B"/>
        
        {/* Bottom Arc with arrowhead */}
        <path d="M 47 26 A 22 22 0 0 1 17 46" stroke="#00969B" strokeWidth="3.5" strokeLinecap="round"/>
        <polygon points="19,53 11,47 19,41" fill="#00969B"/>

        {/* Navy Map Pin */}
        <path d="M 32 8 C 22.06 8 14 16.06 14 26 C 14 38.5 32 54 32 54 C 32 54 50 38.5 50 26 C 50 16.06 41.94 8 32 8 Z" fill="#12294A"/>
        
        {/* White Inner Circle */}
        <circle cx="32" cy="25" r="11" fill="#FFFFFF"/>
        
        {/* Bold Navy 'P' */}
        <text x="32" y="31" fontFamily="Poppins, Arial, sans-serif" fontWeight="800" fontSize="17" fill="#12294A" textAnchor="middle">P</text>
      </svg>
    )
  }

  return (
    <svg 
      viewBox="0 0 280 72" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ParkShare Logo - Share · Park · Go"
    >
      {/* Icon Group */}
      <g transform="translate(4, 4)">
        {/* Top Arc with arrowhead */}
        <path d="M 17 38 A 22 22 0 0 1 47 18" stroke="#00969B" strokeWidth="3" strokeLinecap="round"/>
        <polygon points="45,11 53,17 45,23" fill="#00969B"/>
        
        {/* Bottom Arc with arrowhead */}
        <path d="M 47 26 A 22 22 0 0 1 17 46" stroke="#00969B" strokeWidth="3" strokeLinecap="round"/>
        <polygon points="19,53 11,47 19,41" fill="#00969B"/>

        {/* Navy Map Pin */}
        <path d="M 32 8 C 22.06 8 14 16.06 14 26 C 14 38.5 32 54 32 54 C 32 54 50 38.5 50 26 C 50 16.06 41.94 8 32 8 Z" fill={whiteText ? "#FFFFFF" : "#12294A"}/>
        
        {/* White / Navy Inner Circle */}
        <circle cx="32" cy="25" r="11" fill={whiteText ? "#12294A" : "#FFFFFF"}/>
        
        {/* Bold Letter 'P' */}
        <text x="32" y="31.5" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="17" fill={whiteText ? "#FFFFFF" : "#12294A"} textAnchor="middle">P</text>
      </g>

      {/* Wordmark */}
      <g transform="translate(76, 12)">
        <text x="0" y="32" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="30" letterSpacing="-0.5">
          <tspan fill={whiteText ? "#FFFFFF" : "#12294A"}>PARK</tspan>
          <tspan fill="#00969B">SHARE</tspan>
        </text>
        
        {/* Thin Teal Line */}
        <line x1="0" y1="39" x2="192" y2="39" stroke="#00969B" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Spaced Tagline */}
        {showTagline && (
          <text 
            x="1" 
            y="50" 
            fontFamily="Poppins, sans-serif" 
            fontWeight="600" 
            fontSize="8.5" 
            fill={whiteText ? "#A5B4C4" : "#6B7785"} 
            letterSpacing="2.8"
          >
            SHARE · PARK · GO
          </text>
        )}
      </g>
    </svg>
  )
}
