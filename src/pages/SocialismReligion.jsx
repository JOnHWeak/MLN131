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
import { FiShield, FiUsers, FiBookOpen, FiTarget, FiCheckCircle } from 'react-icons/fi';

const SocialismReligion = () => {
  const data = contentData.tonGiaoTrongXHCN;

  // Filter quiz questions related to socialism and religion
  const socialismQuiz = quizData.filter(q =>
    q.question.includes('xã hội chủ nghĩa') ||
    q.question.includes('CNXH') ||
    q.question.includes('thời kỳ quá độ')
  );

  const policyTimeline = [
    {
      title: "Không dùng bạo lực",
      description: "Tuyệt đối không sử dụng bạo lực để xóa bỏ tôn giáo",
      date: "Nguyên tắc cơ bản",
      completed: true,
      details: [
        "Tôn trọng quyền tự do tín ngưỡng",
        "Không cưỡng ép người dân từ bỏ tôn giáo",
        "Giải quyết bằng giáo dục và thuyết phục"
      ],
      tags: ["Tự do", "Nhân quyền"]
    },
    {
      title: "Tôn trọng quyền tự do",
      description: "Đảm bảo quyền tự do tín ngưỡng và không tín ngưỡng",
      date: "Quyền cơ bản",
      completed: true,
      details: [
        "Mọi người có quyền theo hoặc không theo tôn giáo",
        "Không phân biệt đối xử vì lý do tôn giáo",
        "Bảo vệ quyền lợi hợp pháp của tín đồ"
      ],
      tags: ["Tự do", "Bình đẳng"]
    },
    {
      title: "Xây dựng cơ sở xã hội",
      description: "Phát triển kinh tế, văn hóa, giáo dục để giảm nhu cầu tôn giáo",
      date: "Biện pháp tích cực",
      completed: false,
      details: [
        "Nâng cao đời sống vật chất và tinh thần",
        "Phát triển khoa học và giáo dục",
        "Xây dựng xã hội công bằng, bình đẳng"
      ],
      tags: ["Phát triển", "Khoa học"]
    },
    {
      title: "Đoàn kết toàn dân",
      description: "Đoàn kết đồng bào có đạo và không có đạo",
      date: "Mục tiêu cuối cùng",
      completed: false,
      details: [
        "Cùng tham gia xây dựng CNXH",
        "Phát huy sức mạnh đoàn kết dân tộc",
        "Tạo sự đồng thuận trong xã hội"
      ],
      tags: ["Đoàn kết", "Xây dựng"]
    }
  ];

  const implementationMethods = [
    {
      method: "Giáo dục và tuyên truyền",
      description: "Nâng cao nhận thức khoa học, giảm mê tín dị đoan",
      examples: [
        "Tuyên truyền về khoa học tự nhiên và xã hội",
        "Giáo dục tư duy phê phán và logic",
        "Phổ biến kiến thức về quy luật tự nhiên"
      ],
      icon: FiBookOpen,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
    },
    {
      method: "Phát triển kinh tế - xã hội",
      description: "Cải thiện đời sống nhân dân, giảm bất công xã hội",
      examples: [
        "Xóa đói giảm nghèo, tạo việc làm",
        "Phát triển y tế, giáo dục, văn hóa",
        "Đảm bảo công bằng xã hội"
      ],
      icon: FiTarget,
      color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
    },
    {
      method: "Xây dựng văn hóa mới",
      description: "Tạo ra những giá trị văn hóa tiến bộ thay thế tôn giáo",
      examples: [
        "Phát triển nghệ thuật, thể thao, giải trí",
        "Xây dựng cộng đồng đoàn kết, tương trợ",
        "Tạo ra ý nghĩa cuộc sống mới"
      ],
      icon: FiUsers,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
    },
    {
      method: "Quản lý và kiểm soát",
      description: "Ngăn chặn lợi dụng tôn giáo, đảm bảo ổn định xã hội",
      examples: [
        "Kiểm soát hoạt động tôn giáo hợp pháp",
        "Ngăn chặn các hoạt động phản động",
        "Xử lý nghiêm các hành vi vi phạm pháp luật"
      ],
      icon: FiShield,
      color: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
    }
  ];

  const challenges = [
    {
      challenge: "Tính bền vững của ý thức tôn giáo",
      description: "Ý thức tôn giáo thay đổi chậm hơn tồn tại xã hội",
      solution: "Cần thời gian dài và kiên trì trong giáo dục"
    },
    {
      challenge: "Sự đa dạng của tôn giáo",
      description: "Mỗi tôn giáo có đặc điểm và nhu cầu khác nhau",
      solution: "Cần có chính sách linh hoạt, phù hợp từng tôn giáo"
    },
    {
      challenge: "Áp lực từ bên ngoài",
      description: "Các thế lực thù địch lợi dụng tôn giáo chống phá",
      solution: "Tăng cường cảnh giác và đấu tranh chính trị"
    },
    {
      challenge: "Cân bằng giữa tự do và quản lý",
      description: "Vừa đảm bảo tự do tín ngưỡng vừa quản lý chặt chẽ",
      solution: "Xây dựng khung pháp lý hoàn thiện và minh bạch"
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
              {data.definition}
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <ContentCard
              title="Tại sao tôn giáo vẫn tồn tại trong XHCN?"
              icon="🤔"
              pageId="socialism-why-exists"
              image={data.image}
              imageCaption={data.imageCaption}
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {data.reason}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Các yếu tố ảnh hưởng:
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Trình độ dân trí:</strong> Đặc biệt ở vùng sâu, vùng xa
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Điều kiện kinh tế:</strong> Còn khó khăn, chưa đủ cơ sở vật chất
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Truyền thống văn hóa:</strong> Tôn giáo đã ăn sâu vào đời sống
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Quan điểm khoa học:
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Ý thức thay đổi chậm:</strong> Cần thời gian dài để thay đổi
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Không thể cưỡng ép:</strong> Phải dựa vào sự tự giác
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Giải quyết từ gốc:</strong> Thay đổi điều kiện sinh hoạt
                    </li>
                  </ul>
                </div>
              </div>
            </ContentCard>
          </motion.div>

          {/* Policies Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Timeline
              items={policyTimeline}
              title="Chính sách xử lý tôn giáo trong XHCN"
              delay={0.4}
            />
          </motion.div>

          {/* Policies Detail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <ContentCard
              title="Chi tiết các chính sách"
              icon="📋"
              pageId="socialism-policies-detail"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.policies.map((policy, index) => (
                  <motion.div
                    key={policy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{policy.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {policy.text}
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Chính sách cơ bản trong xử lý tôn giáo
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Implementation Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <ContentCard
              title="Phương pháp thực hiện"
              icon="⚙️"
              pageId="socialism-implementation"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {implementationMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <method.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {method.method}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        Các biện pháp cụ thể:
                      </h4>
                      <ul className="space-y-1">
                        {method.examples.map((example, exIndex) => (
                          <li key={exIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <ContentCard
              title="Ví dụ thực tiễn"
              icon="🌍"
              pageId="socialism-example"
            >
              <QuoteBox
                quote={data.example}
                variant="info"
              />

              <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Bài học kinh nghiệm:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">
                      ✅ Thành công:
                    </h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Không cấm tuyệt đối hoạt động tôn giáo</li>
                      <li>• Khuyến khích phát triển khoa học</li>
                      <li>• Nâng cao dân trí một cách tự nhiên</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 dark:text-red-300 mb-2">
                      ⚠️ Cần tránh:
                    </h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Dùng bạo lực để cấm tôn giáo</li>
                      <li>• Áp đặt ý chí chủ quan</li>
                      <li>• Bỏ qua quy luật khách quan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ContentCard>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <ContentCard
              title="Thách thức và khó khăn"
              icon="⚠️"
              pageId="socialism-challenges"
            >
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
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
                      questions={socialismQuiz}
                      title="Quiz: Tôn giáo trong xã hội chủ nghĩa"
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
              pageId="socialism-religion"
              pageTitle="Tôn giáo trong xã hội chủ nghĩa"
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
                Tiếp tục khám phá
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Bây giờ hãy tìm hiểu về chính sách tôn giáo cụ thể của Việt Nam
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/vietnam-policy"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FiBookOpen className="mr-2" size={20} />
                  Chính sách Việt Nam
                </a>
                <a
                  href="/practical"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Thực tiễn Việt Nam
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialismReligion;
