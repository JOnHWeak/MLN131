import { motion } from "framer-motion";
import ContentCard from "../components/Content/ContentCard";
import QuoteBox from "../components/Content/QuoteBox";
import Timeline from "../components/Content/Timeline";
import NoteTaking from "../components/Interactive/NoteTaking";
import MainContentSidebar from "../components/Layout/MainContentSidebar";
import RightSidebar from "../components/Layout/RightSidebar";
import { FiBookOpen, FiTarget, FiUsers, FiTrendingUp } from "react-icons/fi";

const Introduction = () => {
  const learningObjectives = [
    "Nắm vững quan điểm Mác-Lênin về bản chất tôn giáo",
    "Hiểu rõ vai trò và vị trí của tôn giáo trong xã hội",
    "Phân tích được mối quan hệ giữa tôn giáo và chính trị",
    "Áp dụng kiến thức vào thực tiễn Việt Nam",
  ];

  const courseStructure = [
    {
      title: "Bản chất tôn giáo theo quan điểm Mác-Lênin",
      description: "Tìm hiểu quan điểm khoa học về tôn giáo",
      completed: true,
      details: [
        "Tôn giáo là sản phẩm xã hội",
        "Phản ánh hư ảo hiện thực khách quan",
        "Thuốc an thần của nhân dân",
      ],
      tags: ["Lý thuyết", "Cơ bản"],
    },
    {
      title: "Quan điểm về tôn giáo trong xã hội chủ nghĩa",
      description: "Chính sách và biện pháp xử lý tôn giáo",
      completed: true,
      details: [
        "Không dùng bạo lực xóa bỏ tôn giáo",
        "Tôn trọng quyền tự do tín ngưỡng",
        "Xây dựng cơ sở xã hội mới",
      ],
      tags: ["Chính sách", "XHCN"],
    },
    {
      title: "Chính sách tôn giáo của Việt Nam",
      description: "Thực tiễn chính sách tôn giáo tại Việt Nam",
      completed: false,
      details: [
        "Bảo đảm tự do tín ngưỡng",
        "Bình đẳng trước pháp luật",
        "Ngăn chặn lợi dụng tôn giáo",
      ],
      tags: ["Việt Nam", "Thực tiễn"],
    },
    {
      title: "Liên hệ thực tiễn và giải pháp",
      description: "Áp dụng vào thực tiễn và đề xuất giải pháp",
      completed: false,
      details: [
        "Hòa hợp tôn giáo trong xã hội",
        "Phát huy vai trò tích cực",
        "Đấu tranh với hành vi lợi dụng",
      ],
      tags: ["Thực tiễn", "Giải pháp"],
    },
  ];

  const keyConcepts = [
    {
      term: "Tôn giáo",
      definition:
        "Một hệ thống niềm tin, thờ cúng và thực hành tâm linh của con người, thường liên quan đến sự tồn tại của thần linh hoặc quyền lực siêu nhiên.",
      importance: "Khái niệm cơ bản nhất của môn học",
    },
    {
      term: "Chủ nghĩa Mác-Lênin",
      definition:
        "Học thuyết khoa học về cách mạng xã hội, do Karl Marx và V.I. Lenin phát triển, là nền tảng tư tưởng của chủ nghĩa xã hội.",
      importance: "Nền tảng lý thuyết chính",
    },
    {
      term: "Xã hội chủ nghĩa",
      definition:
        "Chế độ xã hội dựa trên sở hữu công cộng về tư liệu sản xuất, xóa bỏ áp bức bóc lột, đảm bảo công bằng xã hội.",
      importance: "Mục tiêu phát triển xã hội",
    },
    {
      term: "Tự do tín ngưỡng",
      definition:
        "Quyền cơ bản của con người được tự do tin theo hoặc không tin theo bất kỳ tôn giáo, tín ngưỡng nào.",
      importance: "Nguyên tắc cơ bản trong chính sách tôn giáo",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Fixed Sidebar */}
        <div className="hidden lg:block w-80 bg-white shadow-lg fixed left-0 top-0 h-screen overflow-y-auto z-10">
          <div className="p-6 pb-20">
            <MainContentSidebar
              title="Nội dung chương"
              showProgress={false}
              showStats={false}
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-80 lg:mr-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold !text-black mb-6">
                Giới thiệu môn học
              </h1>
              <p className="text-xl !text-black max-w-3xl mx-auto leading-relaxed">
                "Bản chất tôn giáo theo quan điểm Mác – Lênin" - Môn học cung
                cấp kiến thức cơ bản về quan điểm khoa học đối với hiện tượng
                tôn giáo trong xã hội
              </p>
            </motion.div>

            {/* Course Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <ContentCard
                title="Tổng quan môn học"
                icon="📚"
                pageId="introduction-overview"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold !text-black mb-4">
                      Mục đích môn học
                    </h3>
                    <p className="!text-black leading-relaxed mb-6">
                      Môn học nhằm trang bị cho sinh viên những kiến thức cơ bản
                      về quan điểm khoa học của chủ nghĩa Mác-Lênin đối với hiện
                      tượng tôn giáo trong xã hội. Thông qua việc nghiên cứu lý
                      thuyết và thực tiễn, sinh viên sẽ hiểu rõ bản chất, vai
                      trò và vị trí của tôn giáo trong quá trình xây dựng xã hội
                      chủ nghĩa.
                    </p>

                    <h3 className="text-lg font-semibold !text-black mb-4">
                      Đối tượng học tập
                    </h3>
                    <ul className="space-y-2 !text-black">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Sinh viên các ngành khoa học xã hội và nhân văn
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Cán bộ, công chức làm việc trong lĩnh vực tôn giáo
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Những người quan tâm đến vấn đề tôn giáo và xã hội
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold !text-black mb-4">
                      Mục tiêu học tập
                    </h3>
                    <div className="space-y-3">
                      {learningObjectives.map((objective, index) => (
                        <div
                          key={index}
                          className="flex items-start !text-black"
                        >
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <FiTarget className="text-green-600" size={12} />
                          </div>
                          <span className="!text-black">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ContentCard>
            </motion.div>

            {/* Key Concepts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <ContentCard
                title="Khái niệm cơ bản"
                icon="🔑"
                pageId="introduction-concepts"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {keyConcepts.map((concept, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-4 !text-black"
                    >
                      <h4 className="font-semibold !text-black mb-2">
                        {concept.term}
                      </h4>
                      <p className="text-sm !text-black mb-2">
                        {concept.definition}
                      </p>
                      <div className="text-xs text-blue-600 font-medium">
                        {concept.importance}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ContentCard>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <Timeline
                items={courseStructure}
                title="Cấu trúc môn học"
                delay={0.6}
              />
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <QuoteBox
                quote="Tôn giáo là sản phẩm xã hội, xuất hiện khi con người bất lực trước tự nhiên và xã hội, phản ánh hư ảo hiện thực khách quan."
                author="Karl Marx"
                source="Tác phẩm 'Phê phán triết học pháp quyền của Hegel'"
                variant="success"
              />
            </motion.div>

            {/* Learning Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-16"
            >
              <ContentCard
                title="Phương pháp học tập"
                icon="🎓"
                pageId="introduction-methods"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 !text-black">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiBookOpen className="text-blue-600" size={24} />
                    </div>
                    <h3 className="font-semibold !text-black mb-2">
                      Học lý thuyết
                    </h3>
                    <p className="text-sm !text-black">
                      Nắm vững các quan điểm cơ bản của Mác-Lênin về tôn giáo
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiUsers className="text-green-600" size={24} />
                    </div>
                    <h3 className="font-semibold !text-black mb-2">
                      Thảo luận nhóm
                    </h3>
                    <p className="text-sm !text-black">
                      Trao đổi ý kiến và phân tích các vấn đề thực tiễn
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiTrendingUp className="text-purple-600" size={24} />
                    </div>
                    <h3 className="font-semibold !text-black mb-2">
                      Áp dụng thực tiễn
                    </h3>
                    <p className="text-sm !text-black">
                      Liên hệ với tình hình tôn giáo tại Việt Nam hiện nay
                    </p>
                  </div>
                </div>
              </ContentCard>
            </motion.div>

            {/* Note Taking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-16"
            >
              <NoteTaking
                pageId="introduction"
                pageTitle="Giới thiệu môn học"
              />
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-4 !text-black">
                  Sẵn sàng bắt đầu?
                </h2>
                <p className="text-xl mb-8 opacity-90 !text-black">
                  Bây giờ bạn đã hiểu rõ về môn học, hãy bắt đầu tìm hiểu quan
                  điểm Mác-Lênin về tôn giáo
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/marx-lenin-view"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <FiBookOpen className="mr-2" size={20} />
                    Tìm hiểu quan điểm Mác-Lênin
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

        {/* Fixed Right Sidebar */}
        <div className="hidden lg:block w-80 bg-white shadow-lg fixed right-0 top-0 h-screen overflow-y-auto z-10">
          <div className="p-6 pb-20">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
