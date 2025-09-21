import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiRotateCcw, FiAward } from 'react-icons/fi';

const Quiz = ({ questions, title = "Quiz kiểm tra kiến thức" }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswers(prev => [...prev, {
      questionIndex: currentQuestion,
      selectedAnswer: answerIndex,
      correctAnswer: questions[currentQuestion].correct,
      isCorrect
    }]);
    
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return {
        emoji: '🎉',
        message: 'Xuất sắc! Bạn đã nắm vững kiến thức.',
        color: 'text-green-600'
      };
    } else if (percentage >= 60) {
      return {
        emoji: '😊',
        message: 'Khá tốt! Bạn cần ôn lại một số phần.',
        color: 'text-yellow-600'
      };
    } else {
      return {
        emoji: '📚',
        message: 'Bạn cần học thêm để hiểu rõ hơn nội dung.',
        color: 'text-red-600'
      };
    }
  };

  if (showResult) {
    const scoreInfo = getScoreMessage();
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto p-6"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-6xl mb-4"
          >
            {scoreInfo.emoji}
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Kết quả Quiz
          </h2>
          
          <div className="mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-300">
              Câu trả lời đúng
            </div>
          </div>
          
          <div className={`text-xl font-semibold mb-6 ${scoreInfo.color}`}>
            {scoreInfo.message}
          </div>
          
          {/* Detailed results */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Chi tiết kết quả:
            </h3>
            <div className="space-y-3">
              {answers.map((answer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Câu {answer.questionIndex + 1}
                  </span>
                  <div className="flex items-center">
                    {answer.isCorrect ? (
                      <FiCheckCircle className="text-green-500 mr-2" size={20} />
                    ) : (
                      <FiXCircle className="text-red-500 mr-2" size={20} />
                    )}
                    <span className={`text-sm font-medium ${
                      answer.isCorrect ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {answer.isCorrect ? 'Đúng' : 'Sai'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <FiRotateCcw className="mr-2" size={18} />
              Làm lại Quiz
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
            >
              <FiAward className="mr-2" size={18} />
              Xem nội dung
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Câu {currentQuestion + 1} / {questions.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Tiến độ
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((currentQuestion + 1) / questions.length) * 100}%` 
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          
          {/* Question */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 leading-relaxed">
            {questions[currentQuestion].question}
          </h3>
          
          {/* Options */}
          <div className="space-y-3 mb-6">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === questions[currentQuestion].correct;
              const showCorrect = selectedAnswer !== null;
              
              let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
              
              if (showCorrect) {
                if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
                } else if (isSelected) {
                  buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                } else {
                  buttonClass += "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400";
                }
              } else {
                buttonClass += "border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300";
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      showCorrect && isCorrect ? 'border-green-500 bg-green-500' :
                      showCorrect && isSelected && !isCorrect ? 'border-red-500 bg-red-500' :
                      'border-gray-300 dark:border-gray-600'
                    }`}>
                      {showCorrect && isCorrect && <FiCheckCircle className="text-white" size={14} />}
                      {showCorrect && isSelected && !isCorrect && <FiXCircle className="text-white" size={14} />}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Explanation */}
          {selectedAnswer !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            >
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Giải thích:</strong> {questions[currentQuestion].explanation}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
