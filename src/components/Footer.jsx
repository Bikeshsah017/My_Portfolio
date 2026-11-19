import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0A0F] py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl gradient-accent p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0A0A0F] rounded-[11px] flex items-center justify-center">
                <span className="font-heading font-bold text-xs tracking-tight text-white">
                  BS
                </span>
              </div>
            </div>
            <div className="text-xs text-[#A1A1AA]">
              © {new Date().getFullYear()} <span className="text-[#F5F5F7] font-medium">{personal.name}</span>. All rights reserved.
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-[#12121A] text-[#A1A1AA] hover:text-[#22D3EE] border border-white/[0.08] transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-[#12121A] text-[#A1A1AA] hover:text-[#6366F1] border border-white/[0.08] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email Bikesh"
              className="p-2.5 rounded-xl bg-[#12121A] text-[#A1A1AA] hover:text-[#22D3EE] border border-white/[0.08] transition-colors"
            >
              <Mail size={16} />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-[#12121A] text-[#A1A1AA] hover:text-white border border-white/[0.08] hover:border-white/20 transition-all flex items-center gap-1.5 text-xs font-mono ml-2"
            >
              <ArrowUp size={14} />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Minimal tagline */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A1A1AA]/60 gap-2 font-mono">
          <div>Built with React (Vite), Tailwind CSS & Framer Motion</div>
          <div>B.Tech CSE • Jain University • Bangalore</div>
        </div>
      </div>
    </footer>
  );
}
