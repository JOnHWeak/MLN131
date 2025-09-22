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
        className="sticky top-6"
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
                  className={`block p-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-100 dark:bg-blue-900/20 border-l-4 border-blue-500' 
                      : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon 
                      className={`mr-3 ${
                        isActive 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-500 dark:text-gray-400'
                      }`} 
                      size={20} 
                    />
                    <div>
                      <div className={`font-medium ${
                        isActive 
                          ? 'text-blue-900 dark:text-blue-100' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {item.name}
                      </div>
                      <div className={`text-sm ${
                        isActive 
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

      {/* Learning Progress */}
      {showProgress && (
        <ContentCard
          title="Tiến độ học tập"
          icon="📊"
          pageId="learning-progress"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Hoàn thành</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">0/7 chương</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: '0%' }}></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Bắt đầu học để theo dõi tiến độ
            </div>
          </div>
        </ContentCard>
      )}

      {/* Quick Stats */}
      {showStats && (
        <ContentCard
          title="Thống kê nhanh"
          icon="📈"
          pageId="quick-stats"
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Tổng số chương</span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">7</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Số câu hỏi</span>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">50+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Thời gian học</span>
              <span className="text-lg font-bold text-purple-600 dark:text-purple-400">2-3h</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Mức độ khó</span>
              <span className="text-lg font-bold text-orange-600 dark:text-orange-400">Trung bình</span>
            </div>
          </div>
        </ContentCard>
      )}

      {/* Study Tips */}
      <ContentCard
        title="Mẹo học tập"
        icon="💡"
        pageId="study-tips"
      >
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Đọc lý thuyết trước</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">Nắm vững khái niệm cơ bản trước khi làm bài tập</p>
          </div>
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Làm quiz thường xuyên</h4>
            <p className="text-sm text-green-700 dark:text-green-300">Kiểm tra kiến thức qua các câu hỏi trắc nghiệm</p>
          </div>
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Ghi chú quan trọng</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">Sử dụng tính năng ghi chú để lưu ý điểm quan trọng</p>
          </div>
        </div>
      </ContentCard>
    </div>
  );
};

export default MainContentSidebar;
