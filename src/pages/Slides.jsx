import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import { contentData } from '../data/content';
import { quizData } from '../data/quiz';
import Quiz from '../components/Interactive/Quiz';

const buildSlides = () => {
  const slides = [];
  const sections = [
    contentData.banChatTonGiao,
    contentData.tonGiaoTrongXHCN,
    contentData.chinhSachVietNam,
    contentData.thucTienVietNam,
    contentData.giaiPhap,
    contentData.ketLuan
  ];

  sections.forEach((sec) => {
    slides.push({
      type: 'content',
      title: sec.title,
      image: sec.image,
      imageCaption: sec.imageCaption,
      body: sec.introduction || sec.definition || undefined,
      bullets: (sec.characteristics?.map(c => `${c.icon} ${c.title}`))
        || (sec.policies?.map(p => `${p.icon || ''} ${p.title || p.text}`))
        || sec.achievements
        || sec.mainPoints
        || sec.solutions?.flatMap(s => s.items) 
        || []
    });
  });

  // Final quiz slide
  slides.push({ type: 'quiz', title: 'Kiểm tra tổng kết' });
  return slides;
};

const Slides = () => {
  const slides = useMemo(buildSlides, []);
  const [index, setIndex] = useState(0);
  const isLast = index === slides.length - 1;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(slides.length - 1, i + 1));

  const progress = Math.round(((index + 1) / slides.length) * 100);

  return (
    <div className="min-h-screen" style={{ background: 'var(--portfolio-bg)' }}>
      <div className="sticky top-16 z-20 px-4 sm:px-6 lg:px-8 py-3 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <motion.div className="h-1.5 bg-blue-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 text-xs text-gray-300">Hoàn thành {progress}%</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <button onClick={goPrev} disabled={index === 0} className={`inline-flex items-center px-3 py-2 rounded-lg border text-sm ${index === 0 ? 'border-gray-700 text-gray-600 cursor-not-allowed' : 'border-gray-600 text-gray-200 hover:bg-gray-800'}`}>
            <FiChevronLeft className="mr-1" /> Trước
          </button>
          <div className="text-gray-300 text-sm">Slide {index + 1}/{slides.length}</div>
          <button onClick={goNext} disabled={isLast} className={`inline-flex items-center px-3 py-2 rounded-lg border text-sm ${isLast ? 'border-gray-700 text-gray-600 cursor-not-allowed' : 'border-gray-600 text-gray-200 hover:bg-gray-800'}`}>
            Tiếp <FiChevronRight className="ml-1" />
          </button>
        </div>

        <div className="glass p-6 md:p-10 text-white">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}>
              {slides[index].type === 'content' && (
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-4">{slides[index].title}</h1>
                  {slides[index].body && <p className="text-gray-300 mb-6">{slides[index].body}</p>}
                  {slides[index].image && (
                    <div className="image-container mb-4">
                      <img src={slides[index].image} alt="" />
                    </div>
                  )}
                  {!!slides[index].bullets?.length && (
                    <ul className="space-y-2">
                      {slides[index].bullets.map((b, i) => (
                        <li key={i} className="flex items-start text-gray-200">
                          <FiCheckCircle className="mt-1 mr-2 text-blue-400" size={16} /> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {slides[index].type === 'quiz' && (
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-6">Quiz tổng kết</h1>
                  <Quiz questions={quizData} title="Kiểm tra kiến thức toàn bộ nội dung" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slides;


