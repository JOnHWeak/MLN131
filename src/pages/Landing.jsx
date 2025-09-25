import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiGlobe,
  FiFlag,
  FiUsers,
  FiSliders,
  FiMap,
  FiAperture,
  FiFeather,
} from "react-icons/fi";
import ReligiousIdeologyCarousel from "../components/Content/ReligiousIdeologyCarousel";
import VietnamReligionHomepage from "../components/Content/VietNamReligion";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                <FiBookOpen className="mr-2" /> Tôn giáo và ý thức hệ
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                CQ8.3 & CQ8.5
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
              Giao diện học tập trình bày trực quan
            </h1>
            <p className="max-w-2xl mx-auto">
              Trang mở đầu dùng cho thuyết trình: tóm tắt chủ đề, bố cục mạch
              lạc, dễ theo dõi trên cả màn hình lớn và di động.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link to="/introduction" className="btn-primary-portfolio">
                Khám phá
              </Link>
              <a
                href="#cq83"
                className="inline-flex items-center px-6 py-3 rounded-full glass"
              >
                Xem nội dung
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CQ8.3 */}
      <section id="cq83" className="">
        <ReligiousIdeologyCarousel />
      </section>

      {/* Section CQ8.5 */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold  mb-2">
            CQ8.5: Việt Nam là quốc gia đa tôn giáo, vậy đã từng có chiến tranh
            tôn giáo ở Việt Nam hay không? Tại sao?
          </h2>

          <div>
            <VietnamReligionHomepage />
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
