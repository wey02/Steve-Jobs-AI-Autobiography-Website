import React from 'react';
import { QuoteGallery } from '../components/QuoteGallery';
import { motion } from 'motion/react';

/**
 * Dedicated Wisdom Page
 */
export const Wisdom: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <QuoteGallery />
    </motion.div>
  );
};
