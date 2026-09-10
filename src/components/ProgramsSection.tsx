import React, { useState } from 'react';
import {
  Dumbbell,
  Zap,
  Sparkles,
  UserCheck,
  Users,
  Flame,
  ArrowRight,
  Clock,
  Activity,
  CheckCircle2,
  X
} from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgramForTrial: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgramForTrial }) => {
  const [activeProgramModal, setActiveProgramModal] = useState<Program | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return Dumbbell;
      case 'Zap':
        return Zap;
      case 'Sparkles':
        return Sparkles;
      case 'UserCheck':
        return UserCheck;
      case 'Users':
        return Users;
      case 'Flame':
        return Flame;
      default:
        return Dumbbell;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Advanced':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default:
        return 'bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30';
    }
  };

  return (
    <section id="programs" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3.5 py-1 rounded-full border border-[#00D4FF]/20">
            Disciplines & Coaching
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Our Programs
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Engineered for measurable physical progression. Pick your discipline or cross-train across all six under world-class certified coaches.
          </p>
        </div>

        {/* 6 Program Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => {
            const IconComponent = getIcon(program.iconName);
            return (
              <div
                key={program.id}
                className="group relative bg-[#141414] hover:bg-[#1A1A1A] rounded-2xl border border-white/10 hover:border-[#00D4FF]/60 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex flex-col justify-between"
              >
                {/* Program Card Image Header with Dark Gradient Overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
                  
                  {/* Category & Difficulty Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-bold tracking-wider text-gray-300 uppercase border border-white/10">
                      {program.category}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase border backdrop-blur-md ${getDifficultyColor(
                        program.difficulty
                      )}`}
                    >
                      {program.difficulty}
                    </span>
                  </div>

                  {/* Icon floating */}
                  <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00D4FF] to-[#0077FF] flex items-center justify-center text-black shadow-lg shadow-[#00D4FF]/30 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-black text-2xl text-white group-hover:text-[#00D4FF] transition-colors">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300 line-clamp-3 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Quick Specs */}
                    <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#00D4FF]" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-rose-400" />
                        <span>{program.caloriesBurned}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect: Reveal "Learn More" button */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProgramModal(program)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/5 group-hover:bg-[#00D4FF] text-gray-200 group-hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Details Modal */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#141414] border border-[#00D4FF]/40 rounded-3xl overflow-hidden shadow-2xl">
            {/* Modal Image Banner */}
            <div className="relative h-48 sm:h-56">
              <img
                src={activeProgramModal.image}
                alt={activeProgramModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
              <button
                onClick={() => setActiveProgramModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-gray-300 hover:text-white border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span
                  className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${getDifficultyColor(
                    activeProgramModal.difficulty
                  )}`}
                >
                  {activeProgramModal.difficulty}
                </span>
                <h3 className="font-heading font-black text-3xl text-white mt-2">
                  {activeProgramModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {activeProgramModal.description}
              </p>

              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#00D4FF] mb-3">
                  Key Curriculum Highlights:
                </h4>
                <div className="space-y-2">
                  {activeProgramModal.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/10 text-xs text-gray-300">
                <div>
                  <span className="text-gray-500 block">Session Length:</span>
                  <span className="font-bold text-white text-sm">{activeProgramModal.duration}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Typical Burn:</span>
                  <span className="font-bold text-white text-sm">{activeProgramModal.caloriesBurned}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    const title = activeProgramModal.title;
                    setActiveProgramModal(null);
                    onSelectProgramForTrial(title);
                  }}
                  className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black font-heading font-extrabold text-sm uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition-all"
                >
                  Book Free Trial in this Class
                </button>
                <button
                  onClick={() => setActiveProgramModal(null)}
                  className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold text-sm border border-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
