import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  FiHome, 
  FiBookOpen, 
  FiUsers, 
  FiFlag, 
  FiTrendingUp, 
  FiTarget, 
  FiCheckCircle,
  FiX,
  FiBookmark
} from 'react-icons/fi';

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, isBookmarked } = useApp();
  const { isDark } = useTheme();
  const location = useLocation();

  const navigation = [
    { 
      name: 'Trang chủ', 
      href: '/', 
      icon: FiHome,
      description: 'Tổng quan về môn học'
    },
    { 
      name: 'Giới thiệu', 
      href: '/introduction', 
      icon: FiBookOpen,
      description: 'Mở đầu và khái niệm cơ bản'
    },
    { 
      name: 'Quan điểm Mác-Lênin', 
      href: '/marx-lenin-view', 
      icon: FiBookOpen,
      description: 'Bản chất tôn giáo theo Mác-Lênin'
    },
    { 
      name: 'Tôn giáo trong XHCN', 
      href: '/socialism-religion', 
      icon: FiUsers,
      description: 'Quan điểm về tôn giáo trong xã hội chủ nghĩa'
    },
    { 
      name: 'Chính sách Việt Nam', 
      href: '/vietnam-policy', 
      icon: FiFlag,
      description: 'Chính sách tôn giáo của Việt Nam'
    },
    { 
      name: 'Thực tiễn Việt Nam', 
      href: '/practical', 
      icon: FiTrendingUp,
      description: 'Liên hệ thực tiễn tại Việt Nam'
    },
    { 
      name: 'Giải pháp', 
      href: '/solutions', 
      icon: FiTarget,
      description: 'Giải pháp trong giai đoạn hiện nay'
    },
    { 
      name: 'Kết luận', 
      href: '/conclusion', 
      icon: FiCheckCircle,
      description: 'Tổng kết và kết luận'
    }
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Overlay cho mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-800 shadow-xl md:shadow-none md:relative md:translate-x-0"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Nội dung môn học
                </h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = location.pathname === item.href;
                    const bookmarked = isBookmarked(item.href);
                    
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`group flex items-center p-3 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <div className="flex items-center flex-1">
                            <item.icon 
                              size={20} 
                              className={`mr-3 ${
                                isActive 
                                  ? 'text-blue-600 dark:text-blue-400' 
                                  : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                              }`} 
                            />
                            <div className="flex-1">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {item.description}
                              </div>
                            </div>
                          </div>
                          {bookmarked && (
                            <FiBookmark 
                              size={16} 
                              className="text-yellow-500 ml-2" 
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  <p>Môn học: Bản chất tôn giáo theo quan điểm Mác – Lênin</p>
                  <p className="mt-1">© 2024 - Ứng dụng học tập tương tác</p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
