import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const steps = [
    { title: 'Giới thiệu', href: '/introduction' },
    { title: 'Quan điểm Mác-Lênin', href: '/marx-lenin-view' },
    { title: 'Tôn giáo trong XHCN', href: '/socialism-religion' },
    { title: 'Chính sách Việt Nam', href: '/vietnam-policy' },
    { title: 'Thực tiễn Việt Nam', href: '/practical' },
    { title: 'Giải pháp', href: '/solutions' },
    { title: 'Kết luận', href: '/conclusion' }
];

const LearningNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const activeIndex = useMemo(() => {
        const idx = steps.findIndex(s => s.href === location.pathname);
        return idx === -1 ? 0 : idx;
    }, [location.pathname]);

    const percent = Math.round(((activeIndex + 1) / steps.length) * 100);

    // track visited steps in localStorage
    useEffect(() => {
        const key = 'visited-steps';
        const current = (() => {
            try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
        })();
        if (!current.includes(activeIndex)) {
            const updated = [...current, activeIndex].sort((a, b) => a - b);
            localStorage.setItem(key, JSON.stringify(updated));
        }
    }, [activeIndex]);

    const allCompleted = useMemo(() => {
        try {
            const visited = JSON.parse(localStorage.getItem('visited-steps') || '[]');
            return steps.every((_, idx) => visited.includes(idx));
        } catch {
            return false;
        }
    }, [location.pathname]);

    // auto-advance when reaching bottom of page
    useEffect(() => {
        const onScroll = () => {
            const scrollBottom = window.innerHeight + window.scrollY;
            const docHeight = document.body.offsetHeight - 2; // tolerance
            if (scrollBottom >= docHeight && activeIndex < steps.length - 1) {
                navigate(steps[activeIndex + 1].href);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [activeIndex, navigate]);

    const handlePrev = () => {
        if (activeIndex > 0) navigate(steps[activeIndex - 1].href);
    };

    const handleNext = () => {
        if (activeIndex < steps.length - 1) navigate(steps[activeIndex + 1].href);
    };

    return (
        <div className="sticky top-16 z-30 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                {/* Progress bar */}
                <div className="mb-3">
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <motion.div
                            className="h-1.5 bg-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${percent}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Hoàn thành {percent}%</div>
                </div>

                {/* Stepper + controls */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={handlePrev}
                        disabled={activeIndex === 0}
                        className={`inline-flex items-center px-3 py-2 rounded-lg border text-sm transition-colors ${activeIndex === 0
                            ? 'border-gray-200 text-gray-400 dark:border-gray-700 dark:text-gray-600 cursor-not-allowed'
                            : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                            }`}
                    >
                        <FiChevronLeft className="mr-1" /> Trước
                    </button>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                        {steps.map((step, idx) => {
                            const done = idx < activeIndex || allCompleted;
                            const active = idx === activeIndex;
                            return (
                                <button
                                    key={step.href}
                                    onClick={() => navigate(step.href)}
                                    className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${active
                                        ? 'bg-blue-600 text-white'
                                        : done
                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                    title={step.title}
                                >
                                    <span className="mr-1 text-xs">
                                        {done ? <FiCheckCircle className="inline" /> : idx + 1}
                                    </span>
                                    {step.title}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={activeIndex === steps.length - 1}
                        className={`inline-flex items-center px-3 py-2 rounded-lg border text-sm transition-colors ${activeIndex === steps.length - 1
                            ? 'border-gray-200 text-gray-400 dark:border-gray-700 dark:text-gray-600 cursor-not-allowed'
                            : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                            }`}
                    >
                        Tiếp <FiChevronRight className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearningNav;


