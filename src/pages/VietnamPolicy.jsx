import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../components/Content/ContentCard';
import QuoteBox from '../components/Content/QuoteBox';
import StatisticsChart from '../components/Content/StatisticsChart';
import Quiz from '../components/Interactive/Quiz';
import NoteTaking from '../components/Interactive/NoteTaking';
import { contentData } from '../data/content';
import { quizData } from '../data/quiz';
import { FiFlag, FiShield, FiUsers, FiBookOpen, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

const VietnamPolicy = () => {
  const data = contentData.chinhSachVietNam;

  // Filter quiz questions related to Vietnam policy
  const vietnamQuiz = quizData.filter(q => 
    q.question.includes('Việt Nam') || 
    q.question.includes('Hiến pháp') || 
    q.question.includes('chính sách')
  );

  // Chart data for policy effectiveness
  const policyEffectivenessData = {
    labels: ['Tự do tín ngưỡng', 'Bình đẳng tôn giáo', 'Hoạt động hợp pháp', 'Ngăn chặn lợi dụng'],
    datasets: [
      {
        label: 'Mức độ hiệu quả (%)',
        data: [95, 90, 88, 85],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)'
        ],
        borderWidth: 2
      }
    ]
  };

  const legalFramework = [
    {
      document: "Hiến pháp 2013",
      article: "Điều 24",
      content: "Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo tôn giáo nào",
      importance: "Cao nhất"
    },
    {
      document: "Luật Tín ngưỡng, Tôn giáo 2016",
      article: "Toàn bộ",
      content: "Quy định chi tiết về quyền và nghĩa vụ của tổ chức, cá nhân trong hoạt động tôn giáo",
      importance: "Cao"
    },
    {
      document: "Nghị định 162/2017/NĐ-CP",
      article: "Hướng dẫn thi hành",
      content: "Hướng dẫn chi tiết thi hành Luật Tín ngưỡng, Tôn giáo",
      importance: "Trung bình"
    },
    {
      document: "Các văn bản khác",
      article: "Nhiều văn bản",
      content: "Quy định về quản lý nhà nước, an ninh, trật tự trong hoạt động tôn giáo",
      importance: "Hỗ trợ"
    }
  ];

  const policyImplementation = [
    {
      area: "Công nhận tổ chức tôn giáo",
      status: "Thành công",
      description: "43 tổ chức tôn giáo được công nhận",
      details: [
        "Giáo hội Phật giáo Việt Nam",
        "Giáo hội Công giáo Việt Nam", 
        "Tổng hội thánh Tin Lành Việt Nam",
        "Các tổ chức Cao Đài, Hòa Hảo, Hồi giáo..."
      ],
      icon: FiCheckCircle,
      color: "text-green-600"
    },
    {
      area: "Xây dựng cơ sở thờ tự",
      status: "Tích cực",
      description: "Hàng nghìn cơ sở thờ tự được xây dựng, tu bổ",
      details: [
        "Chùa, nhà thờ, đền, miếu",
        "Trung tâm sinh hoạt tôn giáo",
        "Cơ sở đào tạo chức sắc",
        "Cơ sở từ thiện, xã hội"
      ],
      icon: FiUsers,
      color: "text-blue-600"
    },
    {
      area: "Đào tạo chức sắc",
      status: "Hiệu quả",
      description: "Hàng chục nghìn chức sắc được đào tạo",
      details: [
        "Đào tạo chính quy tại các trường",
        "Bồi dưỡng kiến thức pháp luật",
        "Nâng cao trình độ chuyên môn",
        "Đào tạo kỹ năng quản lý"
      ],
      icon: FiBookOpen,
      color: "text-purple-600"
    },
    {
      area: "Ngăn chặn lợi dụng",
      status: "Cảnh giác",
      description: "Xử lý nghiêm các hành vi lợi dụng tôn giáo",
      details: [
        "Giám sát hoạt động tôn giáo",
        "Xử lý vi phạm pháp luật",
        "Ngăn chặn hoạt động phản động",
        "Bảo vệ an ninh quốc gia"
      ],
      icon: FiShield,
      color: "text-red-600"
    }
  ];

  const challenges = [
    {
      challenge: "Đa dạng tôn giáo",
      description: "Việt Nam có nhiều tôn giáo với đặc điểm khác nhau",
      impact: "Cần có chính sách linh hoạt, phù hợp từng tôn giáo",
      solution: "Xây dựng khung pháp lý chung nhưng có hướng dẫn cụ thể"
    },
    {
      challenge: "Áp lực quốc tế",
      description: "Một số nước và tổ chức quốc tế can thiệp vào vấn đề tôn giáo",
      impact: "Gây khó khăn trong quản lý và bảo vệ chủ quyền",
      solution: "Tăng cường đối thoại, giải thích chính sách rõ ràng"
    },
    {
      challenge: "Cân bằng tự do và quản lý",
      description: "Vừa đảm bảo tự do tín ngưỡng vừa quản lý chặt chẽ",
      impact: "Khó khăn trong việc xác định ranh giới",
      solution: "Xây dựng tiêu chí rõ ràng, minh bạch"
    },
    {
      challenge: "Phát triển kinh tế - xã hội",
      description: "Cần phát triển kinh tế để giảm nhu cầu tôn giáo",
      impact: "Đòi hỏi đầu tư lớn và thời gian dài",
      solution: "Ưu tiên phát triển giáo dục, y tế, xóa đói giảm nghèo"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
            Chính sách tôn giáo của Việt Nam được xây dựng trên cơ sở quan điểm Mác-Lênin 
            và phù hợp với điều kiện thực tế của đất nước
          </p>
        </motion.div>

        {/* Main Policies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <ContentCard
            title="Các chính sách cơ bản"
            icon="📋"
            pageId="vietnam-policies"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.policies.map((policy, index) => (
                <motion.div
                  key={policy.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 ${policy.color}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{policy.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {policy.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {policy.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ContentCard>
        </motion.div>

        {/* Legal Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <ContentCard
            title="Khung pháp lý"
            icon="⚖️"
            pageId="vietnam-legal-framework"
          >
            <div className="space-y-4">
              {legalFramework.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {doc.document}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {doc.article}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      doc.importance === 'Cao nhất' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
                      doc.importance === 'Cao' ? 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300' :
                      doc.importance === 'Trung bình' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                      'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                    }`}>
                      {doc.importance}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {doc.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </ContentCard>
        </motion.div>

        {/* Policy Implementation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <ContentCard
            title="Tình hình thực hiện"
            icon="📊"
            pageId="vietnam-implementation"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policyImplementation.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <item.icon className={`${item.color} mt-1`} size={24} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.area}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-sm px-2 py-1 rounded ${
                          item.status === 'Thành công' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                          item.status === 'Tích cực' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                          item.status === 'Hiệu quả' ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
                          'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Các hoạt động cụ thể:
                    </h4>
                    <ul className="space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </ContentCard>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <ContentCard
            title="Hiệu quả chính sách"
            icon="📈"
            pageId="vietnam-statistics"
          >
            <StatisticsChart
              data={policyEffectivenessData}
              type="bar"
              title="Mức độ hiệu quả các chính sách tôn giáo"
              delay={0.8}
            />
          </ContentCard>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <ContentCard
            title="Ví dụ thực tiễn"
            icon="🌍"
            pageId="vietnam-examples"
          >
            <div className="space-y-4">
              {data.examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                  className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4"
                >
                  <div className="flex items-start space-x-3">
                    <FiFlag className="text-blue-600 dark:text-blue-400 mt-1" size={16} />
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
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <ContentCard
            title="Thách thức và khó khăn"
            icon="⚠️"
            pageId="vietnam-challenges"
          >
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <FiAlertTriangle className="text-orange-500 mt-1" size={20} />
                    <div className="flex-1">
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ContentCard>
        </motion.div>

        {/* Quiz Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <Quiz 
            questions={vietnamQuiz} 
            title="Quiz: Chính sách tôn giáo Việt Nam"
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
            pageId="vietnam-policy" 
            pageTitle="Chính sách tôn giáo Việt Nam" 
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
              Bây giờ hãy tìm hiểu về thực tiễn hòa hợp tôn giáo tại Việt Nam
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/practical"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FiBookOpen className="mr-2" size={20} />
                Thực tiễn Việt Nam
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Giải pháp hiện tại
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VietnamPolicy;
