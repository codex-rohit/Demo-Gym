import React from 'react';
import { Star, Flame, Trophy, CheckCircle, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

interface TestimonialsSectionProps {
  onStartJourney: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onStartJourney }) => {
  return (
    <section id="testimonials" className="py-24 bg-[#0F0F0F] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3.5 py-1 rounded-full border border-[#00D4FF]/20">
            Proven Metamorphosis
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Real Results from Real Members
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Real people, demanding careers, and life-altering transformations. Hear how our members redefined their physical and mental strength at DEMO.
          </p>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#171717] rounded-3xl border border-white/10 hover:border-[#00D4FF]/60 p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)] flex flex-col justify-between"
            >
              <div>
                {/* Before / After Split Image View */}
                <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black">
                  <div className="grid grid-cols-2 gap-1 h-56 sm:h-64">
                    {/* Before Image */}
                    <div className="relative overflow-hidden group/before">
                      <img
                        src={item.beforePhoto}
                        alt={`${item.name} Before Transformation`}
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-extrabold text-gray-300 uppercase tracking-wider border border-white/10">
                        Before
                      </span>
                    </div>

                    {/* After Image */}
                    <div className="relative overflow-hidden group/after">
                      <img
                        src={item.afterPhoto}
                        alt={`${item.name} After Transformation`}
                        className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#00D4FF] text-[11px] font-black text-black uppercase tracking-wider shadow-lg shadow-[#00D4FF]/30">
                        After DEMO
                      </span>
                    </div>
                  </div>

                  {/* Stat Badge Banner */}
                  <div className="bg-gradient-to-r from-[#171717] via-[#202020] to-[#171717] px-4 py-2.5 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-black text-[#00D4FF] tracking-wide">
                      <Trophy className="w-4 h-4 text-[#00D4FF]" />
                      <span>{item.statBadge}</span>
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {item.timeframe}
                    </span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#00D4FF] text-[#00D4FF]"
                    />
                  ))}
                  <span className="text-xs font-bold text-gray-400 ml-2">5.0 Verified Member</span>
                </div>

                {/* Story Quote (20-30 words) */}
                <blockquote className="text-sm sm:text-base text-gray-200 italic leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Member Meta */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {item.name} <span className="text-xs text-[#00D4FF] font-semibold">• Transformation</span>
                  </h3>
                  <div className="text-xs text-gray-400">
                    {item.title} • {item.city}
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                  {item.programUsed}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-950/30 via-[#141414] to-cyan-950/30 border border-[#00D4FF]/30 text-center max-w-3xl mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-[#00D4FF]/20 text-[#00D4FF] mx-auto flex items-center justify-center mb-4">
            <Flame className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
            Your Transformation Starts with Day One
          </h3>
          <p className="mt-2 text-sm text-gray-300 max-w-xl mx-auto">
            Stop waiting for the "perfect Monday". Join over 2,500 athletes who chose discipline and transformed their lives at DEMO.
          </p>
          <button
            onClick={onStartJourney}
            className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black font-heading font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(0,212,255,0.5)] inline-flex items-center gap-2"
          >
            <span>Start Your 7-Day Free Pass</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
