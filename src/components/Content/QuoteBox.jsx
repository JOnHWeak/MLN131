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
    default: "glass border-l-4 border-blue-400",
    warning: "glass border-l-4 border-yellow-400",
    success: "glass border-l-4 border-green-400",
    error: "glass border-l-4 border-red-400"
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
          <blockquote className="text-lg font-medium text-gray-100 leading-relaxed mb-3">
            "{quote}"
          </blockquote>

          {(author || source) && (
            <div className="text-sm text-gray-300">
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
