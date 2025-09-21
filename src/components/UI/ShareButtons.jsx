import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShare2, 
  FiCopy, 
  FiFacebook, 
  FiTwitter, 
  FiLinkedin, 
  FiMail,
  FiCheck
} from 'react-icons/fi';

const ShareButtons = ({ 
  url = window.location.href, 
  title = "Bản chất tôn giáo theo quan điểm Mác – Lênin",
  description = "Khám phá và hiểu sâu về quan điểm khoa học của chủ nghĩa Mác-Lênin về tôn giáo",
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareOptions = [
    {
      name: 'Facebook',
      icon: FiFacebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      color: 'bg-blue-700 hover:bg-blue-800',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      name: 'Email',
      icon: FiMail,
      color: 'bg-gray-600 hover:bg-gray-700',
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`
    }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = (shareUrl) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main share button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
      >
        <FiShare2 className="mr-2" size={16} />
        Chia sẻ
      </motion.button>

      {/* Share options dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-20"
            >
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Chia sẻ nội dung
                </h3>
                
                {/* Copy link */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyLink}
                  className="w-full flex items-center p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors mb-2"
                >
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                    {copied ? (
                      <FiCheck className="text-green-600" size={16} />
                    ) : (
                      <FiCopy className="text-gray-600 dark:text-gray-400" size={16} />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {copied ? 'Đã sao chép!' : 'Sao chép liên kết'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {url}
                    </div>
                  </div>
                </motion.button>

                <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

                {/* Social media options */}
                <div className="space-y-1">
                  {shareOptions.map((option, index) => (
                    <motion.button
                      key={option.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleShare(option.url)}
                      className={`w-full flex items-center p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors`}
                    >
                      <div className={`w-8 h-8 ${option.color} rounded-lg flex items-center justify-center mr-3`}>
                        <option.icon className="text-white" size={16} />
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Chia sẻ qua {option.name}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButtons;
