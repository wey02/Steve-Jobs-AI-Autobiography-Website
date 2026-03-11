import React from 'react';
import { Documentary } from '../components/Documentary';
import { motion } from 'motion/react';

/**
 * Dedicated Documentary Page
 */
export const DocumentaryPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Documentary />
    </motion.div>
  );
};
