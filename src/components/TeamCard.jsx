import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, GraduationCap } from 'lucide-react'

export default function TeamCard({ member, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between ${className}`}
    >
      <div className="w-full flex flex-col items-center">
        {/* Avatar with initials */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-navy to-navy-light text-white flex items-center justify-center text-xl font-bold tracking-wider shadow-inner mb-4 border-2 border-white ring-4 ring-teal/10">
          {member.initials}
        </div>
        
        {/* Name and ID */}
        <h3 className="text-lg font-bold text-navy">{member.name}</h3>
        <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-teal">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Roll ID: {member.id}</span>
        </div>
        
        {/* Role */}
        <div className="mt-3 px-3 py-1 rounded-full bg-surface text-slate-700 text-xs font-medium border border-slate-200">
          {member.role}
        </div>

        {/* Short bio if available */}
        {member.bio && (
          <p className="mt-4 text-xs text-muted leading-relaxed">
            {member.bio}
          </p>
        )}
      </div>

      <div className="w-full pt-4 mt-4 border-t border-slate-100 flex items-center justify-center text-[11px] text-muted gap-1">
        <ShieldCheck className="w-3.5 h-3.5 text-teal" />
        <span>F.Y. MCA · SPIT Mumbai</span>
      </div>
    </motion.div>
  )
}
