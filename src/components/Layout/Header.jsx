import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useApp } from '../../contexts/AppContext';
import { FiMenu, FiX, FiBookOpen, FiHome, FiSearch } from 'react-icons/fi';

const Header = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { sidebarOpen, setSidebarOpen, searchQuery, setSearchQuery } = useApp();
  const location = useLocation();

  const navigation = [
    { name: 'Trang chủ', href: '/', icon: FiHome },
    { name: 'Giới thiệu', href: '/introduction', icon: FiBookOpen },
    { name: 'Quan điểm Mác-Lênin', href: '/marx-lenin-view', icon: FiBookOpen },
    { name: 'Tôn giáo trong XHCN', href: '/socialism-religion', icon: FiBookOpen },
    { name: 'Chính sách Việt Nam', href: '/vietnam-policy', icon: FiBookOpen },
    { name: 'Thực tiễn Việt Nam', href: '/practical', icon: FiBookOpen },
    { name: 'Giải pháp', href: '/solutions', icon: FiBookOpen },
    { name: 'Kết luận', href: '/conclusion', icon: FiBookOpen }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo và tiêu đề */}
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FiBookOpen className="text-white" size={20} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  Mác-Lênin & Tôn giáo
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Bản chất tôn giáo theo quan điểm Mác – Lênin
                </p>
              </div>
            </Link>
          </div>

          {/* Search bar - chỉ hiện trên desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm nội dung..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Theme toggle và controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title={isDark ? 'Chuyển sang sáng' : 'Chuyển sang tối'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm nội dung..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
