import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../components/Content/ContentCard';
import QuoteBox from '../components/Content/QuoteBox';
import Timeline from '../components/Content/Timeline';
import Quiz from '../components/Interactive/Quiz';
import NoteTaking from '../components/Interactive/NoteTaking';
import MainContentSidebar from '../components/Layout/MainContentSidebar';
import { contentData } from '../data/content';
import { quizData } from '../data/quiz';
import { FiTarget, FiUsers, FiBookOpen, FiShield, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const Solutions = () => {
  const data = contentData.giaiPhap;

  // Filter quiz questions related to solutions
  const solutionsQuiz = quizData.filter(q =>
    q.question.includes('giải pháp') ||
    q.question.includes('hiện nay') ||
    q.question.includes('giai đoạn')
  );

  const solutionTimeline = [
    {
      title: "Nâng cao nhận thức cộng đồng",
      description: "Giáo dục quyền tự do tín ngưỡng, tôn trọng sự khác biệt",
      date: "Giai đoạn 1 (2024-2025)",
      completed: false,
      details: [
        "Tuyên truyền giá trị nhân văn của tôn giáo",
        "Hạn chế mê tín dị đoan",
        "Nâng cao hiểu biết về pháp luật",
        "Xây dựng văn hóa tôn trọng sự khác biệt"
      ],
      tags: ["Giáo dục", "Tuyên truyền"]
    },
    {
      title: "Hoàn thiện pháp luật",
      description: "Sửa đổi, bổ sung Luật Tín ngưỡng, Tôn giáo phù hợp với bối cảnh hội nhập",
      date: "Giai đoạn 2 (2025-2026)",
      completed: false,
      details: [
        "Sửa đổi Luật Tín ngưỡng, Tôn giáo",
        "Đơn giản hóa thủ tục đăng ký",
        "Cập nhật quy định phù hợp quốc tế",
        "Tăng cường tính minh bạch"
      ],
      tags: ["Pháp luật", "Cải cách"]
    },
    {
      title: "Phát huy vai trò tích cực",
      description: "Khuyến khích tham gia bảo vệ môi trường, hỗ trợ người nghèo",
      date: "Giai đoạn 3 (2026-2030)",
      completed: false,
      details: [
        "Tham gia bảo vệ môi trường",
        "Hỗ trợ phát triển giáo dục",
        "Chăm sóc người nghèo, người khuyết tật",
        "Đào tạo chức sắc am hiểu pháp luật"
      ],
      tags: ["Phát triển", "Xã hội"]
    },
    {
      title: "Đấu tranh với lợi dụng",
      description: "Xử lý nghiêm các hành vi lợi dụng tôn giáo để chống phá Nhà nước",
      date: "Liên tục",
      completed: false,
      details: [
        "Xử lý nghiêm các tổ chức phản động",
        "Nâng cao cảnh giác cộng đồng",
        "Tăng cường giám sát hoạt động",
        "Bảo vệ an ninh quốc gia"
      ],
      tags: ["An ninh", "Đấu tranh"]
    }
  ];

  const implementationStrategies = [
    {
      strategy: "Chiến lược giáo dục",
      description: "Tập trung vào việc nâng cao nhận thức và hiểu biết",
      methods: [
        "Tổ chức các khóa học về quyền tự do tín ngưỡng",
        "Tuyên truyền qua các phương tiện truyền thông",
        "Tích hợp vào chương trình giáo dục phổ thông",
        "Đào tạo cán bộ làm công tác tôn giáo"
      ],
      timeline: "2024-2025",
      priority: "Cao"
    },
    {
      strategy: "Chiến lược pháp lý",
      description: "Hoàn thiện khung pháp lý và cơ chế thực thi",
      methods: [
        "Rà soát và sửa đổi các văn bản pháp luật",
        "Xây dựng hướng dẫn thi hành chi tiết",
        "Tăng cường năng lực thực thi pháp luật",
        "Thiết lập cơ chế giám sát và đánh giá"
      ],
      timeline: "2025-2026",
      priority: "Cao"
    },
    {
      strategy: "Chiến lược phát triển",
      description: "Phát huy vai trò tích cực của tôn giáo trong xã hội",
      methods: [
        "Khuyến khích tham gia hoạt động xã hội",
        "Hỗ trợ phát triển các dự án cộng đồng",
        "Tạo cơ chế hợp tác giữa tôn giáo và nhà nước",
        "Đầu tư phát triển cơ sở hạ tầng"
      ],
      timeline: "2026-2030",
      priority: "Trung bình"
    },
    {
      strategy: "Chiến lược an ninh",
      description: "Đảm bảo an ninh quốc gia và ổn định xã hội",
      methods: [
        "Tăng cường giám sát hoạt động tôn giáo",
        "Xây dựng hệ thống cảnh báo sớm",
        "Đào tạo lực lượng chuyên trách",
        "Hợp tác quốc tế trong đấu tranh chống khủng bố"
      ],
      timeline: "Liên tục",
      priority: "Cao"
    }
  ];

  const successIndicators = [
    {
      indicator: "Mức độ hài lòng của tín đồ",
      target: "≥ 85%",
      current: "78%",
      trend: "Tăng",
      color: "text-green-600"
    },
    {
      indicator: "Số vụ vi phạm pháp luật về tôn giáo",
      target: "≤ 10 vụ/năm",
      current: "15 vụ/năm",
      trend: "Giảm",
      color: "text-red-600"
    },
    {
      indicator: "Tỷ lệ tham gia hoạt động xã hội",
      target: "≥ 70%",
      current: "65%",
      trend: "Tăng",
      color: "text-blue-600"
    },
    {
      indicator: "Mức độ hiểu biết pháp luật",
      target: "≥ 80%",
      current: "72%",
      trend: "Tăng",
      color: "text-purple-600"
    }
  ];

  const challenges = [
    {
      challenge: "Sự đa dạng của tôn giáo",
      description: "Mỗi tôn giáo có đặc điểm và nhu cầu khác nhau",
      impact: "Khó khăn trong việc xây dựng chính sách chung",
      solution: "Xây dựng khung chung nhưng có hướng dẫn cụ thể cho từng tôn giáo"
    },
    {
      challenge: "Áp lực từ bên ngoài",
      description: "Một số thế lực quốc tế can thiệp vào vấn đề tôn giáo",
      impact: "Gây khó khăn trong quản lý và bảo vệ chủ quyền",
      solution: "Tăng cường đối thoại, giải thích chính sách rõ ràng"
    },
    {
      challenge: "Cân bằng giữa tự do và quản lý",
      description: "Vừa đảm bảo tự do tín ngưỡng vừa quản lý chặt chẽ",
      impact: "Khó khăn trong việc xác định ranh giới",
      solution: "Xây dựng tiêu chí rõ ràng, minh bạch"
    },
    {
      challenge: "Nguồn lực hạn chế",
      description: "Cần đầu tư lớn cho giáo dục và phát triển",
      impact: "Chậm tiến độ thực hiện các giải pháp",
      solution: "Ưu tiên các giải pháp có hiệu quả cao, chi phí thấp"
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
              Các giải pháp cụ thể để xử lý vấn đề tôn giáo trong giai đoạn hiện nay,
              dựa trên quan điểm Mác-Lênin và thực tiễn Việt Nam
            </p>
          </motion.div>

          {/* Main Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <ContentCard
              title="Các giải pháp chính"
              icon="🎯"
              pageId="solutions-main"
              image={data.image}
              imageCaption={data.imageCaption}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${solution.color} dark:bg-opacity-20 rounded-lg p-6`}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-2xl">{solution.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {solution.category}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {solution.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Implementation Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Timeline
              items={solutionTimeline}
              title="Lộ trình thực hiện"
              delay={0.4}
            />
          </motion.div>

          {/* Implementation Strategies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <ContentCard
              title="Chiến lược thực hiện"
              icon="📋"
              pageId="solutions-strategies"
            >
              <div className="space-y-6">
                {implementationStrategies.map((strategy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {strategy.strategy}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {strategy.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <span className={`text-xs px-2 py-1 rounded ${strategy.priority === 'Cao' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
                          strategy.priority === 'Trung bình' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                            'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          }`}>
                          {strategy.priority}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {strategy.timeline}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Các biện pháp cụ thể:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {strategy.methods.map((method, methodIndex) => (
                          <div key={methodIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Success Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <ContentCard
              title="Chỉ số đánh giá thành công"
              icon="📊"
              pageId="solutions-indicators"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {successIndicators.map((indicator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {indicator.indicator}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Mục tiêu:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{indicator.target}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Hiện tại:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{indicator.current}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Xu hướng:</span>
                        <span className={`font-medium ${indicator.color}`}>
                          {indicator.trend}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${indicator.trend === 'Tăng' ? 'bg-green-500' : 'bg-red-500'
                            }`}
                          style={{
                            width: indicator.trend === 'Tăng' ? '75%' : '60%'
                          }}
                        ></div>
                      </div>
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
              title="Thách thức và khó khăn"
              icon="⚠️"
              pageId="solutions-challenges"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded p-3">
                        <h4 className="text-sm font-medium text-red-800 dark:text-red-300 mb-1">
                          Tác động:
                        </h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          {challenge.impact}
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
                        <h4 className="text-sm font-medium text-green-800 dark:text-green-300 mb-1">
                          Giải pháp:
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Key Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <QuoteBox
              quote="Việc xử lý vấn đề tôn giáo cần được thực hiện một cách khoa học, có hệ thống và phù hợp với điều kiện thực tế của đất nước."
              author="Đảng Cộng sản Việt Nam"
              source="Nghị quyết về công tác tôn giáo"
              variant="success"
            />
          </motion.div>

          {/* Quiz Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <Quiz
              questions={solutionsQuiz}
              title="Quiz: Giải pháp xử lý vấn đề tôn giáo"
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
              pageId="solutions"
              pageTitle="Giải pháp xử lý vấn đề tôn giáo"
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
                Hoàn thành học tập
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Bây giờ hãy xem kết luận tổng hợp về môn học
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/conclusion"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FiCheckCircle className="mr-2" size={20} />
                  Xem kết luận
                </a>
                <a
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Về trang chủ
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
