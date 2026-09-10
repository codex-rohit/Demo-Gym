/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TrainersSection } from './components/TrainersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { TrialModal, ReserveClassModal } from './components/Modals';
import { ClassSession, PricingPlan, Trainer } from './types';
import { MessageCircle, Phone, Zap } from 'lucide-react';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string>('Free 7-Day Trial Pass');
  const [selectedClassSession, setSelectedClassSession] = useState<ClassSession | null>(null);

  const handleOpenTrialModal = (plan?: string) => {
    setSelectedPlanName(plan || 'Free 7-Day Trial Pass');
    setTrialModalOpen(true);
  };

  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgramForTrial = (programTitle: string) => {
    setSelectedPlanName(`${programTitle} Class Pass`);
    setTrialModalOpen(true);
  };

  const handleBookTrainer = (trainer: Trainer) => {
    setSelectedPlanName(`1-on-1 Consultation with Coach ${trainer.name}`);
    setTrialModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanName(`${plan.name} Membership Plan`);
    setTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#00D4FF] selection:text-black">
      {/* 1. STICKY NAVIGATION */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      <main className="flex-1">
        {/* 2. HERO VIDEO SECTION (Full-width, dynamic) */}
        <HeroSection
          onOpenTrialModal={() => handleOpenTrialModal('Free Trial')}
          onScrollToSection={handleScrollToSection}
        />

        {/* 3. ABOUT SECTION */}
        <AboutSection />

        {/* 4. FEATURED PROGRAMS/CLASSES */}
        <ProgramsSection onSelectProgramForTrial={handleSelectProgramForTrial} />

        {/* 5. TRAINER PROFILES */}
        <TrainersSection onBookTrainer={handleBookTrainer} />

        {/* 6. CLASS SCHEDULE */}
        <ScheduleSection onReserveClass={(session) => setSelectedClassSession(session)} />

        {/* 7. TRANSFORMATION STORIES / TESTIMONIALS */}
        <TestimonialsSection onStartJourney={() => handleOpenTrialModal('Transformation Trial')} />

        {/* 8. PRICING / MEMBERSHIP OPTIONS */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 9. CTA SECTION (Before Footer) */}
        <CtaSection />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* Sticky Quick-Action Bar for Mobile Screens */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0C0C]/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <a
          href="https://wa.me/919876543210?text=Hi%20DEMO%20Fitness!%20I%20want%20to%20know%20more."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] text-black font-heading font-black text-xs uppercase flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-black text-black" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenTrialModal('Mobile Sticky Trial')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-[#00D4FF]/30"
        >
          <Zap className="w-4 h-4 fill-black text-black" />
          <span>Free Trial</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        initialPlan={selectedPlanName}
      />

      <ReserveClassModal
        session={selectedClassSession}
        onClose={() => setSelectedClassSession(null)}
      />
    </div>
  );
}

