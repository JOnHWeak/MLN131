import React from 'react';
import { motion } from 'framer-motion';
import { MdFormatQuote } from 'react-icons/md';

const QuoteBox = ({
  quote,
  author,
  source,
  delay = 0,
  className = "",
  variant = "default"
}) => {
  const variants = {
    default: "border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20",
    warning: "border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
    success: "border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20",
    error: "border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-lg p-6 my-6 ${variants[variant]} ${className}`}
    >
      <div className="flex items-start">
        <MdFormatQuote
          size={24}
          className={`mt-1 mr-3 ${variant === 'default' ? 'text-blue-500' :
            variant === 'warning' ? 'text-yellow-500' :
              variant === 'success' ? 'text-green-500' :
                'text-red-500'
            }`}
        />
        <div className="flex-1">
          <blockquote className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
            "{quote}"
          </blockquote>

          {(author || source) && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {author && (
                <span className="font-semibold">{author}</span>
              )}
              {author && source && <span className="mx-2">•</span>}
              {source && (
                <span className="italic">{source}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteBox;
