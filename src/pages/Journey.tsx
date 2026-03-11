import React from 'react';
import { Timeline } from '../components/Timeline';
import { motion } from 'motion/react';

/**
 * Dedicated Journey Page
 */
export const Journey: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Timeline />
    </motion.div>
  );
};
