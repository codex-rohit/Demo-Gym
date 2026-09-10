import React from 'react';
import { Award, Calendar, Instagram, CheckCircle } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import { Trainer } from '../types';

interface TrainersSectionProps {
  onBookTrainer: (trainer: Trainer) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onBookTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-[#0F0F0F] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3.5 py-1 rounded-full border border-[#00D4FF]/20">
            Elite Coaching Faculty
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Meet Our Coaches
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Certified practitioners who live and breathe performance. Every coach at DEMO brings a minimum of 8 years in competitive sports and clinical biomechanics.
          </p>
        </div>

        {/* 3 Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative bg-[#171717] rounded-3xl border border-white/10 hover:border-[#00D4FF]/60 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/20 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-bold text-[#00D4FF] shadow-lg">
                    {trainer.experience}
                  </span>
                </div>

                {/* Social handle tag */}
                {trainer.socialHandle && (
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-gray-300">
                    <Instagram className="w-3 h-3 text-[#00D4FF]" />
                    <span>{trainer.socialHandle}</span>
                  </div>
                )}
              </div>

              {/* Info Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00D4FF] uppercase tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{trainer.specialty}</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white group-hover:text-[#00D4FF] transition-colors">
                    {trainer.name}
                  </h3>

                  {/* Certification Pill */}
                  <div className="mt-2 text-xs font-semibold text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 inline-block">
                    {trainer.certification}
                  </div>

                  {/* Bio: 2-3 sentences */}
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {trainer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Action */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <button
                    onClick={() => onBookTrainer(trainer)}
                    className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#00D4FF] text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-[#00D4FF]/50 border border-white/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book 1-on-1 Session</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
