import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  BarChart3, 
  ShieldAlert, 
  Activity,
  Sparkles
} from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121A] border border-white/[0.08] text-xs font-mono text-[#22D3EE] mb-4">
            <FolderGit2 size={13} />
            <span>04. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F7] tracking-tight">
            Production-Grade <span className="gradient-text">Software Systems</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
            Full-stack MERN engineering, machine learning classification, and real-time behavioral pipelines.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full mx-auto mt-4" />
        </div>

        {/* Large Project Cards */}
        <div className="space-y-12">
          {projects.map((project, idx) => {
            const isBotBarrier = project.id === 'botbarrier';

            return (
              <motion.article
                key={project.id}
                className="premium-card overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Details & Bullets */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Subtitle Badge & Title */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/5 text-[#22D3EE] border border-white/5">
                          {project.subtitle}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-[#818CF8] border border-indigo-500/20">
                          Production Ready
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F7] mb-3">
                        {project.title}
                      </h3>

                      {/* One-Line Summary */}
                      <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6 font-medium">
                        {project.summary}
                      </p>

                      {/* 3-4 Key Bullets with Verified Numbers */}
                      <div className="space-y-3 mb-6">
                        {project.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-[#22D3EE] shrink-0 mt-1" />
                            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0A0A0F] text-[#F5F5F7] border border-white/[0.08]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        {/* Live Demo Button */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-accent text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={14} />
                        </a>

                        {/* GitHub Repository Button */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A0A0F] hover:bg-white/5 text-[#F5F5F7] font-semibold text-xs sm:text-sm border border-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 transition-all"
                        >
                          <Github size={15} />
                          <span>GitHub</span>
                        </a>
                      </div>

                      <span className="text-[11px] font-mono text-[#A1A1AA]">
                        *Configurable in data/portfolio.js
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Key Metrics & System Telemetry Preview */}
                  <div className="lg:col-span-5 bg-[#0A0A0F]/90 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/[0.08] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/[0.08]">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                          Telemetry & Metrics
                        </span>
                        <span className="text-xs font-mono text-[#22D3EE] flex items-center gap-1">
                          <Activity size={12} />
                          Verified
                        </span>
                      </div>

                      {/* 4 Metric Chips */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.metrics.map((metric, mIdx) => (
                          <div 
                            key={mIdx}
                            className="p-3.5 rounded-xl bg-[#12121A] border border-white/[0.06] text-center"
                          >
                            <div className="text-xl sm:text-2xl font-black font-heading gradient-text">
                              {metric.value}
                            </div>
                            <div className="text-[11px] text-[#A1A1AA] font-medium leading-tight mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Visual Preview Box */}
                      {isBotBarrier ? (
                        <div className="p-4 rounded-xl bg-[#12121A] border border-white/[0.08] text-[#F5F5F7] font-mono text-xs space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] border-b border-white/[0.06] pb-2">
                            <span className="flex items-center gap-1.5 text-[#22D3EE] font-semibold">
                              <ShieldAlert size={14} /> Telemetry Stream
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-sans">
                              ONLINE
                            </span>
                          </div>
                          
                          <div className="space-y-1.5 text-[11px]">
                            <div className="flex justify-between">
                              <span className="text-[#A1A1AA]">Model Precision:</span>
                              <span className="text-emerald-400 font-bold">92% Accuracy</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#A1A1AA]">Session Stream:</span>
                              <span className="text-[#22D3EE]">1,000+ events/session</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#A1A1AA]">Anomaly Engine:</span>
                              <span className="text-[#F5F5F7]">Mouse & Keystroke Rhythm</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#A1A1AA]">Output:</span>
                              <span className="text-amber-400">Threat Scoring & Alerts</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-[#12121A] border border-white/[0.08] text-[#F5F5F7] font-mono text-xs space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] border-b border-white/[0.06] pb-2">
                            <span className="flex items-center gap-1.5 text-[#22D3EE] font-semibold">
                              <BarChart3 size={14} /> Real-Time Analytics
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/10 text-[#818CF8] font-sans">
                              MERN
                            </span>
                          </div>

                          <div className="space-y-1.5 text-[11px]">
                            <div className="flex justify-between">
                              <span className="text-[#A1A1AA]">Dashboards:</span>
                              <span className="text-[#F5F5F7]">4 Chart.js (Bar/Pie/Line/Doughnut)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#A1A1AA]">Capacity:</span>
                              <span className="text-[#22D3EE] font-bold">100+ Daily Transactions</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#A1A1AA]">Backend API:</span>
                              <span className="text-[#F5F5F7]">8 REST Endpoints in Express</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#A1A1AA]">Persistence:</span>
                              <span className="text-emerald-400">MongoDB with Validation</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/[0.08] text-[11px] text-[#A1A1AA] flex items-center justify-between">
                      <span>Full-Stack Architecture</span>
                      <span className="text-[#22D3EE] font-mono">Validated</span>
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
