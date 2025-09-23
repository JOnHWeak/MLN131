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
import { FiTrendingUp, FiUsers, FiHeart, FiAward, FiTarget, FiCheckCircle } from 'react-icons/fi';

const PracticalApplication = () => {
  const data = contentData.thucTienVietNam;

  // Filter quiz questions related to practical application
  const practicalQuiz = quizData.filter(q =>
    q.question.includes('thực tiễn') ||
    q.question.includes('Việt Nam') ||
    q.question.includes('hòa hợp')
  );

  // Chart data for religion distribution
  const religionDistributionData = {
    labels: ['Phật giáo', 'Công giáo', 'Tin Lành', 'Cao Đài', 'Hòa Hảo', 'Hồi giáo', 'Khác'],
    datasets: [
      {
        label: 'Số lượng tín đồ (triệu người)',
        data: [14.9, 7.0, 1.4, 1.3, 1.2, 0.1, 0.1],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(156, 163, 175, 0.8)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(156, 163, 175, 1)'
        ],
        borderWidth: 2
      }
    ]
  };

  // Chart data for social contributions
  const socialContributionsData = {
    labels: ['Từ thiện', 'Giáo dục', 'Y tế', 'Môi trường', 'Văn hóa', 'Xã hội'],
    datasets: [
      {
        label: 'Mức độ đóng góp (%)',
        data: [90, 85, 80, 75, 70, 85],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2
      }
    ]
  };

  const achievements = [
    {
      title: "Ổn định chính trị - xã hội",
      description: "Hoạt động tôn giáo ổn định, quan hệ hài hòa giữa các tôn giáo với Nhà nước",
      icon: FiCheckCircle,
      color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      details: [
        "Không có xung đột tôn giáo lớn",
        "Các tôn giáo tuân thủ pháp luật",
        "Quan hệ tốt đẹp với chính quyền",
        "Đóng góp tích cực vào phát triển đất nước"
      ]
    },
    {
      title: "Phong trào xã hội tích cực",
      description: "Các phong trào 'Sống tốt đời đẹp đạo', 'Toàn dân đoàn kết xây dựng đời sống văn hóa'",
      icon: FiUsers,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      details: [
        "Sống tốt đời đẹp đạo",
        "Toàn dân đoàn kết xây dựng đời sống văn hóa ở khu dân cư",
        "Xây dựng nông thôn mới",
        "Bảo vệ môi trường"
      ]
    },
    {
      title: "Đóng góp từ thiện lớn",
      description: "Xây cầu đường, nhà tình thương, chăm sóc trẻ mồ côi, hỗ trợ chống dịch COVID-19",
      icon: FiHeart,
      color: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
      details: [
        "Xây dựng cơ sở hạ tầng",
        "Hỗ trợ người nghèo, trẻ mồ côi",
        "Chăm sóc người già, người khuyết tật",
        "Hỗ trợ chống dịch COVID-19"
      ]
    }
  ];

  const specificExamples = [
    {
      organization: "Giáo hội Phật giáo Việt Nam",
      activities: [
        "Tổ chức 'Bếp ăn từ thiện' cho bệnh viện",
        "Xây dựng nhà tình thương cho người nghèo",
        "Hỗ trợ giáo dục cho trẻ em vùng sâu vùng xa",
        "Tham gia bảo vệ môi trường"
      ],
      impact: "Hàng triệu người được hỗ trợ mỗi năm"
    },
    {
      organization: "Giáo hội Công giáo Việt Nam",
      activities: [
        "Chăm sóc người già, người khuyết tật",
        "Hỗ trợ giáo dục và y tế",
        "Tham gia xây dựng nông thôn mới",
        "Đóng góp vào phát triển kinh tế - xã hội"
      ],
      impact: "Đóng góp tích cực vào phát triển đất nước"
    },
    {
      organization: "Các tổ chức tôn giáo khác",
      activities: [
        "Cao Đài: Tham gia hoạt động từ thiện",
        "Hòa Hảo: Hỗ trợ nông dân phát triển sản xuất",
        "Tin Lành: Tham gia giáo dục và y tế",
        "Hồi giáo: Góp phần đa dạng văn hóa"
      ],
      impact: "Tạo nên sự đa dạng và phong phú trong xã hội"
    }
  ];

  const challenges = [
    {
      challenge: "Cân bằng giữa tự do và quản lý",
      description: "Vừa đảm bảo tự do tín ngưỡng vừa quản lý chặt chẽ",
      solution: "Xây dựng khung pháp lý rõ ràng, minh bạch"
    },
    {
      challenge: "Đa dạng tôn giáo",
      description: "Mỗi tôn giáo có đặc điểm và nhu cầu khác nhau",
      solution: "Có chính sách linh hoạt, phù hợp từng tôn giáo"
    },
    {
      challenge: "Áp lực từ bên ngoài",
      description: "Một số thế lực lợi dụng tôn giáo chống phá",
      solution: "Tăng cường cảnh giác và đấu tranh chính trị"
    },
    {
      challenge: "Phát triển kinh tế - xã hội",
      description: "Cần phát triển để giảm nhu cầu tôn giáo",
      solution: "Ưu tiên phát triển giáo dục, y tế, xóa đói giảm nghèo"
    }
  ];

  const futureDirections = [
    {
      direction: "Hoàn thiện pháp luật",
      description: "Sửa đổi, bổ sung Luật Tín ngưỡng, Tôn giáo",
      priority: "Cao",
      timeline: "2024-2025"
    },
    {
      direction: "Nâng cao nhận thức",
      description: "Giáo dục quyền tự do tín ngưỡng, tôn trọng sự khác biệt",
      priority: "Cao",
      timeline: "Liên tục"
    },
    {
      direction: "Phát huy vai trò tích cực",
      description: "Khuyến khích tham gia bảo vệ môi trường, hỗ trợ người nghèo",
      priority: "Trung bình",
      timeline: "2024-2030"
    },
    {
      direction: "Đấu tranh với lợi dụng",
      description: "Xử lý nghiêm các hành vi lợi dụng tôn giáo",
      priority: "Cao",
      timeline: "Liên tục"
    }
  ];

  return (
    <div className="min-h-screen flex">
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
              Thực tiễn hòa hợp tôn giáo trong xã hội Việt Nam hiện nay cho thấy
              sự thành công trong việc áp dụng quan điểm Mác-Lênin vào điều kiện cụ thể
            </p>
          </motion.div>

          {/* Statistics Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <ContentCard
              title="Thống kê tổng quan"
              icon="📊"
              pageId="practical-statistics"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {data.statistics.totalOrganizations}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Tổ chức tôn giáo
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {data.statistics.totalReligions}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Tôn giáo
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {data.statistics.totalBelievers}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Triệu tín đồ
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    {data.statistics.percentage}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Dân số có tín ngưỡng
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <StatisticsChart
                  data={religionDistributionData}
                  type="doughnut"
                  title="Phân bố tín đồ theo tôn giáo"
                  delay={0.2}
                />
                <StatisticsChart
                  data={socialContributionsData}
                  type="bar"
                  title="Đóng góp xã hội của tôn giáo"
                  delay={0.4}
                />
              </div>
            </ContentCard>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <ContentCard
              title="Thành tựu đạt được"
              icon="🏆"
              pageId="practical-achievements"
            >
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <achievement.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {achievement.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Specific Examples */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <ContentCard
              title="Ví dụ cụ thể"
              icon="🌍"
              pageId="practical-examples"
            >
              <div className="space-y-6">
                {specificExamples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {example.organization}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Hoạt động chính:
                        </h4>
                        <ul className="space-y-1">
                          {example.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
                        <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1">
                          Tác động:
                        </h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          {example.impact}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Examples from content data */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <ContentCard
              title="Các ví dụ thực tiễn"
              icon="💡"
              pageId="practical-content-examples"
              images={data.images}
            >
              <div className="space-y-4">
                {data.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <FiCheckCircle className="text-green-600 dark:text-green-400 mt-1" size={16} />
                      <p className="text-gray-700 dark:text-gray-300">{example}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <ContentCard
              title="Thách thức hiện tại"
              icon="⚠️"
              pageId="practical-challenges"
            >
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {challenge.challenge}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {challenge.description}
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>Giải pháp:</strong> {challenge.solution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Future Directions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <ContentCard
              title="Định hướng tương lai"
              icon="🚀"
              pageId="practical-future"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {futureDirections.map((direction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {direction.direction}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded ${direction.priority === 'Cao' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
                          direction.priority === 'Trung bình' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                            'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          }`}>
                          {direction.priority}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {direction.description}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Thời gian:</strong> {direction.timeline}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {(() => {
            try {
              const visited = JSON.parse(localStorage.getItem('visited-steps') || '[]');
              const totalSteps = 7;
              if (visited.length >= totalSteps && [...Array(totalSteps).keys()].every(i => visited.includes(i))) {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-16"
                  >
                    <Quiz
                      questions={practicalQuiz}
                      title="Quiz: Thực tiễn tôn giáo tại Việt Nam"
                    />
                  </motion.div>
                );
              }
            } catch { }
            return null;
          })()}

          {/* Note Taking Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <NoteTaking
              pageId="practical"
              pageTitle="Thực tiễn tôn giáo tại Việt Nam"
            />
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Tiếp tục học tập
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Bây giờ hãy tìm hiểu về các giải pháp cụ thể trong giai đoạn hiện nay
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FiTarget className="mr-2" size={20} />
                  Giải pháp hiện tại
                </a>
                <a
                  href="/conclusion"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Kết luận
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PracticalApplication;
