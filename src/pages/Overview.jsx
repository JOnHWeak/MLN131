import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../components/Content/ContentCard';
import MainContentSidebar from '../components/Layout/MainContentSidebar';
import RightSidebar from '../components/Layout/RightSidebar';
import { FiBookOpen, FiClock, FiUsers, FiTarget } from 'react-icons/fi';

const Overview = () => {
    const courseInfo = {
        title: "Tôn giáo và chính sách tôn giáo",
        duration: "2-3 giờ học",
        difficulty: "Trung bình",
        chapters: 7,
        questions: "50+",
        description: "Tìm hiểu quan điểm Mác-Lênin về tôn giáo và chính sách tôn giáo của Việt Nam"
    };

    const learningObjectives = [
        "Nắm vững quan điểm Mác-Lênin về bản chất tôn giáo",
        "Hiểu rõ vai trò và vị trí của tôn giáo trong xã hội",
        "Phân tích được mối quan hệ giữa tôn giáo và chính trị",
        "Áp dụng kiến thức vào thực tiễn Việt Nam"
    ];

    const courseStructure = [
        {
            title: "Bản chất tôn giáo theo quan điểm Mác-Lênin",
            description: "Tìm hiểu quan điểm khoa học về tôn giáo",
            completed: false,
            details: [
                "Tôn giáo là sản phẩm xã hội",
                "Phản ánh hư ảo hiện thực khách quan",
                "Thuốc an thần của nhân dân"
            ],
            tags: ["Lý thuyết", "Cơ bản"]
        },
        {
            title: "Quan điểm về tôn giáo trong xã hội chủ nghĩa",
            description: "Vai trò của tôn giáo trong xã hội mới",
            completed: false,
            details: [
                "Không dùng bạo lực để xóa bỏ tôn giáo",
                "Tôn trọng quyền tự do tín ngưỡng",
                "Xây dựng đời sống kinh tế, văn hóa, giáo dục"
            ],
            tags: ["Lý thuyết", "Quan điểm"]
        },
        {
            title: "Chính sách tôn giáo của Việt Nam",
            description: "Thực tiễn chính sách tôn giáo tại Việt Nam",
            completed: false,
            details: [
                "Bảo đảm tự do tín ngưỡng",
                "Bình đẳng trước pháp luật",
                "Bảo đảm hoạt động hợp pháp"
            ],
            tags: ["Thực tiễn", "Chính sách"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="flex">
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
                <div className="flex-1 lg:ml-80 lg:mr-80">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-12"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Tổng quan môn học
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Khám phá quan điểm Mác-Lênin về tôn giáo và chính sách tôn giáo của Việt Nam
                            </p>
                        </motion.div>

                        {/* Course Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Thông tin môn học"
                                icon="📚"
                                pageId="course-info"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <FiBookOpen className="mr-3 text-blue-600 dark:text-blue-400" size={20} />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Tên môn học</h3>
                                                <p className="text-gray-600 dark:text-gray-400">{courseInfo.title}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <FiClock className="mr-3 text-green-600 dark:text-green-400" size={20} />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Thời gian học</h3>
                                                <p className="text-gray-600 dark:text-gray-400">{courseInfo.duration}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <FiTarget className="mr-3 text-purple-600 dark:text-purple-400" size={20} />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Mức độ khó</h3>
                                                <p className="text-gray-600 dark:text-gray-400">{courseInfo.difficulty}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <FiUsers className="mr-3 text-orange-600 dark:text-orange-400" size={20} />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Số chương</h3>
                                                <p className="text-gray-600 dark:text-gray-400">{courseInfo.chapters} chương</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <FiBookOpen className="mr-3 text-red-600 dark:text-red-400" size={20} />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Câu hỏi</h3>
                                                <p className="text-gray-600 dark:text-gray-400">{courseInfo.questions} câu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Mô tả</h3>
                                    <p className="text-blue-700 dark:text-blue-300">{courseInfo.description}</p>
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Learning Objectives */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Mục tiêu học tập"
                                icon="🎯"
                                pageId="learning-objectives"
                            >
                                <div className="space-y-4">
                                    {learningObjectives.map((objective, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-3 mt-1">
                                                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300">{objective}</p>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Course Structure */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Cấu trúc môn học"
                                icon="📖"
                                pageId="course-structure"
                            >
                                <div className="space-y-6">
                                    {courseStructure.map((chapter, index) => (
                                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                        {index + 1}. {chapter.title}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-400 mb-3">{chapter.description}</p>
                                                    <div className="space-y-2">
                                                        {chapter.details.map((detail, detailIndex) => (
                                                            <div key={detailIndex} className="flex items-center">
                                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                                <span className="text-sm text-gray-700 dark:text-gray-300">{detail}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-2 ml-4">
                                                    {chapter.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>
                        </motion.div>
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

export default Overview;
