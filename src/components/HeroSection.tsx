import React, { useState } from 'react';
import { Play, ArrowRight, Star, ShieldCheck, MapPin, ChevronRight, Activity, Flame } from 'lucide-react';
import { CITIES } from '../data/gymData';

interface HeroSectionProps {
  onOpenTrialModal: () => void;
  onScrollToSection: (selector: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTrialModal,
  onScrollToSection,
}) => {
  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Dynamic Gym Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-90 contrast-110"
        >
          {/* Fast-loading, high-energy gym workout video */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-ropes-in-the-gym-40084-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-athletic-woman-exercising-in-the-gym-40082-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* 60% Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#0A0A0A]/65 backdrop-contrast-125" />

        {/* Radial Dark Vignette */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_#0A0A0A_95%] opacity-85" />
        
        {/* Subtle cyan/blue energetic gradient sweep */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00D4FF]/20 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        {/* Energy & Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#00D4FF]/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,212,255,0.2)] animate-pulse">
          <Flame className="w-4 h-4 text-[#00D4FF]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">
            India's Premier Athletic Training Club
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
          <span className="text-xs font-bold text-[#00D4FF] flex items-center gap-1">
            <MapPin className="w-3 h-3 inline" /> {selectedCity}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight text-white uppercase leading-[1.05] drop-shadow-2xl max-w-4xl mx-auto">
          Transform Your Body,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#60a5fa] drop-shadow-[0_0_35px_rgba(0,212,255,0.5)]">
            Build Your Future
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-normal max-w-2xl mx-auto tracking-wide">
          Premium Fitness Coaching in{' '}
          <span className="text-white font-semibold underline decoration-[#00D4FF] decoration-2 underline-offset-4">
            {selectedCity}, India
          </span>
          . Olympic lifting, high-intensity intervals, and world-class biomechanics.
        </p>

        {/* City Switcher Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
          <span className="text-xs text-gray-400 font-medium">Studio Locations:</span>
          {['Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad'].map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`text-xs px-3 py-1 rounded-full border transition-all ${
                selectedCity === city
                  ? 'bg-[#00D4FF] text-black font-bold border-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.5)]'
                  : 'bg-black/50 text-gray-300 border-white/10 hover:border-white/30'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary CTA: Start Your Free Trial */}
          <button
            id="hero-primary-cta"
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#00B4D8] to-[#0077FF] text-[#0A0A0A] font-heading font-black text-base uppercase tracking-wider shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:shadow-[0_0_45px_rgba(0,212,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </button>

          {/* Secondary CTA: View Classes */}
          <button
            id="hero-secondary-cta"
            onClick={() => onScrollToSection('#schedule')}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-base border border-white/20 hover:border-[#00D4FF]/60 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 group hover:text-[#00D4FF]"
          >
            <span>View Classes</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00D4FF]" />
          </button>
        </div>

        {/* Energy & Trust Highlights */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
              <Star className="w-5 h-5 fill-[#00D4FF] text-[#00D4FF]" />
            </div>
            <div>
              <div className="text-xl font-heading font-black text-white">4.9 / 5</div>
              <div className="text-xs text-gray-400">1,200+ Reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-heading font-black text-white">2,500+</div>
              <div className="text-xs text-gray-400">Active Athletes</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-heading font-black text-white">15+</div>
              <div className="text-xs text-gray-400">Master Coaches</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[#00D4FF]">
              <Flame className="w-5 h-5 text-[#00D4FF]" />
            </div>
            <div>
              <div className="text-xl font-heading font-black text-white">98%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
