import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Phone, Zap } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenTrialModal: (plan?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="DEMO Fitness Studio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D4FF] to-[#0077FF] flex items-center justify-center text-black shadow-lg shadow-[#00D4FF]/25 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-[#0A0A0A] stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl font-extrabold tracking-wider text-white">
                  DEMO
                </span>
                <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
              </div>
              <span className="text-[10px] tracking-widest font-semibold text-gray-400 block -mt-1 uppercase">
                FITNESS STUDIO • INDIA
              </span>
            </div>
          </a>

          {/* Quick Nav Desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors duration-200 tracking-wide hover:underline hover:underline-offset-8"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions on Right */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>+91 98765 43210</span>
            </a>

            {/* Sticky bold Join Now button */}
            <button
              id="nav-join-now-btn"
              onClick={() => onOpenTrialModal('Free Trial')}
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#00B4D8] to-[#0077FF] text-black font-heading font-extrabold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.7)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-black text-black" />
                Join Now
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-join-btn"
              onClick={() => onOpenTrialModal('Free Trial')}
              className="px-3.5 py-1.5 rounded-full bg-[#00D4FF] text-black font-heading font-bold text-xs uppercase shadow-md shadow-[#00D4FF]/30"
            >
              Join
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F0F0F] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] p-2.5 rounded-lg bg-white/5 active:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal('Free Trial');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black font-heading font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#00D4FF]/30"
            >
              <Zap className="w-4 h-4 fill-black text-black" />
              Start Your Free 7-Day Trial
            </button>
            <div className="flex items-center justify-between text-xs text-gray-400 px-1 pt-1">
              <span>📍 Indiranagar & Koramangala</span>
              <a href="tel:+919876543210" className="text-[#00D4FF] underline">
                Call Studio
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
