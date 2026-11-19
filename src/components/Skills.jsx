import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Brain,
  Tag
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    'Languages': <Code className="text-[#22D3EE]" size={18} />,
    'Frontend': <Layout className="text-[#6366F1]" size={18} />,
    'Backend': <Server className="text-[#22D3EE]" size={18} />,
    'Database': <Database className="text-[#6366F1]" size={18} />,
    'Tools & Deployment': <Wrench className="text-[#22D3EE]" size={18} />,
    'AI & APIs': <Cpu className="text-[#6366F1]" size={18} />,
    'Concepts': <Brain className="text-[#22D3EE]" size={18} />,
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121A] border border-white/[0.08] text-xs font-mono text-[#22D3EE] mb-4">
            <Code size={13} />
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F7] tracking-tight">
            Comprehensive <span className="gradient-text">Skill Stack</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
            Production-tested technologies across frontend, backend, databases, cloud, and core CS fundamentals.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full mx-auto mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              className="premium-card p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      {categoryIcons[group.category] || <Tag size={18} className="text-[#22D3EE]" />}
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#F5F5F7]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#A1A1AA] bg-white/5 px-2 py-0.5 rounded-full">
                    {group.skills.length}
                  </span>
                </div>

                {/* Pill-Style Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#0A0A0F] text-[#F5F5F7] border border-white/[0.08] hover:border-[#22D3EE]/50 hover:text-[#22D3EE] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-[#A1A1AA]">
                <span className="font-mono">Hands-on verified</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
