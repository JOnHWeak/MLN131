import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg transition-colors ${
        isDark 
          ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
      } ${className}`}
      title={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
      </motion.div>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-current opacity-0"
        whileTap={{ opacity: 0.1 }}
        transition={{ duration: 0.1 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
