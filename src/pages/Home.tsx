import React from 'react';
import { Hero } from '../components/Hero';
import { AnimatedQuestion, LegacyIntro, PhilosophySection, ThemeSection, CTASection } from '../components/HomeSections';

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
      <ThemeSection />
      <CTASection />
    </>
  );
};
