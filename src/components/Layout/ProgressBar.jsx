import React from 'react';
import { motion } from 'framer-motion';
import { useReadingProgress } from '../../hooks/useReadingProgress';

const ProgressBar = () => {
  const progress = useReadingProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-700">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default ProgressBar;
