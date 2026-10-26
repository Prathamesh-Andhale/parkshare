import React from 'react'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import { siteData } from '../data/siteData'
import { Compass, Eye, HeartHandshake, CheckCircle2, Award, Calendar } from 'lucide-react'

export default function About() {
  return (
    <div className="space-y-20 pb-20">
      
      {/* HEADER SECTION */}
      <section className="pt-12 sm:pt-16 pb-4 text-center max-w-4xl mx-auto px-4">
        <SectionHeading
          badge="Founders & Vision"
          title="Building Smarter, Shared Mobility for Urban India"
          subtitle="ParkShare was founded in 2026 by S.Y. MCA students (Batch 2026–2027) at Sardar Patel Institute of Technology (SPIT), Andheri, Mumbai, as part of the Entrepreneurship and IPR Venture Creation curriculum."
        />
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-bg text-teal flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal">Our Purpose</span>
              <h3 className="text-2xl font-bold text-navy mt-1 mb-4">Mission</h3>
              <p className="text-base text-muted leading-relaxed">
                {siteData.mission}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-teal flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Optimizing urban space utilization</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy">Long-term Goal</span>
              <h3 className="text-2xl font-bold text-navy mt-1 mb-4">Vision</h3>
              <p className="text-base text-muted leading-relaxed">
                {siteData.vision}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Starting with high-density Greater Mumbai corridors</span>
            </div>
          </div>

        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy via-navy to-navy-light rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-light bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
              Genesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Story</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
              {siteData.story}
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Executive Team"
          title="Meet the Founders"
          subtitle="Master of Computer Applications (MCA) Batch 2026–2027, Sardar Patel Institute of Technology, Mumbai."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Principles"
          title="Company Values"
          subtitle="The four foundational pillars supporting our marketplace ecosystem."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal-bg px-2.5 py-0.5 rounded">
                0{i + 1}
              </span>
              <h3 className="text-lg font-bold text-navy mt-3 mb-2">{v.name}</h3>
              <p className="text-xs text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MILESTONES ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Venture Trajectory"
          title="Project Milestones"
          subtitle="Structured academic venture creation from ideation to functioning platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {siteData.milestones.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-extrabold text-navy/30">{m.phase}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-bg text-teal">
                    {m.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{m.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
