import React from 'react';
import { Hero } from '../components/Hero';
import { AnimatedQuestion, LegacyIntro, PhilosophySection, InvitationSection, CTASection } from '../components/HomeSections';

/**
 * Home Page
 * Refined to inspire, engage, and guide visitors through a narrative journey.
 */
export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AnimatedQuestion />
      <LegacyIntro />
      <PhilosophySection />
      <InvitationSection />
      <CTASection />
    </>
  );
};
