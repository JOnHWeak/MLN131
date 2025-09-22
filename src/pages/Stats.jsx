import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../components/Content/ContentCard';
import StatisticsChart from '../components/Content/StatisticsChart';
import MainContentSidebar from '../components/Layout/MainContentSidebar';
import RightSidebar from '../components/Layout/RightSidebar';
import { FiBarChart, FiTrendingUp, FiUsers, FiClock } from 'react-icons/fi';

const Stats = () => {
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

    const courseStats = {
        totalChapters: 7,
        totalQuestions: 50,
        estimatedTime: 180,
        difficulty: 'Trung bình',
        completionRate: 0,
        averageScore: 0
    };

    const religionDistribution = [
        { name: 'Phật giáo', percentage: 58.2, followers: '14.9 triệu' },
        { name: 'Công giáo', percentage: 27.3, followers: '7.0 triệu' },
        { name: 'Tin Lành', percentage: 5.5, followers: '1.4 triệu' },
        { name: 'Cao Đài', percentage: 5.1, followers: '1.3 triệu' },
        { name: 'Hòa Hảo', percentage: 4.7, followers: '1.2 triệu' },
        { name: 'Khác', percentage: 0.8, followers: '0.2 triệu' }
    ];

    const policyMetrics = [
        { name: 'Tự do tín ngưỡng', value: 95, color: 'bg-green-500' },
        { name: 'Bình đẳng tôn giáo', value: 90, color: 'bg-blue-500' },
        { name: 'Hoạt động hợp pháp', value: 88, color: 'bg-purple-500' },
        { name: 'Ngăn chặn lợi dụng', value: 85, color: 'bg-orange-500' }
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
                                Thống kê và phân tích
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Số liệu chi tiết về tôn giáo và chính sách tôn giáo tại Việt Nam
                            </p>
                        </motion.div>

                        {/* Course Statistics */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Thống kê môn học"
                                icon="📊"
                                pageId="course-stats"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                                        <FiBarChart className="mx-auto mb-2 text-blue-600 dark:text-blue-400" size={24} />
                                        <h3 className="font-semibold text-blue-900 dark:text-blue-100">Tổng chương</h3>
                                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{courseStats.totalChapters}</p>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                                        <FiUsers className="mx-auto mb-2 text-green-600 dark:text-green-400" size={24} />
                                        <h3 className="font-semibold text-green-900 dark:text-green-100">Câu hỏi</h3>
                                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">{courseStats.totalQuestions}+</p>
                                    </div>
                                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                                        <FiClock className="mx-auto mb-2 text-purple-600 dark:text-purple-400" size={24} />
                                        <h3 className="font-semibold text-purple-900 dark:text-purple-100">Thời gian</h3>
                                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{courseStats.estimatedTime} phút</p>
                                    </div>
                                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                                        <FiTrendingUp className="mx-auto mb-2 text-orange-600 dark:text-orange-400" size={24} />
                                        <h3 className="font-semibold text-orange-900 dark:text-orange-100">Độ khó</h3>
                                        <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{courseStats.difficulty}</p>
                                    </div>
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Religion Distribution Chart */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Phân bố tôn giáo tại Việt Nam"
                                icon="📈"
                                pageId="religion-distribution"
                            >
                                <div className="mb-6">
                                    <StatisticsChart data={religionStatsData} type="doughnut" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {religionDistribution.map((religion, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                            <div className="flex items-center">
                                                <div className={`w-4 h-4 rounded-full mr-3 ${index === 0 ? 'bg-blue-500' :
                                                    index === 1 ? 'bg-green-500' :
                                                        index === 2 ? 'bg-yellow-500' :
                                                            index === 3 ? 'bg-red-500' :
                                                                index === 4 ? 'bg-purple-500' : 'bg-gray-500'
                                                    }`}></div>
                                                <span className="font-medium text-gray-900 dark:text-white">{religion.name}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-semibold text-gray-900 dark:text-white">{religion.percentage}%</div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">{religion.followers}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Policy Effectiveness */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Hiệu quả chính sách tôn giáo"
                                icon="🎯"
                                pageId="policy-effectiveness"
                            >
                                <div className="mb-6">
                                    <StatisticsChart data={policyEffectivenessData} type="bar" />
                                </div>
                                <div className="space-y-4">
                                    {policyMetrics.map((metric, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span className="font-medium text-gray-900 dark:text-white">{metric.name}</span>
                                            <div className="flex items-center">
                                                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                                                    <div
                                                        className={`h-2 rounded-full ${metric.color}`}
                                                        style={{ width: `${metric.value}%` }}
                                                    ></div>
                                                </div>
                                                <span className="font-semibold text-gray-900 dark:text-white w-12 text-right">
                                                    {metric.value}%
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Learning Analytics */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Phân tích học tập"
                                icon="📚"
                                pageId="learning-analytics"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tỷ lệ hoàn thành</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Lý thuyết Mác-Lênin</span>
                                                <span className="font-semibold text-gray-900 dark:text-white">0%</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Chính sách Việt Nam</span>
                                                <span className="font-semibold text-gray-900 dark:text-white">0%</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Thực tiễn ứng dụng</span>
                                                <span className="font-semibold text-gray-900 dark:text-white">0%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Thời gian học</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Hôm nay</span>
                                                <span className="font-semibold text-gray-900 dark:text-white">0 phút</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Tuần này</span>
                                                <span className="font-semibold text-gray-900 dark:text-white">0 phút</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Tổng cộng</span>
                                                <span className="font-semibold text-gray-900 dark:text-white">0 phút</span>
                                            </div>
                                        </div>
                                    </div>
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

export default Stats;
