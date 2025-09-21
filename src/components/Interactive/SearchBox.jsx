import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiBookOpen, FiFileText } from 'react-icons/fi';
import { useSearch } from '../../hooks/useSearch';
import { contentData } from '../../data/content';
import { glossaryData } from '../../data/glossary';

const SearchBox = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('content');
  const [isOpen, setIsOpen] = useState(true);

  // Flatten content data for search
  const flattenedContent = Object.values(contentData).flatMap(section => {
    const items = [];
    
    // Add main content
    if (section.title) {
      items.push({
        type: 'section',
        title: section.title,
        content: section.introduction || section.definition || '',
        id: section.title
      });
    }
    
    // Add characteristics/policies
    if (section.characteristics) {
      section.characteristics.forEach(item => {
        items.push({
          type: 'characteristic',
          title: item.title,
          content: item.description,
          id: `${section.title}-${item.id}`
        });
      });
    }
    
    if (section.policies) {
      section.policies.forEach(item => {
        items.push({
          type: 'policy',
          title: item.title || item.text,
          content: item.content || item.text,
          id: `${section.title}-${item.id}`
        });
      });
    }
    
    // Add examples
    if (section.examples) {
      section.examples.forEach((example, index) => {
        items.push({
          type: 'example',
          title: `Ví dụ ${index + 1}`,
          content: example,
          id: `${section.title}-example-${index}`
        });
      });
    }
    
    return items;
  });

  const { query, setQuery, filteredData: filteredContent } = useSearch(
    flattenedContent,
    ['title', 'content']
  );

  const { filteredData: filteredGlossary } = useSearch(
    glossaryData,
    ['term', 'definition']
  );

  useEffect(() => {
    setQuery(searchTerm);
  }, [searchTerm, setQuery]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const highlightText = (text, query) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case 'section':
        return <FiBookOpen className="text-blue-500" size={16} />;
      case 'characteristic':
      case 'policy':
        return <FiFileText className="text-green-500" size={16} />;
      case 'example':
        return <FiFileText className="text-purple-500" size={16} />;
      default:
        return <FiFileText className="text-gray-500" size={16} />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'section':
        return 'Phần';
      case 'characteristic':
        return 'Đặc điểm';
      case 'policy':
        return 'Chính sách';
      case 'example':
        return 'Ví dụ';
      default:
        return 'Nội dung';
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20"
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Tìm kiếm nội dung
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>
          
          {/* Search input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Nhập từ khóa để tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
          </div>
          
          {/* Tabs */}
          <div className="flex mt-4 space-x-1">
            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'content'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Nội dung ({filteredContent.length})
            </button>
            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'glossary'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Thuật ngữ ({filteredGlossary.length})
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait">
            {activeTab === 'content' ? (
              <motion.div
                key="content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                {filteredContent.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    {searchTerm ? 'Không tìm thấy kết quả nào' : 'Nhập từ khóa để tìm kiếm'}
                  </div>
                ) : (
                  filteredContent.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start space-x-3">
                        {getIcon(item.type)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                              {getTypeLabel(item.type)}
                            </span>
                            <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                              {highlightText(item.title, searchTerm)}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {highlightText(item.content, searchTerm)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            ) : (
              <motion.div
                key="glossary"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                {filteredGlossary.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    {searchTerm ? 'Không tìm thấy thuật ngữ nào' : 'Nhập từ khóa để tìm kiếm thuật ngữ'}
                  </div>
                ) : (
                  filteredGlossary.map((term, index) => (
                    <motion.div
                      key={term.term}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <FiFileText className="text-purple-500 mt-1" size={16} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {highlightText(term.term, searchTerm)}
                            </h3>
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
                              {term.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {highlightText(term.definition, searchTerm)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchBox;
