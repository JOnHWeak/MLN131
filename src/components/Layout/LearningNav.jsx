import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

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

    return (
        <aside className="hidden md:block fixed inset-y-0 left-0 z-30 w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-r border-gray-200 dark:border-gray-700">
            <div className="h-full flex flex-col">
                <div className="p-4">
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <motion.div className="h-1.5 bg-blue-600 rounded-full" initial={{ width: 0 }} animate={{ width: `${percent}%` }} transition={{ duration: 0.3 }} />
                    </div>
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Hoàn thành {percent}%</div>
                </div>

                <nav className="flex-1 overflow-y-auto p-3">
                    <ul className="space-y-2">
                        {steps.map((step, idx) => {
                            const done = idx < activeIndex || allCompleted;
                            const active = idx === activeIndex;
                            return (
                                <li key={step.href}>
                                    <button
                                        onClick={() => navigate(step.href)}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${active
                                            ? 'bg-blue-600 text-white'
                                            : done
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                                            }`}
                                    >
                                        <span className="mr-2 text-xs">
                                            {done ? <FiCheckCircle className="inline" /> : idx + 1}
                                        </span>
                                        {step.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default LearningNav;


