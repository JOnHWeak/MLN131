import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../components/Content/ContentCard';
import MainContentSidebar from '../components/Layout/MainContentSidebar';
import RightSidebar from '../components/Layout/RightSidebar';
import { FiTrendingUp, FiClock, FiCheckCircle, FiTarget } from 'react-icons/fi';

const Progress = () => {
    const progressData = {
        overall: 0,
        chapters: 7,
        completed: 0,
        timeSpent: 0,
        estimatedTime: 180 // 3 hours in minutes
    };

    const chapters = [
        {
            id: 1,
            title: "Bản chất tôn giáo theo quan điểm Mác-Lênin",
            completed: false,
            progress: 0,
            timeSpent: 0,
            estimatedTime: 25
        },
        {
            id: 2,
            title: "Quan điểm về tôn giáo trong xã hội chủ nghĩa",
            completed: false,
            progress: 0,
            timeSpent: 0,
            estimatedTime: 20
        },
        {
            id: 3,
            title: "Chính sách tôn giáo của Việt Nam",
            completed: false,
            progress: 0,
            timeSpent: 0,
            estimatedTime: 30
        },
        {
            id: 4,
            title: "Liên hệ thực tiễn – Hòa hợp tôn giáo trong xã hội Việt Nam",
            completed: false,
            progress: 0,
            timeSpent: 0,
            estimatedTime: 25
        },
        {
            id: 5,
            title: "Giải pháp trong giai đoạn hiện nay",
            completed: false,
            progress: 0,
            timeSpent: 0,
            estimatedTime: 20
        },
        {
            id: 6,
            title: "Kết luận",
            completed: false,
            progress: 0,
            timeSpent: 0,
            estimatedTime: 15
        }
    ];

    const achievements = [
        {
            title: "Bắt đầu học",
            description: "Hoàn thành chương đầu tiên",
            icon: "🎯",
            unlocked: false
        },
        {
            title: "Tiến bộ",
            description: "Hoàn thành 50% môn học",
            icon: "📈",
            unlocked: false
        },
        {
            title: "Kiên trì",
            description: "Học liên tục 7 ngày",
            icon: "🔥",
            unlocked: false
        },
        {
            title: "Hoàn thành",
            description: "Hoàn thành tất cả chương",
            icon: "🏆",
            unlocked: false
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
                                Tiến độ học tập
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Theo dõi quá trình học tập và đạt được mục tiêu
                            </p>
                        </motion.div>

                        {/* Overall Progress */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Tổng quan tiến độ"
                                icon="📊"
                                pageId="overall-progress"
                            >
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                            {progressData.overall}%
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
                                            <div
                                                className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                                                style={{ width: `${progressData.overall}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {progressData.completed}/{progressData.chapters} chương đã hoàn thành
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                                            <FiCheckCircle className="mx-auto mb-2 text-blue-600 dark:text-blue-400" size={24} />
                                            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Chương hoàn thành</h3>
                                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{progressData.completed}</p>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                                            <FiClock className="mx-auto mb-2 text-green-600 dark:text-green-400" size={24} />
                                            <h3 className="font-semibold text-green-900 dark:text-green-100">Thời gian học</h3>
                                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{progressData.timeSpent}h</p>
                                        </div>
                                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                                            <FiTarget className="mx-auto mb-2 text-purple-600 dark:text-purple-400" size={24} />
                                            <h3 className="font-semibold text-purple-900 dark:text-purple-100">Mục tiêu</h3>
                                            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{progressData.chapters}</p>
                                        </div>
                                    </div>
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Chapter Progress */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Tiến độ từng chương"
                                icon="📚"
                                pageId="chapter-progress"
                            >
                                <div className="space-y-4">
                                    {chapters.map((chapter) => (
                                        <div key={chapter.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${chapter.completed
                                                        ? 'bg-green-100 dark:bg-green-900/20'
                                                        : 'bg-gray-100 dark:bg-gray-700'
                                                        }`}>
                                                        {chapter.completed ? (
                                                            <FiCheckCircle className="text-green-600 dark:text-green-400" size={16} />
                                                        ) : (
                                                            <span className="text-gray-500 dark:text-gray-400 text-sm">{chapter.id}</span>
                                                        )}
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                                        {chapter.title}
                                                    </h3>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                                        {chapter.timeSpent}/{chapter.estimatedTime} phút
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                                        {chapter.progress}% hoàn thành
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full transition-all duration-500 ${chapter.completed
                                                        ? 'bg-green-500'
                                                        : 'bg-blue-500'
                                                        }`}
                                                    style={{ width: `${chapter.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Thành tích"
                                icon="🏆"
                                pageId="achievements"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {achievements.map((achievement, index) => (
                                        <div
                                            key={index}
                                            className={`p-4 rounded-lg border-2 ${achievement.unlocked
                                                ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                                                : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                                                }`}
                                        >
                                            <div className="flex items-center">
                                                <div className={`text-2xl mr-3 ${achievement.unlocked ? '' : 'grayscale opacity-50'
                                                    }`}>
                                                    {achievement.icon}
                                                </div>
                                                <div>
                                                    <h3 className={`font-semibold ${achievement.unlocked
                                                        ? 'text-green-900 dark:text-green-100'
                                                        : 'text-gray-500 dark:text-gray-400'
                                                        }`}>
                                                        {achievement.title}
                                                    </h3>
                                                    <p className={`text-sm ${achievement.unlocked
                                                        ? 'text-green-700 dark:text-green-300'
                                                        : 'text-gray-500 dark:text-gray-400'
                                                        }`}>
                                                        {achievement.description}
                                                    </p>
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

export default Progress;
