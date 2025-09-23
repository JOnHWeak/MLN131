import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Content/HeroSection';
import ContentCard from '../components/Content/ContentCard';
import QuoteBox from '../components/Content/QuoteBox';
import StatisticsChart from '../components/Content/StatisticsChart';
import MainContentSidebar from '../components/Layout/MainContentSidebar';
import RightSidebar from '../components/Layout/RightSidebar';
import { contentData } from '../data/content';
import { FiArrowRight, FiBookOpen, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi';

const Home = () => {
  // Chart data for statistics
  const religionStatsData = {
    labels: ['Phật giáo', 'Công giáo', 'Tin Lành', 'Cao Đài', 'Hòa Hảo', 'Khác'],
    datasets: [
      {
        label: 'Số lượng tín đồ (triệu người)',
        data: [14.9, 7.0, 1.4, 1.3, 1.2, 0.2],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(156, 163, 175, 0.8)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(156, 163, 175, 1)'
        ],
        borderWidth: 2
      }
    ]
  };

  const policyEffectivenessData = {
    labels: ['Tự do tín ngưỡng', 'Bình đẳng tôn giáo', 'Hoạt động hợp pháp', 'Ngăn chặn lợi dụng'],
    datasets: [
      {
        label: 'Mức độ hiệu quả (%)',
        data: [95, 90, 88, 85],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2
      }
    ]
  };

  const features = [
    {
      icon: FiBookOpen,
      title: "Nội dung chuyên sâu",
      description: "Kiến thức đầy đủ về quan điểm Mác-Lênin về tôn giáo từ lý thuyết đến thực tiễn",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FiUsers,
      title: "Tương tác cao",
      description: "Quiz, tìm kiếm, ghi chú và nhiều tính năng học tập tương tác",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FiTarget,
      title: "Thực tiễn Việt Nam",
      description: "Liên hệ với chính sách và thực tiễn tôn giáo tại Việt Nam hiện nay",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FiTrendingUp,
      title: "Cập nhật liên tục",
      description: "Nội dung được cập nhật theo các chính sách và thực tiễn mới nhất",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const quickLinks = [
    {
      title: "Quan điểm Mác-Lênin",
      description: "Tìm hiểu bản chất tôn giáo theo quan điểm khoa học",
      href: "/marx-lenin-view",
      icon: FiBookOpen,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
    },
    {
      title: "Chính sách Việt Nam",
      description: "Khám phá chính sách tôn giáo của Việt Nam hiện nay",
      href: "/vietnam-policy",
      icon: FiTarget,
      color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
    },
    {
      title: "Thực tiễn Việt Nam",
      description: "Liên hệ thực tiễn hòa hợp tôn giáo trong xã hội Việt Nam",
      href: "/practical",
      icon: FiUsers,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Fixed Sidebar */}
        <div className="hidden lg:block w-80 bg-white dark:bg-gray-800 shadow-lg fixed left-0 top-0 h-screen overflow-y-auto z-10">
          <div className="p-6 pb-20">
            <MainContentSidebar
              title="Nội dung môn học"
              showProgress={false}
              showStats={false}
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-80 lg:mr-80">
          {/* Hero Section */}
          <HeroSection />

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <ContentCard
                title="Giới thiệu về môn học"
                icon="📚"
                pageId="home-intro"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Môn học "Bản chất tôn giáo theo quan điểm Mác – Lênin" cung cấp cho sinh viên
                  những kiến thức cơ bản về quan điểm khoa học của chủ nghĩa Mác-Lênin đối với
                  hiện tượng tôn giáo trong xã hội. Thông qua việc nghiên cứu lý thuyết và thực tiễn,
                  sinh viên sẽ hiểu rõ bản chất, vai trò và vị trí của tôn giáo trong quá trình
                  xây dựng xã hội chủ nghĩa.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Mục tiêu học tập:
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Nắm vững quan điểm Mác-Lênin về bản chất tôn giáo
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Hiểu rõ chính sách tôn giáo của Việt Nam
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Phân tích thực tiễn tôn giáo tại Việt Nam
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Phương pháp học:
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Học lý thuyết kết hợp thực tiễn
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Tương tác với quiz và bài tập
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Thảo luận và trao đổi ý kiến
                      </li>
                    </ul>
                  </div>
                </div>
              </ContentCard>
            </motion.section>

            {/* Key Quote */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <QuoteBox
                quote="Tôn giáo là thuốc an thần của nhân dân, nhưng cũng là sản phẩm xã hội phản ánh điều kiện sinh hoạt vật chất và tinh thần của con người."
                author="Karl Marx"
                source="Tác phẩm 'Phê phán triết học pháp quyền của Hegel'"
                variant="default"
              />
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Tính năng nổi bật
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Ứng dụng được thiết kế với nhiều tính năng tương tác để hỗ trợ việc học tập hiệu quả
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Statistics */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Thống kê tôn giáo tại Việt Nam
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Một số số liệu thống kê về tình hình tôn giáo tại Việt Nam hiện nay
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <StatisticsChart
                  data={religionStatsData}
                  type="bar"
                  title="Phân bố tín đồ theo tôn giáo"
                  delay={0.8}
                />
                <StatisticsChart
                  data={policyEffectivenessData}
                  type="bar"
                  title="Hiệu quả các chính sách tôn giáo"
                  delay={1.0}
                />
              </div>
            </motion.section>

            {/* Main Content */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Nội dung môn học
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Khám phá các chủ đề chính của môn học với nội dung chi tiết và tương tác
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                    className="group"
                  >
                    <Link
                      to={link.href}
                      className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mr-4`}>
                          <link.icon size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {link.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {link.description}
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                        Tìm hiểu thêm
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Sẵn sàng bắt đầu học tập?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Khám phá ngay nội dung môn học với giao diện tương tác và hiện đại
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/introduction"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <FiBookOpen className="mr-2" size={20} />
                    Bắt đầu học ngay
                  </Link>
                  <Link
                    to="/marx-lenin-view"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Tìm hiểu quan điểm Mác-Lênin
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* Fixed Right Sidebar */}
        <div className="hidden lg:block w-80 bg-white dark:bg-gray-800 shadow-lg fixed right-0 top-0 h-screen overflow-y-auto z-10">
          <div className="p-6 pb-20">
            <RightSidebar />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;
