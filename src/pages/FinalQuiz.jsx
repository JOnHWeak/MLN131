import React from 'react';
import { motion } from 'framer-motion';
import Quiz from '../components/Interactive/Quiz';
import { quizData } from '../data/quiz';

const FinalQuiz = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quiz tổng hợp</h1>
                <Quiz questions={quizData} title="Kiểm tra kiến thức toàn bộ nội dung" />
            </motion.div>
        </div>
    );
};

export default FinalQuiz;


