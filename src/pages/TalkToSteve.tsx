import React from 'react';
import { AIMentorChat } from '../components/AIMentorChat';
import { motion } from 'motion/react';

/**
 * Dedicated Talk to Steve Page
 */
export const TalkToSteve: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AIMentorChat />
    </motion.div>
  );
};
