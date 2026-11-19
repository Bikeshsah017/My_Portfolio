import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo "BS" */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl gradient-accent p-[1px] flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0A0A0F] dark:bg-[#0A0A0F] rounded-[11px] flex items-center justify-center">
                <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-[#22D3EE] transition-colors">
                  BS
                </span>
              </div>
            </div>
            <span className="font-heading font-semibold text-sm tracking-tight hidden sm:inline-block text-[#F5F5F7] dark:text-[#F5F5F7]">
              Bikesh <span className="text-[#A1A1AA] font-normal">Sah</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-full bg-[#12121A]/80 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white font-semibold shadow-sm'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-xl bg-[#12121A] text-[#A1A1AA] hover:text-[#F5F5F7] border border-white/[0.08] hover:border-white/20 transition-colors"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* "Hire Me" Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl gradient-accent text-white text-xs font-semibold tracking-wide shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:opacity-95 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-2 rounded-xl bg-[#12121A] text-[#A1A1AA] border border-white/[0.08]"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-[#12121A] text-[#F5F5F7] border border-white/[0.08]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#12121A] border border-white/[0.08] shadow-2xl backdrop-blur-xl flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#A1A1AA] hover:text-white hover:bg-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {activeSection === link.href.substring(1) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                )}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-2.5 rounded-xl gradient-accent text-white text-sm font-semibold flex items-center justify-center gap-1.5"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
