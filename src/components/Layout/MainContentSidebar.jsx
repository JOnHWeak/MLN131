import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContentCard from '../Content/ContentCard';
import {
  FiBookOpen,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiCheckCircle,
  FiHome,
  FiFlag
} from 'react-icons/fi';

const MainContentSidebar = ({
  title = "Mục lục nhanh",
  showProgress = true,
  showStats = true,
  className = ""
}) => {
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

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Quick Navigation */}
      <ContentCard
        title={title}
        icon="📑"
        pageId="main-content-nav"
      >
        <nav className="space-y-2">
          {navigation.map((item, index) => {
            const isActive = location.pathname === item.href;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`block p-3 rounded-lg transition-colors ${isActive
                    ? 'bg-blue-100 dark:bg-blue-900/20 border-l-4 border-blue-500'
                    : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    }`}
                >
                  <div className="flex items-center">
                    <item.icon
                      className={`mr-3 ${isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-500 dark:text-gray-400'
                        }`}
                      size={20}
                    />
                    <div>
                      <div className={`font-medium ${isActive
                        ? 'text-blue-900 dark:text-blue-100'
                        : 'text-gray-900 dark:text-white'
                        }`}>
                        {item.name}
                      </div>
                      <div className={`text-sm ${isActive
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-gray-600 dark:text-gray-400'
                        }`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </ContentCard>


    </div>
  );
};

export default MainContentSidebar;
