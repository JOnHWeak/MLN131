import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { FiType, FiMinus, FiPlus } from 'react-icons/fi';

const FontSizeToggle = ({ className = "" }) => {
  const { fontSize, changeFontSize } = useTheme();

  const fontSizes = [
    { key: 'small', label: 'Nhỏ', size: 'text-sm' },
    { key: 'medium', label: 'Vừa', size: 'text-base' },
    { key: 'large', label: 'Lớn', size: 'text-lg' },
    { key: 'xlarge', label: 'Rất lớn', size: 'text-xl' }
  ];

  const currentSizeIndex = fontSizes.findIndex(size => size.key === fontSize);
  const canDecrease = currentSizeIndex > 0;
  const canIncrease = currentSizeIndex < fontSizes.length - 1;

  const handleDecrease = () => {
    if (canDecrease) {
      changeFontSize(fontSizes[currentSizeIndex - 1].key);
    }
  };

  const handleIncrease = () => {
    if (canIncrease) {
      changeFontSize(fontSizes[currentSizeIndex + 1].key);
    }
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDecrease}
        disabled={!canDecrease}
        className={`p-2 rounded-lg transition-colors ${
          canDecrease
            ? 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
            : 'bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
        }`}
        title="Giảm kích thước font"
      >
        <FiMinus size={16} />
      </motion.button>

      <div className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <FiType className="mr-2 text-gray-600 dark:text-gray-400" size={16} />
        <span className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${fontSizes[currentSizeIndex].size}`}>
          A
        </span>
        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
          {fontSizes[currentSizeIndex].label}
        </span>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleIncrease}
        disabled={!canIncrease}
        className={`p-2 rounded-lg transition-colors ${
          canIncrease
            ? 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
            : 'bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
        }`}
        title="Tăng kích thước font"
      >
        <FiPlus size={16} />
      </motion.button>
    </div>
  );
};

export default FontSizeToggle;
