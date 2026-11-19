import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles,
  MapPin,
  CheckCircle2,
  Code2
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  // Typewriter effect for roles: "Full-Stack Developer", "MERN Stack Engineer", "Problem Solver"
  const roles = personal.roles || [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "Problem Solver"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-subtle-grid">
      
      {/* Soft glowing gradient blobs in background (blurred, subtle) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[480px] sm:h-[480px] bg-[#6366F1]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] bg-[#22D3EE]/12 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="lg:col-span-8 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Badge: "Open to internships" */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12121A] border border-white/[0.08] text-xs font-medium text-[#F5F5F7] mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span>{personal.internshipBadge || "Open to internships"}</span>
              <span className="text-white/20">•</span>
              <span className="text-[#A1A1AA] flex items-center gap-1 font-mono text-[11px]">
                <MapPin size={11} className="text-[#22D3EE]" />
                {personal.location}
              </span>
            </div>

            {/* Big Name at 56-72px on desktop */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-[#F5F5F7] tracking-tight leading-[1.08] mb-4">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Typing Role Line */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-[#A1A1AA]">
                A passionate{' '}
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-[#F5F5F7] ml-2 border-b-2 border-[#22D3EE] pb-0.5 inline-flex items-center">
                {currentText}
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-[#22D3EE] ml-1 animate-pulse" />
              </span>
            </div>

            {/* 2-Line Pitch */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mb-8">
              {personal.pitchLine1}<br className="hidden sm:inline" /> {personal.pitchLine2}
            </p>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* View Projects */}
              <button
                onClick={() => scrollTo('projects')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-accent text-white font-semibold text-sm tracking-wide shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              {/* Download Resume */}
              <a
                href={personal.resumeUrl}
                download="Bikesh_Sah_Resume.pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#12121A] hover:bg-[#181824] text-[#F5F5F7] font-semibold text-sm border border-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm"
              >
                <Download size={16} className="text-[#22D3EE]" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/5 border border-transparent hover:border-white/[0.08] font-medium text-sm transition-all"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* GitHub / LinkedIn / Email Icons */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] w-full sm:w-auto">
              <span className="text-xs uppercase tracking-wider text-[#A1A1AA] font-mono">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-[#12121A] text-[#A1A1AA] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 border border-white/[0.08] transition-all hover:-translate-y-0.5"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-[#12121A] text-[#A1A1AA] hover:text-[#6366F1] hover:border-[#6366F1]/40 border border-white/[0.08] transition-all hover:-translate-y-0.5"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email Bikesh"
                className="p-2.5 rounded-xl bg-[#12121A] text-[#A1A1AA] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 border border-white/[0.08] transition-all hover:-translate-y-0.5"
              >
                <Mail size={18} />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Profile Photo Placeholder in Gradient Ring */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative group">
              {/* Pulsing ambient glow behind ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#22D3EE] opacity-40 blur-xl group-hover:opacity-65 transition-opacity" />

              {/* Gradient Ring Wrapper */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-[3px] bg-gradient-to-tr from-[#6366F1] via-[#818CF8] to-[#22D3EE]">
                <div className="w-full h-full rounded-full bg-[#12121A] p-1 flex items-center justify-center overflow-hidden">
                  
                  {personal.profilePhoto ? (
                    <img 
                      src={personal.profilePhoto} 
                      alt={personal.name} 
                      className="w-full h-full rounded-full object-cover object-top" 
                    />
                  ) : (
                    /* Stylized Profile Avatar Placeholder */
                    <div className="w-full h-full rounded-full bg-[#0A0A0F] border border-white/[0.08] flex flex-col items-center justify-center p-4 text-center select-none">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6366F1]/20 to-[#22D3EE]/20 border border-[#22D3EE]/30 flex items-center justify-center mb-3">
                        <Code2 size={32} className="text-[#22D3EE]" />
                      </div>
                      <span className="font-heading font-bold text-lg text-[#F5F5F7] tracking-tight">
                        {personal.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#22D3EE] mt-0.5">
                        MERN Developer
                      </span>
                      <span className="mt-2 text-[10px] text-[#A1A1AA] bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                        Bangalore, IN
                      </span>
                    </div>
                  )}

                </div>
              </div>

              {/* Status Floating Pill */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#12121A] border border-white/[0.08] shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-medium text-[#F5F5F7]">Ready for Interviews</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
