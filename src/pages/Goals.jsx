import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../components/Content/ContentCard';
import MainContentSidebar from '../components/Layout/MainContentSidebar';
import RightSidebar from '../components/Layout/RightSidebar';
import { FiTarget, FiCheckCircle, FiClock, FiTrendingUp } from 'react-icons/fi';

const Goals = () => {
    const learningGoals = [
        {
            id: 1,
            title: "Nắm vững quan điểm Mác-Lênin về tôn giáo",
            description: "Hiểu rõ bản chất, nguồn gốc và vai trò của tôn giáo trong xã hội",
            priority: "Cao",
            deadline: "Tuần 1",
            completed: false,
            progress: 0
        },
        {
            id: 2,
            title: "Hiểu rõ chính sách tôn giáo của Việt Nam",
            description: "Nắm vững các nguyên tắc và nội dung chính sách tôn giáo",
            priority: "Cao",
            deadline: "Tuần 2",
            completed: false,
            progress: 0
        },
        {
            id: 3,
            title: "Áp dụng kiến thức vào thực tiễn",
            description: "Phân tích và đánh giá các vấn đề tôn giáo trong thực tế",
            priority: "Trung bình",
            deadline: "Tuần 3",
            completed: false,
            progress: 0
        },
        {
            id: 4,
            title: "Hoàn thành tất cả bài quiz",
            description: "Đạt điểm trung bình trên 80% trong các bài kiểm tra",
            priority: "Trung bình",
            deadline: "Tuần 4",
            completed: false,
            progress: 0
        }
    ];

    const milestones = [
        {
            title: "Hoàn thành chương 1",
            description: "Bản chất tôn giáo theo quan điểm Mác-Lênin",
            targetDate: "Ngày 1-3",
            completed: false
        },
        {
            title: "Hoàn thành chương 2-3",
            description: "Quan điểm về tôn giáo trong XHCN và chính sách VN",
            targetDate: "Ngày 4-7",
            completed: false
        },
        {
            title: "Hoàn thành chương 4-5",
            description: "Thực tiễn và giải pháp",
            targetDate: "Ngày 8-10",
            completed: false
        },
        {
            title: "Hoàn thành chương 6-7",
            description: "Kết luận và tổng kết",
            targetDate: "Ngày 11-14",
            completed: false
        }
    ];

    const studyPlan = [
        {
            day: "Ngày 1-2",
            focus: "Lý thuyết cơ bản",
            tasks: ["Đọc chương 1", "Làm quiz chương 1", "Ghi chú quan trọng"],
            time: "2-3 giờ"
        },
        {
            day: "Ngày 3-4",
            focus: "Quan điểm Mác-Lênin",
            tasks: ["Nghiên cứu sâu chương 2", "Thảo luận nhóm", "Làm bài tập"],
            time: "2-3 giờ"
        },
        {
            day: "Ngày 5-7",
            focus: "Chính sách Việt Nam",
            tasks: ["Học chương 3-4", "Phân tích case study", "Làm quiz"],
            time: "3-4 giờ"
        },
        {
            day: "Ngày 8-10",
            focus: "Thực tiễn ứng dụng",
            tasks: ["Học chương 5-6", "Thực hành phân tích", "Chuẩn bị bài thuyết trình"],
            time: "2-3 giờ"
        }
    ];

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Cao': return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300';
            case 'Trung bình': return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300';
            case 'Thấp': return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300';
            default: return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
        }
    };

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
                                Mục tiêu học tập
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Đặt mục tiêu và theo dõi tiến độ học tập của bạn
                            </p>
                        </motion.div>

                        {/* Learning Goals */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Mục tiêu học tập"
                                icon="🎯"
                                pageId="learning-goals"
                            >
                                <div className="space-y-6">
                                    {learningGoals.map((goal) => (
                                        <div key={goal.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-start">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${goal.completed
                                                            ? 'bg-green-100 dark:bg-green-900/20'
                                                            : 'bg-gray-100 dark:bg-gray-700'
                                                        }`}>
                                                        {goal.completed ? (
                                                            <FiCheckCircle className="text-green-600 dark:text-green-400" size={16} />
                                                        ) : (
                                                            <span className="text-gray-500 dark:text-gray-400 text-sm">{goal.id}</span>
                                                        )}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                            {goal.title}
                                                        </h3>
                                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                                            {goal.description}
                                                        </p>
                                                        <div className="flex items-center space-x-4">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                                                                {goal.priority}
                                                            </span>
                                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                                Hạn: {goal.deadline}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full transition-all duration-500 ${goal.completed
                                                            ? 'bg-green-500'
                                                            : 'bg-blue-500'
                                                        }`}
                                                    style={{ width: `${goal.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Milestones */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Cột mốc quan trọng"
                                icon="🏁"
                                pageId="milestones"
                            >
                                <div className="space-y-4">
                                    {milestones.map((milestone, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${milestone.completed
                                                    ? 'bg-green-100 dark:bg-green-900/20'
                                                    : 'bg-gray-100 dark:bg-gray-700'
                                                }`}>
                                                {milestone.completed ? (
                                                    <FiCheckCircle className="text-green-600 dark:text-green-400" size={16} />
                                                ) : (
                                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                                                        {index + 1}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                                    {milestone.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {milestone.targetDate}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Study Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Kế hoạch học tập"
                                icon="📅"
                                pageId="study-plan"
                            >
                                <div className="space-y-6">
                                    {studyPlan.map((plan, index) => (
                                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                                    {plan.day}
                                                </h3>
                                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                    <FiClock className="mr-1" size={16} />
                                                    {plan.time}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                                                    {plan.focus}
                                                </span>
                                            </div>
                                            <div className="space-y-2">
                                                {plan.tasks.map((task, taskIndex) => (
                                                    <div key={taskIndex} className="flex items-center">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                        <span className="text-sm text-gray-700 dark:text-gray-300">{task}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>
                        </motion.div>

                        {/* Motivation */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mb-16"
                        >
                            <ContentCard
                                title="Động lực học tập"
                                icon="💪"
                                pageId="motivation"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                                            Lợi ích kiến thức
                                        </h3>
                                        <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                                            <li>• Hiểu rõ quan điểm khoa học về tôn giáo</li>
                                            <li>• Nắm vững chính sách tôn giáo của Việt Nam</li>
                                            <li>• Phát triển tư duy phân tích và phê phán</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                        <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                                            Kỹ năng đạt được
                                        </h3>
                                        <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                                            <li>• Phân tích các vấn đề xã hội phức tạp</li>
                                            <li>• Áp dụng lý thuyết vào thực tiễn</li>
                                            <li>• Tư duy đa chiều và toàn diện</li>
                                        </ul>
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

export default Goals;
