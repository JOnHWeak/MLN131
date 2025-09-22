import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../components/Content/ContentCard';
import QuoteBox from '../components/Content/QuoteBox';
import StatisticsChart from '../components/Content/StatisticsChart';
import Quiz from '../components/Interactive/Quiz';
import NoteTaking from '../components/Interactive/NoteTaking';
import MainContentSidebar from '../components/Layout/MainContentSidebar';
import { contentData } from '../data/content';
import { quizData } from '../data/quiz';
import { FiCheckCircle, FiTarget, FiUsers, FiBookOpen, FiAward, FiTrendingUp } from 'react-icons/fi';

const Conclusion = () => {
  const data = contentData.ketLuan;

  // All quiz questions for final assessment
  const finalQuiz = quizData;

  // Chart data for learning progress
  const learningProgressData = {
    labels: ['Quan điểm Mác-Lênin', 'Tôn giáo trong XHCN', 'Chính sách VN', 'Thực tiễn VN', 'Giải pháp'],
    datasets: [
      {
        label: 'Mức độ hiểu biết (%)',
        data: [95, 90, 88, 85, 92],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(139, 92, 246, 1)'
        ],
        borderWidth: 2
      }
    ]
  };

  const keyLearnings = [
    {
      topic: "Bản chất tôn giáo theo Mác-Lênin",
      keyPoints: [
        "Tôn giáo là sản phẩm xã hội, không phải hiện tượng siêu nhiên",
        "Phản ánh hư ảo hiện thực khách quan",
        "Vừa có mặt tích cực vừa có mặt tiêu cực",
        "Cần được xử lý bằng phương pháp khoa học"
      ],
      icon: FiBookOpen,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
    },
    {
      topic: "Tôn giáo trong xã hội chủ nghĩa",
      keyPoints: [
        "Tôn giáo vẫn tồn tại lâu dài trong thời kỳ quá độ",
        "Không dùng bạo lực để xóa bỏ tôn giáo",
        "Tôn trọng quyền tự do tín ngưỡng",
        "Xây dựng cơ sở xã hội mới để giảm nhu cầu tôn giáo"
      ],
      icon: FiUsers,
      color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
    },
    {
      topic: "Chính sách tôn giáo Việt Nam",
      keyPoints: [
        "Bảo đảm tự do tín ngưỡng theo Hiến pháp 2013",
        "Bình đẳng trước pháp luật",
        "Bảo đảm hoạt động hợp pháp",
        "Ngăn chặn lợi dụng tôn giáo"
      ],
      icon: FiTarget,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
    },
    {
      topic: "Thực tiễn và giải pháp",
      keyPoints: [
        "Hòa hợp tôn giáo đạt được nhiều thành tựu",
        "Cần tiếp tục hoàn thiện pháp luật",
        "Phát huy vai trò tích cực của tôn giáo",
        "Đấu tranh với hành vi lợi dụng tôn giáo"
      ],
      icon: FiTrendingUp,
      color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
    }
  ];

  const mainConclusions = [
    {
      conclusion: "Tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng",
      explanation: "Đây là nguyên tắc cơ bản trong xử lý vấn đề tôn giáo, được quy định trong Hiến pháp và pháp luật Việt Nam.",
      importance: "Cao nhất"
    },
    {
      conclusion: "Đoàn kết toàn dân, phát huy sức mạnh cộng đồng",
      explanation: "Tạo ra sự đồng thuận trong xã hội, phát huy sức mạnh đoàn kết dân tộc để xây dựng đất nước.",
      importance: "Cao"
    },
    {
      conclusion: "Phát huy giá trị tốt đẹp của tôn giáo, đấu tranh với lợi dụng",
      explanation: "Khuyến khích các hoạt động tích cực của tôn giáo đồng thời ngăn chặn các hành vi lợi dụng để phá hoại.",
      importance: "Cao"
    }
  ];

  const practicalApplications = [
    {
      area: "Trong công tác quản lý nhà nước",
      applications: [
        "Xây dựng chính sách tôn giáo phù hợp",
        "Tăng cường quản lý hoạt động tôn giáo",
        "Đào tạo cán bộ làm công tác tôn giáo",
        "Phối hợp với các tổ chức tôn giáo"
      ]
    },
    {
      area: "Trong giáo dục và tuyên truyền",
      applications: [
        "Giáo dục quyền tự do tín ngưỡng",
        "Tuyên truyền giá trị nhân văn của tôn giáo",
        "Nâng cao hiểu biết về pháp luật",
        "Xây dựng văn hóa tôn trọng sự khác biệt"
      ]
    },
    {
      area: "Trong đời sống xã hội",
      applications: [
        "Tham gia các hoạt động từ thiện",
        "Bảo vệ môi trường",
        "Hỗ trợ phát triển cộng đồng",
        "Góp phần ổn định xã hội"
      ]
    }
  ];

  const futureProspects = [
    {
      prospect: "Hoàn thiện pháp luật",
      description: "Tiếp tục sửa đổi, bổ sung các văn bản pháp luật về tôn giáo",
      timeline: "2024-2026",
      priority: "Cao"
    },
    {
      prospect: "Nâng cao nhận thức",
      description: "Tăng cường giáo dục và tuyên truyền về quyền tự do tín ngưỡng",
      timeline: "2024-2030",
      priority: "Cao"
    },
    {
      prospect: "Phát huy vai trò tích cực",
      description: "Khuyến khích tôn giáo tham gia các hoạt động xã hội",
      timeline: "2025-2030",
      priority: "Trung bình"
    },
    {
      prospect: "Tăng cường hợp tác quốc tế",
      description: "Hợp tác với các nước trong xử lý vấn đề tôn giáo",
      timeline: "2024-2030",
      priority: "Trung bình"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Fixed Sidebar */}
      <div className="hidden lg:block w-80 bg-white dark:bg-gray-800 shadow-lg fixed left-0 top-0 h-screen overflow-y-auto z-10">
        <div className="p-6 pb-20">
          <MainContentSidebar
            title="Nội dung chương"
            showProgress={false}
            showStats={false}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tổng kết và kết luận về môn học "Bản chất tôn giáo theo quan điểm Mác – Lênin"
            </p>
          </motion.div>

          {/* Main Conclusions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <ContentCard
              title="Những kết luận chính"
              icon="✅"
              pageId="conclusion-main"
              image={data.image}
              imageCaption={data.imageCaption}
            >
              <div className="space-y-6">
                {mainConclusions.map((conclusion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {conclusion.conclusion}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded ${conclusion.importance === 'Cao nhất' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
                        conclusion.importance === 'Cao' ? 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300' :
                          'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                        }`}>
                        {conclusion.importance}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {conclusion.explanation}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Key Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <ContentCard
              title="Những kiến thức quan trọng đã học"
              icon="📚"
              pageId="conclusion-learnings"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyLearnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 ${learning.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <learning.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {learning.topic}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {learning.keyPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Learning Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <ContentCard
              title="Tiến độ học tập"
              icon="📈"
              pageId="conclusion-progress"
            >
              <StatisticsChart
                data={learningProgressData}
                type="bar"
                title="Mức độ hiểu biết các chủ đề"
                delay={0.6}
              />
            </ContentCard>
          </motion.div>

          {/* Practical Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <ContentCard
              title="Ứng dụng thực tiễn"
              icon="🎯"
              pageId="conclusion-applications"
            >
              <div className="space-y-6">
                {practicalApplications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {application.area}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {application.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{app}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Future Prospects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <ContentCard
              title="Triển vọng tương lai"
              icon="🚀"
              pageId="conclusion-future"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {futureProspects.map((prospect, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {prospect.prospect}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded ${prospect.priority === 'Cao' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
                          prospect.priority === 'Trung bình' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                            'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          }`}>
                          {prospect.priority}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {prospect.description}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Thời gian:</strong> {prospect.timeline}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Significance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <QuoteBox
              quote={data.significance}
              variant="success"
            />
          </motion.div>

          {/* Final Quiz */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <Quiz
              questions={finalQuiz}
              title="Quiz tổng hợp: Kiểm tra kiến thức toàn bộ môn học"
            />
          </motion.div>

          {/* Note Taking Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <NoteTaking
              pageId="conclusion"
              pageTitle="Kết luận môn học"
            />
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                className="text-6xl mb-6"
              >
                🎓
              </motion.div>
              <h2 className="text-4xl font-bold mb-4">
                Chúc mừng bạn đã hoàn thành môn học!
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Bạn đã nắm vững kiến thức về "Bản chất tôn giáo theo quan điểm Mác – Lênin"
                và có thể áp dụng vào thực tiễn công việc và cuộc sống.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FiAward className="mr-2" size={20} />
                  Về trang chủ
                </a>
                <a
                  href="/introduction"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <FiBookOpen className="mr-2" size={20} />
                  Ôn tập lại
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
