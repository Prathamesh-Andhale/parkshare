import React from 'react'
import { 
  Users, 
  Activity, 
  Key, 
  Sparkles, 
  HeartHandshake, 
  Share2, 
  UserCheck, 
  Wallet, 
  TrendingUp 
} from 'lucide-react'

export default function BmcGrid({ bmc }) {
  const blocks = [
    {
      key: 'keyPartners',
      data: bmc.keyPartners,
      icon: Users,
      badge: "Partners",
      color: "border-teal/30 hover:border-teal",
      colSpan: "lg:col-span-2",
    },
    {
      key: 'keyActivities',
      data: bmc.keyActivities,
      icon: Activity,
      badge: "Activities",
      color: "border-navy/20 hover:border-navy",
      colSpan: "lg:col-span-2",
    },
    {
      key: 'valuePropositions',
      data: bmc.valuePropositions,
      icon: Sparkles,
      badge: "Value Prop",
      color: "border-teal/50 bg-teal-bg/30 hover:border-teal",
      colSpan: "lg:col-span-2 lg:row-span-2",
      highlight: true
    },
    {
      key: 'customerRelationships',
      data: bmc.customerRelationships,
      icon: HeartHandshake,
      badge: "Relationships",
      color: "border-navy/20 hover:border-navy",
      colSpan: "lg:col-span-2",
    },
    {
      key: 'customerSegments',
      data: bmc.customerSegments,
      icon: UserCheck,
      badge: "Segments",
      color: "border-teal/30 hover:border-teal",
      colSpan: "lg:col-span-2",
    },
    {
      key: 'keyResources',
      data: bmc.keyResources,
      icon: Key,
      badge: "Resources",
      color: "border-navy/20 hover:border-navy",
      colSpan: "lg:col-span-2",
    },
    {
      key: 'channels',
      data: bmc.channels,
      icon: Share2,
      badge: "Channels",
      color: "border-navy/20 hover:border-navy",
      colSpan: "lg:col-span-2",
    },
    {
      key: 'costStructure',
      data: bmc.costStructure,
      icon: Wallet,
      badge: "Costs",
      color: "border-slate-300 hover:border-slate-400",
      colSpan: "lg:col-span-5",
    },
    {
      key: 'revenueStreams',
      data: bmc.revenueStreams,
      icon: TrendingUp,
      badge: "Revenue",
      color: "border-teal/40 bg-teal-bg/20 hover:border-teal",
      colSpan: "lg:col-span-5",
      highlight: true
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
      {blocks.map((block) => {
        const Icon = block.icon
        const itemData = block.data
        if (!itemData) return null

        return (
          <div
            key={block.key}
            className={`bg-white rounded-2xl p-5 border shadow-sm transition-all flex flex-col justify-between ${block.colSpan} ${block.color}`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-surface text-teal">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-navy text-sm">{itemData.title}</h3>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-slate-100 px-2 py-0.5 rounded">
                  {block.badge}
                </span>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {itemData.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
