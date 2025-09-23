import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiGlobe, FiFlag, FiUsers, FiSliders, FiMap, FiAperture, FiFeather } from 'react-icons/fi';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                <FiBookOpen className="mr-2" /> Tôn giáo và ý thức hệ
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">CQ8.3 & CQ8.5</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">Giao diện học tập trình bày trực quan</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">Trang mở đầu dùng cho thuyết trình: tóm tắt chủ đề, bố cục mạch lạc, dễ theo dõi trên cả màn hình lớn và di động.</p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link to="/introduction" className="btn-primary-portfolio">Khám phá</Link>
              <a href="#cq83" className="inline-flex items-center px-6 py-3 rounded-full glass text-white">Xem nội dung</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CQ8.3 */}
      <section id="cq83" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">CQ8.3: Sự khác biệt ý thức hệ tôn giáo</h2>
          <p className="text-gray-300 mb-6">5 yếu tố giải thích khác biệt giữa các hệ tư tưởng tôn giáo.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              icon: <FiMap className="text-blue-600" size={20} />, title: 'Bối cảnh lịch sử/địa lý', desc: 'Khác biệt về vùng miền, lịch sử hình thành làm xuất hiện hệ giá trị khác nhau.'
            }, {
              icon: <FiGlobe className="text-blue-600" size={20} />, title: 'Quan niệm vũ trụ/nhận thức', desc: 'Cách lý giải thế giới, nguồn gốc và mục đích sống khác nhau.'
            }, {
              icon: <FiAperture className="text-blue-600" size={20} />, title: 'Nhu cầu tâm linh', desc: 'Nhu cầu an ủi tinh thần, đạo đức, nghi lễ, cộng đồng.'
            }, {
              icon: <FiSliders className="text-blue-600" size={20} />, title: 'Chính trị & trật tự xã hội', desc: 'Vai trò tôn giáo trong quản trị, luật lệ và quyền lực.'
            }, {
              icon: <FiFeather className="text-blue-600" size={20} />, title: 'Cạnh tranh bản sắc', desc: 'Khẳng định bản sắc văn hóa – tôn giáo có thể tạo khác biệt/va chạm.'
            }].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card-portfolio">
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">{c.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                </div>
                <p className="text-gray-300">{c.desc}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-300">
                  <div className="glass rounded p-2 text-center">Thiên Chúa giáo</div>
                  <div className="glass rounded p-2 text-center">Đạo giáo</div>
                  <div className="glass rounded p-2 text-center">Thượng đế</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CQ8.5 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">CQ8.5: Tình hình tôn giáo ở Việt Nam</h2>
          <p className="text-gray-300 mb-6">Các đặc điểm nổi bật dưới dạng infographic.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
              icon: <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">◯◯◯</div>, title: 'Văn hóa dung hòa (tam giáo đồng nguyên)', desc: 'Phật – Nho – Lão giao thoa, ít đối kháng trực diện.'
            }, {
              icon: <FiUsers className="text-yellow-700" size={20} />, title: 'Trọng tình hơn lý', desc: 'Cấu trúc làng xã, cộng đồng – tình làng nghĩa xóm đậm.'
            }, {
              icon: <FiFlag className="text-yellow-700" size={20} />, title: 'Ngoại bang và chính trị', desc: 'Ảnh hưởng lịch sử và quyền lực nhà nước tới sinh hoạt tôn giáo.'
            }, {
              icon: <FiFeather className="text-yellow-700" size={20} />, title: 'Bản địa hóa', desc: 'Hấp thụ – biến đổi theo bản sắc Việt (tre, đình…).'
            }].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card-portfolio">
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">{c.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                </div>
                <p className="text-gray-300">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlight box */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card-portfolio">
              <h3 className="text-lg font-semibold text-white mb-2">Tóm tắt</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>“Các tôn giáo khác nhau phản ánh bối cảnh và nhu cầu khác nhau”.</li>
                <li>“Ở Việt Nam, tôn giáo dung hòa hơn là đối kháng”.</li>
              </ul>
            </div>
            <div className="card-portfolio">
              <h3 className="text-lg font-semibold text-white mb-2">Nguồn ảnh & tham khảo</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Hình biểu tượng tôn giáo, Thích Quảng Đức…</li>
                <li>Ảnh nền minh họa e-learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Explore */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/introduction" className="btn-primary-portfolio">
            Khám phá
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;


