import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const { personal, emailConfig } = portfolioData;
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [showConfigHelp, setShowConfigHelp] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    // Check if real EmailJS keys have been supplied
    const isConfigured = 
      emailConfig.serviceId && 
      emailConfig.serviceId !== 'service_placeholder' &&
      emailConfig.publicKey && 
      emailConfig.publicKey !== 'public_placeholder';

    if (isConfigured) {
      try {
        await emailjs.sendForm(
          emailConfig.serviceId,
          emailConfig.templateId,
          formRef.current,
          emailConfig.publicKey
        );
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        console.error('EmailJS Error:', err);
        setStatus('error');
        setErrorMessage('Failed to send message via EmailJS. Please contact directly via email.');
      }
    } else {
      // Automatic Fallback: open visitor's native email client pre-addressed to Bikesh Sah
      setTimeout(() => {
        const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
          `Internship Opportunity from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.open(mailtoUrl, '_blank');
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 600);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121A] border border-white/[0.08] text-xs font-mono text-[#22D3EE] mb-4">
            <Mail size={13} />
            <span>06. CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F7] tracking-tight">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
            Actively seeking a Full-Stack Developer internship in Bangalore or remote. Recruiters and engineering leads welcome!
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full mx-auto mt-4" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Short message, email, location, social links */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="premium-card p-6 sm:p-8">
              <h3 className="font-heading font-bold text-xl text-[#F5F5F7] mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                I am ready to bring full-stack MERN expertise and strong problem-solving skills to your development team.
              </p>

              {/* Email with copy button */}
              <div className="p-4 rounded-xl bg-[#0A0A0F] border border-white/[0.06] mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#22D3EE] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono uppercase text-[#A1A1AA]">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#F5F5F7] hover:text-[#22D3EE] truncate block font-mono"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#6366F1] text-[#A1A1AA] hover:text-white transition-colors shrink-0"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#0A0A0F] border border-white/[0.06] mb-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#6366F1] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#A1A1AA]">Phone Number</div>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-xs sm:text-sm font-semibold text-[#F5F5F7] hover:text-[#22D3EE] font-mono"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#0A0A0F] border border-white/[0.06] mb-6 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#22D3EE] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#A1A1AA]">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F5F5F7]">
                    {personal.location}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono uppercase text-[#A1A1AA] mb-3">
                  Online Presence
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0A0A0F] border border-white/[0.06] hover:border-[#6366F1]/50 flex items-center gap-2.5 text-xs font-medium text-[#F5F5F7] hover:text-[#22D3EE] transition-all"
                  >
                    <Linkedin size={16} className="text-[#6366F1]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#0A0A0F] border border-white/[0.06] hover:border-[#22D3EE]/50 flex items-center gap-2.5 text-xs font-medium text-[#F5F5F7] hover:text-[#22D3EE] transition-all"
                  >
                    <Github size={16} className="text-[#22D3EE]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Working Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="premium-card p-6 sm:p-8 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#F5F5F7]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Responses typically within 24 hours.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowConfigHelp(!showConfigHelp)}
                  className="text-xs font-mono text-[#22D3EE] flex items-center gap-1 hover:underline"
                  title="How this form works"
                >
                  <HelpCircle size={14} />
                  <span>Setup Guide</span>
                </button>
              </div>

              {/* Informative expandable callout */}
              {showConfigHelp && (
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#A1A1AA] space-y-2">
                  <div className="font-semibold text-[#22D3EE] flex items-center gap-1.5">
                    <Sparkles size={14} /> EmailJS Integration Instructions:
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-[#F5F5F7]">
                    <li>Sign up free at <strong>emailjs.com</strong>.</li>
                    <li>Add your Email Service (Gmail) and Template.</li>
                    <li>Paste your Service ID, Template ID, and Public Key into <code className="text-[#22D3EE]">src/data/portfolio.js</code>.</li>
                  </ol>
                  <p className="text-[11px] text-[#A1A1AA] italic">
                    *Default resilient fallback: If keys are unset, submitting automatically drafts the message in your mail client addressed to {personal.email}!
                  </p>
                </div>
              )}

              {/* Submission Alerts */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400 text-sm">
                  <Check size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Message dispatched!</div>
                    <div className="text-xs text-emerald-400/80 mt-0.5">
                      Thank you for reaching out. I look forward to connecting with you.
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-400 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Unable to send message</div>
                    <div className="text-xs text-rose-400/80 mt-0.5">{errorMessage}</div>
                  </div>
                </div>
              )}

              {/* Working Form: name, email, message */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-[#A1A1AA] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-white/[0.08] text-[#F5F5F7] placeholder-[#A1A1AA]/40 focus:outline-none focus:border-[#22D3EE] transition-colors text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-[#A1A1AA] mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-white/[0.08] text-[#F5F5F7] placeholder-[#A1A1AA]/40 focus:outline-none focus:border-[#22D3EE] transition-colors text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-[#A1A1AA] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Bikesh, we'd like to discuss a Full-Stack Developer internship opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0F] border border-white/[0.08] text-[#F5F5F7] placeholder-[#A1A1AA]/40 focus:outline-none focus:border-[#22D3EE] transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Button with accent gradient */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 px-6 rounded-xl gradient-accent text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
