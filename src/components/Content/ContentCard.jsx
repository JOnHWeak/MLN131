import React from 'react';
import { motion } from 'framer-motion';
import { FiBookmark, FiCheck } from 'react-icons/fi';
import { useApp } from '../../contexts/AppContext';
import { getImagePath, getImageWithFallback } from '../../utils/imageUtils';

const ContentCard = ({
  title,
  children,
  icon,
  delay = 0,
  pageId,
  className = "",
  showBookmark = true,
  image,
  imageCaption,
  images
}) => {
  const { isBookmarked, toggleBookmark } = useApp();
  const bookmarked = pageId ? isBookmarked(pageId) : false;

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pageId) {
      toggleBookmark(pageId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border-l-4 border-blue-500 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center flex-1">
          {icon && (
            <span className="text-2xl mr-3 flex-shrink-0">{icon}</span>
          )}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white leading-tight">
            {title}
          </h2>
        </div>

        {showBookmark && pageId && (
          <button
            onClick={handleBookmark}
            className={`p-2 rounded-lg transition-colors ${bookmarked
              ? 'text-yellow-500 hover:text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
              : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
              }`}
            title={bookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu trang'}
          >
            {bookmarked ? <FiCheck size={20} /> : <FiBookmark size={20} />}
          </button>
        )}
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* Single Image */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="mb-6"
          >
            <div className="image-container">
              <img
                src={getImageWithFallback(image)}
                alt={imageCaption || title}
                className="rounded-lg shadow-md"
                onError={(e) => {
                  console.error('Image failed to load:', image);
                  e.target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', image);
                }}
              />
            </div>
            {imageCaption && (
              <p className="image-caption">
                {imageCaption}
              </p>
            )}
          </motion.div>
        )}

        {/* Multiple Images */}
        {images && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div key={index}>
                  <div className="image-container" style={{ maxHeight: '300px' }}>
                    <img
                      src={getImageWithFallback(img.src)}
                      alt={img.caption || title}
                      className="rounded-lg shadow-md"
                      onError={(e) => {
                        console.error('Image failed to load:', img.src);
                        e.target.style.display = 'none';
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', img.src);
                      }}
                    />
                  </div>
                  {img.caption && (
                    <p className="image-caption">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {children}
      </div>
    </motion.div>
  );
};

export default ContentCard;
