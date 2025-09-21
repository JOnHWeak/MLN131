import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookOpen, FiSearch, FiX, FiFilter } from 'react-icons/fi';
import { useSearch } from '../../hooks/useSearch';
import { glossaryData } from '../../data/glossary';

const Glossary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { query, setQuery, filteredData } = useSearch(
    glossaryData,
    ['term', 'definition']
  );

  // Get unique categories
  const categories = ['all', ...new Set(glossaryData.map(item => item.category))];

  // Filter by category
  const filteredByCategory = selectedCategory === 'all' 
    ? filteredData 
    : filteredData.filter(item => item.category === selectedCategory);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    setIsSearchOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <FiBookOpen className="text-blue-500 mr-3" size={32} />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Từ điển thuật ngữ
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Khám phá và hiểu rõ các thuật ngữ chuyên môn trong môn học "Bản chất tôn giáo theo quan điểm Mác – Lênin"
        </p>
      </motion.div>

      {/* Search and Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm thuật ngữ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiFilter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tất cả danh mục</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Tìm thấy {filteredByCategory.length} thuật ngữ
          {selectedCategory !== 'all' && ` trong danh mục "${selectedCategory}"`}
          {query && ` cho từ khóa "${query}"`}
        </div>
      </motion.div>

      {/* Glossary Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredByCategory.map((term, index) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Term Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {term.term}
                </h3>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {term.category}
                </span>
              </div>

              {/* Definition */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {term.definition}
              </p>

              {/* Hover effect indicator */}
              <div className="mt-4 flex items-center text-xs text-gray-400 dark:text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Nhấn để xem chi tiết</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredByCategory.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FiBookOpen className="mx-auto text-gray-400 dark:text-gray-500 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Không tìm thấy thuật ngữ nào
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác
          </p>
        </motion.div>
      )}

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Tìm kiếm nhanh
                  </h3>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    <FiX size={20} />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Nhập thuật ngữ..."
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch(e.target.value);
                      }
                    }}
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Glossary;
