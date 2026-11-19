import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  ShieldCheck, 
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

export default function About() {
  const { summary, personal } = portfolioData;

  const factIcons = {
    Location: <MapPin className="text-[#22D3EE]" size={16} />,
    Education: <GraduationCap className="text-[#6366F1]" size={16} />,
    CGPA: <Award className="text-[#22D3EE]" size={16} />,
    Availability: <Briefcase className="text-[#6366F1]" size={16} />,
    'Core Focus': <Cpu className="text-[#22D3EE]" size={16} />,
    Training: <ShieldCheck className="text-[#6366F1]" size={16} />,
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121A] border border-white/[0.08] text-xs font-mono text-[#22D3EE] mb-4">
            <User size={13} />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F7] tracking-tight">
            Engineering High-Performance <span className="gradient-text">Web Applications</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full mx-auto mt-4" />
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {summary.statCards.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="premium-card p-6 flex flex-col items-center text-center justify-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="font-heading font-bold text-sm text-[#F5F5F7] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#A1A1AA]">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Story */}
          <motion.div 
            className="lg:col-span-7 premium-card p-6 sm:p-8 space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 pb-3 border-b border-white/[0.08]">
              <Sparkles size={18} className="text-[#22D3EE]" />
              <h3 className="font-heading font-bold text-lg text-[#F5F5F7]">
                Executive Summary
              </h3>
            </div>

            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {summary.bio}
            </p>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              My engineering approach emphasizes modular component design, type-safe API communication, efficient database querying, and robust authentication. Furthermore, having completed enterprise <span className="text-[#22D3EE] font-medium">SailPoint IdentityIQ</span> training, I possess architectural familiarity with IAM lifecycle management, compliance enforcement, and connector protocols (Active Directory, LDAP, JDBC, Web Services).
            </p>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A1A1AA]">
              <span>Current Status:</span>
              <span className="font-medium text-[#22D3EE] font-mono">
                {personal.internshipStatus || "Open for Full-Stack Internships"}
              </span>
            </div>
          </motion.div>

          {/* Quick Facts Card */}
          <motion.div 
            className="lg:col-span-5 premium-card p-6 sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.08]">
              <h3 className="font-heading font-bold text-lg text-[#F5F5F7]">
                Quick Facts
              </h3>
              <span className="text-xs font-mono text-[#22D3EE]">Bangalore, India</span>
            </div>

            <div className="space-y-3.5">
              {summary.quickFacts.map((fact, index) => (
                <div 
                  key={index}
                  className="p-3.5 rounded-xl bg-[#0A0A0F] border border-white/[0.06] flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/5 shrink-0 mt-0.5">
                    {factIcons[fact.label] || <Layers size={16} className="text-[#22D3EE]" />}
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-mono text-[#A1A1AA]">
                      {fact.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#F5F5F7] mt-0.5">
                      {fact.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
