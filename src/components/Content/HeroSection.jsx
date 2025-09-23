import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiUsers, FiTarget } from 'react-icons/fi';

const HeroSection = () => {
  const features = [
    {
      icon: FiBookOpen,
      title: "Nội dung chuyên sâu",
      description: "Kiến thức đầy đủ về quan điểm Mác-Lênin về tôn giáo"
    },
    {
      icon: FiUsers,
      title: "Tương tác cao",
      description: "Quiz, tìm kiếm, ghi chú và nhiều tính năng học tập"
    },
    {
      icon: FiTarget,
      title: "Thực tiễn Việt Nam",
      description: "Liên hệ với chính sách và thực tiễn tại Việt Nam"
    }
  ];

  return (
    <section
      className="relative py-24"
      style={{
        background: 'var(--portfolio-bg)',
        backgroundImage: "url('/assets/portfolio/Background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative assets from Portfolio pack (render only if present) */}
        <img src="/assets/portfolio/Ellipse 1.png" alt="" className="hidden md:block absolute -top-24 -right-24 w-80 opacity-60" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        <img src="/assets/portfolio/Ellipse 2.png" alt="" className="hidden md:block absolute -bottom-24 -left-24 w-80 opacity-50" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        <img src="/assets/portfolio/Gradient.png" alt="" className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Bản chất tôn giáo theo quan điểm
              <span className="block bg-gradient-to-r from-blue-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                Mác – Lênin
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Khám phá và hiểu sâu về quan điểm khoa học của chủ nghĩa Mác-Lênin
              về tôn giáo, từ lý thuyết đến thực tiễn tại Việt Nam hiện nay.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/introduction"
              className="btn-primary-portfolio"
            >
              Bắt đầu học ngay
              <FiArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/marx-lenin-view"
              className="inline-flex items-center px-8 py-4 rounded-full glass text-white"
            >
              Tìm hiểu quan điểm Mác-Lênin
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                className="text-center p-6 card-portfolio text-white"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-300" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
