import React from 'react';
import { Award, Zap, Users, CheckCircle2, Shield, HeartPulse } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Trainers',
      subtitle: 'Internationally Certified Coaches',
      description:
        'Our coaches hold elite credentials including CSCS®, ACSM, K11, and ACE. Every member receives precise biomechanical cueing, injury risk mitigation, and periodized training routines.',
      tag: 'World-Class Mentorship'
    },
    {
      icon: Zap,
      title: 'Modern Equipment',
      subtitle: 'Competition-Grade Gear',
      description:
        'Train on calibrated Eleiko Olympic barbells, Technogym biomechanics, Wattbikes, SkiErgs, and a 25-meter indoor sprint turf. We provide the tools world champions train with.',
      tag: 'Zero Queues • Pro Gear'
    },
    {
      icon: Users,
      title: 'Community Driven',
      subtitle: 'An Unstoppable Tribe',
      description:
        'Step into an electric atmosphere devoid of ego. High-energy partner circuits, Saturday run clubs, and supportive peers pushing you beyond your self-imposed limitations every day.',
      tag: 'Inclusive • High Energy'
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-t border-b border-white/5">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-full border border-[#00D4FF]/20">
            The DEMO Difference
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Why Choose Our Gym?
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            We built DEMO to disrupt generic corporate gyms in India. By fusing science-backed athletic conditioning with world-class hospitality, we turn beginners into dedicated lifters and athletes into champions.
          </p>
        </div>

        {/* 3 Benefit Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative bg-[#171717] hover:bg-[#1D1D1D] p-8 rounded-2xl border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-black transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-[#00D4FF] transition-colors">
                    {benefit.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#00D4FF]/80 uppercase tracking-wider mt-1 mb-3">
                    {benefit.subtitle}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                  <span>{benefit.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Paragraph & Facility Photos */}
        <div className="bg-[#141414] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Facility Photo with Badges */}
            <div className="lg:col-span-6 relative h-80 lg:h-[480px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt="DEMO Gym Clean Modern Training Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Facility badge */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  📍 14,000 Sq. Ft. Biomechanical Facility
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#00D4FF]/90 backdrop-blur-md text-xs font-extrabold text-black">
                  Eleiko & Technogym Certified
                </span>
              </div>
            </div>

            {/* Mission & Background Copy */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-3">
                <Shield className="w-4 h-4" />
                Our Heritage & Mission
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white tracking-tight leading-tight">
                Crafted for India's New Generation of Relentless Achievers
              </h3>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                Founded in Bengaluru, DEMO was born from a simple observation: conventional gyms focused on selling memberships you never used, packed into cramped basements with worn-out cables and unattended floors.
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                We designed DEMO from the ground up: soaring 18-foot ceilings, hospital-grade HEPA air purifiers, dedicated Olympic deadlift platforms, and certified coaches who know your name and your PRs. Whether you are shedding your first 10 kilos or preparing for a powerlifting meet, our studio gives you the environment to thrive.
              </p>

              {/* Bullet Features */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span>HEPA Air Filtration & Clean Air</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span>Infrared Sauna & Recovery Suite</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span>InBody 570 Body Scanner</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  <span>In-House Fuel & Protein Bar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
