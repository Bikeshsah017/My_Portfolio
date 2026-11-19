import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle,
  Key
} from 'lucide-react';

export default function EducationCertifications() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121A] border border-white/[0.08] text-xs font-mono text-[#22D3EE] mb-4">
            <GraduationCap size={13} />
            <span>05. EDUCATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F7] tracking-tight">
            Academic Background & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
            Rigorous Computer Science fundamentals alongside enterprise identity security training.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="text-[#22D3EE]" size={22} />
              <h3 className="font-heading font-bold text-xl text-[#F5F5F7]">
                Education
              </h3>
            </div>

            {education.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                className="premium-card p-6 sm:p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-white/[0.08]">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#F5F5F7]">
                      {edu.institution}
                    </h4>
                    <p className="text-sm font-semibold text-[#22D3EE] mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#A1A1AA] flex flex-wrap sm:flex-col sm:items-end gap-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#22D3EE]" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-white/5 text-[#F5F5F7] border border-white/10">
                    {edu.grade}
                  </span>
                  <span className="text-xs text-[#A1A1AA]">
                    Status: <strong className="text-[#F5F5F7] font-medium">{edu.status}</strong>
                  </span>
                </div>

                {edu.coursework && (
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-2 flex items-center gap-1.5">
                      <BookOpen size={12} className="text-[#22D3EE]" />
                      Relevant Coursework
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#0A0A0F] text-[#A1A1AA] border border-white/[0.06]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="text-[#6366F1]" size={22} />
              <h3 className="font-heading font-bold text-xl text-[#F5F5F7]">
                Certifications & Training
              </h3>
            </div>

            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                className="premium-card p-6 sm:p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex items-start justify-between gap-3 pb-3 mb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="text-[11px] font-mono text-[#22D3EE] uppercase tracking-wider mb-1">
                      Professional Program
                    </div>
                    <h4 className="font-heading font-bold text-lg text-[#F5F5F7]">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                      {cert.provider}
                    </p>
                  </div>
                  <span className="p-2 rounded-xl bg-white/5 text-[#22D3EE] border border-white/5 shrink-0">
                    <Key size={18} />
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Core Modules
                  </div>
                  <div className="space-y-1.5">
                    {cert.modules.map((mod) => (
                      <div key={mod} className="flex items-center gap-2 text-xs text-[#F5F5F7]">
                        <CheckCircle size={14} className="text-[#22D3EE] shrink-0" />
                        <span className="font-medium">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {cert.details}
                </p>

                <div className="pt-3 border-t border-white/[0.08]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                    Connectors & Integration Scope
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#0A0A0F] text-[#22D3EE] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
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
