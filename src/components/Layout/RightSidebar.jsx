import React from 'react';
import { motion } from 'framer-motion';
import ContentCard from '../Content/ContentCard';
import { FiBookOpen, FiTarget, FiUsers, FiZap } from 'react-icons/fi';

const RightSidebar = ({ className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`space-y-6 ${className}`}
        >
            {/* Study Tips */}
            <ContentCard
                title="Mẹo học tập"
                icon="💡"
                pageId="study-tips"
            >
                <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1 flex items-center">
                            <FiBookOpen className="mr-2" size={16} />
                            Đọc lý thuyết trước
                        </h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                            Nắm vững khái niệm cơ bản trước khi làm bài tập
                        </p>
                    </div>

                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1 flex items-center">
                            <FiTarget className="mr-2" size={16} />
                            Làm quiz thường xuyên
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                            Kiểm tra kiến thức qua các câu hỏi trắc nghiệm
                        </p>
                    </div>

                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1 flex items-center">
                            <FiUsers className="mr-2" size={16} />
                            Ghi chú quan trọng
                        </h4>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                            Sử dụng tính năng ghi chú để lưu ý điểm quan trọng
                        </p>
                    </div>

                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1 flex items-center">
                            <FiZap className="mr-2" size={16} />
                            Thảo luận nhóm
                        </h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                            Thảo luận với bạn bè để hiểu sâu hơn về các vấn đề phức tạp
                        </p>
                    </div>
                </div>
            </ContentCard>

            {/* Quick Actions */}
            <ContentCard
                title="Thao tác nhanh"
                icon="⚡"
                pageId="quick-actions"
            >
                <div className="space-y-2">
                    <button className="w-full p-3 text-left rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        <div className="font-medium text-blue-900 dark:text-blue-100">Làm bài quiz</div>
                        <div className="text-sm text-blue-700 dark:text-blue-300">Kiểm tra kiến thức</div>
                    </button>

                    <button className="w-full p-3 text-left rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                        <div className="font-medium text-green-900 dark:text-green-100">Ghi chú</div>
                        <div className="text-sm text-green-700 dark:text-green-300">Lưu ý quan trọng</div>
                    </button>

                    <button className="w-full p-3 text-left rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                        <div className="font-medium text-purple-900 dark:text-purple-100">Tìm kiếm</div>
                        <div className="text-sm text-purple-700 dark:text-purple-300">Tìm nội dung</div>
                    </button>
                </div>
            </ContentCard>

            {/* Progress Summary */}
            <ContentCard
                title="Tóm tắt tiến độ"
                icon="📊"
                pageId="progress-summary"
            >
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Chương đã học</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">0/7</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: '0%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                        Bắt đầu học để theo dõi tiến độ
                    </div>
                </div>
            </ContentCard>
        </motion.div>
    );
};

export default RightSidebar;
