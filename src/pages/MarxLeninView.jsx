import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../components/Content/ContentCard';
import QuoteBox from '../components/Content/QuoteBox';
import Quiz from '../components/Interactive/Quiz';
import NoteTaking from '../components/Interactive/NoteTaking';
import MainContentSidebar from '../components/Layout/MainContentSidebar';
import { contentData } from '../data/content';
import { quizData } from '../data/quiz';
import { FiBookOpen, FiTarget, FiUsers, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const MarxLeninView = () => {
  const data = contentData.banChatTonGiao;

  // Filter quiz questions related to Marx-Lenin view
  const marxLeninQuiz = quizData.filter(q =>
    q.question.includes('Mác') ||
    q.question.includes('Lênin') ||
    q.question.includes('bản chất tôn giáo')
  );

  const characteristics = data.characteristics.map((char, index) => ({
    ...char,
    delay: index * 0.1
  }));

  const historicalContext = [
    {
      period: "Thế kỷ XIX",
      event: "Karl Marx phát triển quan điểm về tôn giáo",
      description: "Trong bối cảnh cách mạng công nghiệp và sự bất công xã hội",
      significance: "Đặt nền móng cho quan điểm khoa học về tôn giáo"
    },
    {
      period: "Đầu thế kỷ XX",
      event: "V.I. Lenin kế thừa và phát triển",
      description: "Áp dụng quan điểm Mác vào thực tiễn cách mạng Nga",
      significance: "Hoàn thiện lý thuyết về tôn giáo trong xã hội chủ nghĩa"
    },
    {
      period: "Hiện tại",
      event: "Ứng dụng vào thực tiễn Việt Nam",
      description: "Chính sách tôn giáo phù hợp với điều kiện Việt Nam",
      significance: "Đảm bảo ổn định xã hội và phát triển bền vững"
    }
  ];

  const keyPrinciples = [
    {
      principle: "Duy vật lịch sử",
      description: "Tôn giáo là sản phẩm của điều kiện kinh tế - xã hội cụ thể",
      example: "Tôn giáo phong kiến khác tôn giáo tư bản chủ nghĩa"
    },
    {
      principle: "Phê phán tôn giáo",
      description: "Tôn giáo phản ánh hư ảo hiện thực, cần được phê phán khoa học",
      example: "Thay vì tin vào thần linh, cần tìm hiểu nguyên nhân thực tế"
    },
    {
      principle: "Cách mạng xã hội",
      description: "Xóa bỏ cơ sở xã hội của tôn giáo thông qua cách mạng",
      example: "Xây dựng xã hội công bằng, bình đẳng để giảm nhu cầu tôn giáo"
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
            {data.introduction}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content - Takes 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <ContentCard
              title="Quan điểm cơ bản"
              icon="🎯"
              pageId="marx-lenin-basic"
              image={data.image}
              imageCaption={data.imageCaption}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Mác-Lênin coi tôn giáo là một hiện tượng xã hội có nguồn gốc từ điều kiện
                sinh hoạt vật chất và tinh thần của con người. Quan điểm này dựa trên phương
                pháp duy vật lịch sử, cho rằng tôn giáo không phải là hiện tượng siêu nhiên
                hay vĩnh cửu, mà là sản phẩm của xã hội trong những điều kiện lịch sử cụ thể.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Phương pháp tiếp cận:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Duy vật lịch sử:</strong> Phân tích tôn giáo trong bối cảnh kinh tế - xã hội
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Phê phán khoa học:</strong> Đánh giá tôn giáo dựa trên cơ sở khoa học
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Thực tiễn cách mạng:</strong> Áp dụng vào việc xây dựng xã hội mới
                  </li>
                </ul>
              </div>
            </ContentCard>
          </motion.div>

          {/* Sidebar - Takes 1 column on large screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MainContentSidebar
              title="Nội dung chương"
              showProgress={false}
              showStats={false}
            />
          </motion.div>
        </div>

        {/* Characteristics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ContentCard
              title="Ba đặc điểm cơ bản của tôn giáo"
              icon="📋"
              pageId="marx-lenin-characteristics"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {characteristics.map((char, index) => (
                  <motion.div
                    key={char.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: char.delay }}
                    className={`${char.color} dark:bg-opacity-20 rounded-lg p-6`}
                  >
                    <div className="text-3xl mb-4">{char.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {char.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {char.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Sidebar for Characteristics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <ContentCard
              title="Đặc điểm tóm tắt"
              icon="📝"
              pageId="marx-lenin-char-summary"
            >
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Sản phẩm xã hội</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Xuất hiện khi con người bất lực trước tự nhiên và xã hội</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Phản ánh hư ảo</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Thay vì giải thích bằng khoa học, dùng niềm tin siêu nhiên</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Thuốc an thần</h4>
                  <p className="text-sm text-red-700 dark:text-red-300">Xoa dịu nỗi khổ tinh thần nhưng làm con người cam chịu</p>
                </div>
              </div>
            </ContentCard>
          </motion.div>
        </div>

        {/* Key Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <ContentCard
              title="Nguyên lý cơ bản"
              icon="⚖️"
              pageId="marx-lenin-principles"
            >
              <div className="space-y-6">
                {keyPrinciples.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {principle.principle}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {principle.description}
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Ví dụ:</strong> {principle.example}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Sidebar for Key Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <ContentCard
              title="Nguyên lý tóm tắt"
              icon="⚖️"
              pageId="marx-lenin-principles-summary"
            >
              <div className="space-y-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Duy vật lịch sử</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">Tôn giáo là sản phẩm của điều kiện kinh tế - xã hội</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Biện chứng</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">Vừa có mặt tích cực vừa có mặt tiêu cực</p>
                </div>
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Thực tiễn cách mạng</h4>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">Áp dụng vào việc xây dựng xã hội mới</p>
                </div>
              </div>
            </ContentCard>
          </motion.div>
        </div>

        {/* Historical Context */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <ContentCard
              title="Bối cảnh lịch sử phát triển"
              icon="📚"
              pageId="marx-lenin-history"
            >
              <div className="space-y-6">
                {historicalContext.map((context, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white mr-3">
                          {context.event}
                        </h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                          {context.period}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        {context.description}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Ý nghĩa:</strong> {context.significance}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentCard>
          </motion.div>

          {/* Sidebar for Historical Context */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <ContentCard
              title="Timeline lịch sử"
              icon="📅"
              pageId="marx-lenin-timeline"
            >
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">Thế kỷ XIX</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Karl Marx phát triển quan điểm</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100">Đầu thế kỷ XX</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">V.I. Lenin kế thừa và phát triển</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100">Hiện tại</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Ứng dụng vào thực tiễn Việt Nam</p>
                </div>
              </div>
            </ContentCard>
          </motion.div>
        </div>

        {/* Example */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-2"
          >
            <ContentCard
              title={data.example.title}
              icon="💡"
              pageId="marx-lenin-example"
            >
              <QuoteBox
                quote={data.example.content}
                variant="warning"
              />

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Phân tích ví dụ:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Bất lực trước tự nhiên:</strong> Nông dân không hiểu nguyên nhân thiên tai, hạn hán
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Bất lực trước xã hội:</strong> Không thể thay đổi chế độ áp bức bóc lột
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Phản ánh hư ảo:</strong> Tin vào "số mệnh" thay vì tìm hiểu nguyên nhân thực tế
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Thuốc an thần:</strong> Xoa dịu nỗi khổ nhưng làm chậm quá trình đấu tranh
                  </li>
                </ul>
              </div>
            </ContentCard>
          </motion.div>

          {/* Sidebar for Example */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-6"
          >
            <ContentCard
              title="Phân tích ví dụ"
              icon="🔍"
              pageId="marx-lenin-example-analysis"
            >
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Bất lực trước tự nhiên</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">Không hiểu nguyên nhân thiên tai</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">Bất lực trước xã hội</h4>
                  <p className="text-sm text-red-700 dark:text-red-300">Không thể thay đổi chế độ áp bức</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Phản ánh hư ảo</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Tin vào "số mệnh" thay vì khoa học</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Thuốc an thần</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Xoa dịu nỗi khổ nhưng làm chậm đấu tranh</p>
                </div>
              </div>
            </ContentCard>
          </motion.div>
        </div>

        {/* Conclusion */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="lg:col-span-2"
          >
            <ContentCard
              title="Kết luận"
              icon="✅"
              pageId="marx-lenin-conclusion"
            >
              <QuoteBox
                quote={data.conclusion}
                variant="success"
              />

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center">
                    <FiCheckCircle className="mr-2" size={16} />
                    Mặt tích cực
                  </h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• An ủi tinh thần cho con người</li>
                    <li>• Gắn kết cộng đồng</li>
                    <li>• Bảo tồn giá trị văn hóa</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center">
                    <FiTarget className="mr-2" size={16} />
                    Mặt tiêu cực
                  </h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Làm chậm quá trình nhận thức</li>
                    <li>• Cản trở cải tạo xã hội</li>
                    <li>• Có thể bị lợi dụng</li>
                  </ul>
                </div>
              </div>
            </ContentCard>
          </motion.div>

          {/* Sidebar for Conclusion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-6"
          >
            <ContentCard
              title="Tóm tắt quan điểm"
              icon="📋"
              pageId="marx-lenin-summary"
            >
              <div className="space-y-4">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center">
                    <FiCheckCircle className="mr-2" size={16} />
                    Mặt tích cực
                  </h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• An ủi tinh thần</li>
                    <li>• Gắn kết cộng đồng</li>
                    <li>• Bảo tồn văn hóa</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center">
                    <FiTarget className="mr-2" size={16} />
                    Mặt tiêu cực
                  </h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Làm chậm nhận thức</li>
                    <li>• Cản trở cải tạo xã hội</li>
                    <li>• Có thể bị lợi dụng</li>
                  </ul>
                </div>
              </div>
            </ContentCard>
          </motion.div>
        </div>

        {/* Quiz Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <Quiz
            questions={marxLeninQuiz}
            title="Quiz: Quan điểm Mác-Lênin về tôn giáo"
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
            pageId="marx-lenin-view"
            pageTitle="Quan điểm Mác-Lênin về tôn giáo"
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
              Bây giờ bạn đã hiểu quan điểm Mác-Lênin, hãy tìm hiểu về tôn giáo trong xã hội chủ nghĩa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/socialism-religion"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FiBookOpen className="mr-2" size={20} />
                Tôn giáo trong XHCN
              </a>
              <a
                href="/vietnam-policy"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Chính sách Việt Nam
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarxLeninView;
