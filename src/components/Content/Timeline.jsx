import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCheckCircle, FiCircle } from 'react-icons/fi';

const Timeline = ({ 
  items, 
  title, 
  delay = 0,
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
          <FiClock className="mr-2 text-blue-500" size={20} />
          {title}
        </h3>
      )}
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
              className="relative flex items-start"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500">
                {item.completed ? (
                  <FiCheckCircle className="text-blue-500" size={16} />
                ) : (
                  <FiCircle className="text-blue-500" size={16} />
                )}
              </div>
              
              {/* Content */}
              <div className="ml-4 flex-1">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  {item.date && (
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.date}
                    </div>
                  )}
                  
                  {item.title && (
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h4>
                  )}
                  
                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  
                  {item.details && (
                    <ul className="mt-3 space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {item.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
