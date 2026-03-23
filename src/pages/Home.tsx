import React from 'react';
import { Hero } from '../components/Hero';
import { JourneySection, WisdomTeaser, DocumentaryTeaser, ConversationTeaser, SemanticSearchTeaser } from '../components/HomeSections';

/**
 * Home Page
 * Refined to inspire, engage, and guide visitors through a narrative journey.
 */
export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <JourneySection />
      <WisdomTeaser />
      <DocumentaryTeaser />
      <ConversationTeaser />
      <SemanticSearchTeaser />
    </>
  );
};
