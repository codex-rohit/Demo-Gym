import React, { useState } from 'react';
import { Calendar, Clock, User, Zap, AlertCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { SCHEDULE_DAYS, WEEKLY_CLASSES } from '../data/gymData';
import { ClassSession } from '../types';

interface ScheduleSectionProps {
  onReserveClass: (session: ClassSession) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onReserveClass }) => {
  const [activeDay, setActiveDay] = useState<typeof SCHEDULE_DAYS[number]>('Mon');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Strength', 'Cardio & HIIT', 'Yoga', 'Boxing', 'Group Fitness'];

  const filteredClasses = WEEKLY_CLASSES.filter((c) => {
    const matchesDay = c.day === activeDay;
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Beginner</span>;
      case 'Intermediate':
        return <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">Intermediate</span>;
      case 'Advanced':
        return <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30">Advanced</span>;
      default:
        return <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30">All Levels</span>;
    }
  };

  const getFullDayName = (day: string) => {
    const map: Record<string, string> = {
      Mon: 'Monday',
      Tue: 'Tuesday',
      Wed: 'Wednesday',
      Thu: 'Thursday',
      Fri: 'Friday',
      Sat: 'Saturday',
      Sun: 'Sunday',
    };
    return map[day] || day;
  };

  return (
    <section id="schedule" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3.5 py-1 rounded-full border border-[#00D4FF]/20">
            Real-Time Studio Timetable
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Weekly Class Schedule
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mx-auto mt-4 rounded-full" />
          {/* Explicit requirement: "Classes start at 6 AM, last class at 7 PM" */}
          <p className="mt-4 text-base sm:text-lg text-[#00D4FF] font-semibold flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 inline" />
            <span>Classes start at 6 AM, last class at 7 PM</span>
          </p>
          <p className="mt-1 text-sm text-gray-400">
            High-energy boutique batches capped at 16-20 members to ensure personalized form correction.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {SCHEDULE_DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-3 rounded-2xl font-heading font-bold text-sm uppercase tracking-wider transition-all duration-200 shrink-0 ${
                activeDay === day
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black shadow-[0_0_20px_rgba(0,212,255,0.5)] scale-105'
                  : 'bg-[#171717] text-gray-300 hover:text-white hover:bg-[#202020] border border-white/5'
              }`}
            >
              <span>{day}</span>
              <span className="block text-[10px] font-normal opacity-75">{getFullDayName(day).slice(0, 3)}</span>
            </button>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="mt-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF] font-semibold'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop Table Format (Hidden on Mobile) */}
        <div className="hidden md:block mt-8 bg-[#141414] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#1A1A1A] text-xs font-heading font-bold uppercase tracking-wider text-gray-400">
                <th className="py-4 px-6">Time</th>
                <th className="py-4 px-6">Class Name</th>
                <th className="py-4 px-6">Trainer</th>
                <th className="py-4 px-6">Difficulty</th>
                <th className="py-4 px-6">Availability</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {filteredClasses.length > 0 ? (
                filteredClasses.map((session) => (
                  <tr
                    key={session.id}
                    className="hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className="py-4 px-6 font-semibold text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#00D4FF]" />
                        <span>{session.time}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-heading font-bold text-base text-white group-hover:text-[#00D4FF] transition-colors">
                        {session.name}
                      </div>
                      <div className="text-xs text-gray-400">{session.category}</div>
                    </td>
                    <td className="py-4 px-6 text-gray-300 font-medium">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>{session.trainer}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{getDifficultyBadge(session.difficulty)}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                        <AlertCircle className="w-3 h-3" />
                        {session.spotsLeft} of {session.totalSpots} spots left
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => onReserveClass(session)}
                        className="px-4 py-2 rounded-xl bg-[#00D4FF] hover:bg-[#38bdf8] text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                      >
                        Reserve Spot
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-400">
                    No classes found for this category on {getFullDayName(activeDay)}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Vertical List Format (Mandated for Mobile) */}
        <div className="md:hidden mt-6 space-y-4">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((session) => (
              <div
                key={session.id}
                className="bg-[#141414] p-5 rounded-2xl border border-white/10 hover:border-[#00D4FF]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#00D4FF] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {session.time}
                    </span>
                    {getDifficultyBadge(session.difficulty)}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {session.name}
                  </h3>
                  <div className="text-xs text-gray-400 mt-0.5">{session.category}</div>

                  <div className="mt-3 flex items-center justify-between text-xs text-gray-300">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      <span>{session.trainer}</span>
                    </div>
                    <span className="text-amber-400 font-semibold">
                      {session.spotsLeft} spots left
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <button
                    onClick={() => onReserveClass(session)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Reserve Spot for {session.time.split('-')[0].trim()}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center bg-[#141414] rounded-2xl text-gray-400 text-sm">
              No classes found for this category on {getFullDayName(activeDay)}.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
