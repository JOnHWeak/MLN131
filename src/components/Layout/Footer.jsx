import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiMail, FiBookOpen } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Thông tin về ứng dụng */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FiBookOpen className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold">Mác-Lênin & Tôn giáo</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ứng dụng học tập tương tác về bản chất tôn giáo theo quan điểm Mác – Lênin. 
              Được thiết kế để hỗ trợ sinh viên nắm vững kiến thức một cách hiệu quả và thú vị.
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nội dung chính</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/introduction" className="text-gray-300 hover:text-white transition-colors">
                  Giới thiệu môn học
                </a>
              </li>
              <li>
                <a href="/marx-lenin-view" className="text-gray-300 hover:text-white transition-colors">
                  Quan điểm Mác-Lênin
                </a>
              </li>
              <li>
                <a href="/vietnam-policy" className="text-gray-300 hover:text-white transition-colors">
                  Chính sách Việt Nam
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  Giải pháp hiện tại
                </a>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Thông tin</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <FiMail size={16} />
                <span>support@marxlenin-app.edu.vn</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FiGithub size={16} />
                <a 
                  href="https://github.com" 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
              <div className="text-gray-300">
                <p>Phiên bản: 1.0.0</p>
                <p>Cập nhật: {currentYear}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>Được tạo với</span>
              <FiHeart className="text-red-500" size={16} />
              <span>và React</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Mác-Lênin & Tôn giáo App. Tất cả quyền được bảo lưu.
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
