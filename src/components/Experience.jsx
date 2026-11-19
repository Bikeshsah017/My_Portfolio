import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp,
  Building2
} from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121A] border border-white/[0.08] text-xs font-mono text-[#22D3EE] mb-4">
            <Briefcase size={13} />
            <span>03. EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F7] tracking-tight">
            Work Experience & <span className="gradient-text">Impact</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
            Production internship with quantifiable engineering performance enhancements.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full mx-auto mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical gradient timeline line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#6366F1] via-[#22D3EE]/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-[#12121A] border border-[#22D3EE]/40 items-center justify-center shadow-lg shadow-indigo-500/10">
                  <Building2 className="text-[#22D3EE]" size={24} />
                </div>

                {/* Main Experience Card */}
                <div className="flex-1 w-full premium-card p-6 sm:p-8">
                  
                  {/* Header: Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-heading font-bold text-xl text-[#F5F5F7]">
                          {exp.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium gradient-accent text-white">
                          {exp.type}
                        </span>
                      </div>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline mt-1"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs font-mono text-[#A1A1AA]">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A0A0F] border border-white/[0.06]">
                        <Calendar size={13} className="text-[#22D3EE]" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <MapPin size={11} className="text-[#A1A1AA]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points with Highlighted Metrics */}
                  <div className="mt-5 space-y-3.5">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#22D3EE] shrink-0 mt-0.5" />
                        <div className="text-sm text-[#A1A1AA] leading-relaxed">
                          <span>{item.text}</span>
                          {item.metric && (
                            <span className="inline-block ml-2 px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {item.metric}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                      Tools & Workflows
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#0A0A0F] text-[#F5F5F7] border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
