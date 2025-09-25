import React, { useState, useEffect } from "react";
import {
  Users,
  Flag,
  Feather,
  BookOpen,
  Image,
  ExternalLink,
} from "lucide-react";

const VietnamReligionHomepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
          三
        </div>
      ),
      title: "Văn hóa dung hòa (tam giáo đồng nguyên)",
      desc: (
        <div>
          Người Việt có truyền thống “tam giáo đồng nguyên” (Phật – Nho – Lão
          cùng tồn tại). đòi hỏi cần thống nhất sức mạnh vật chất và tinh thần,
          thống nhất tư tưởng, hình thành sự dung hợp giữa yếu tố văn hoá ngoại
          sinh với yếu tố văn hoá địa phương và sự dung hợp giữa các yếu tố văn
          hóa ngoại sinh đã được địa phương hóa với nhau.
          <br />
          Một người có thể vừa đi chùa, vừa thờ ông bà, vừa theo tập tục Nho
          giáo mà không thấy mâu thuẫn.
          <br />
          Chính tinh thần dung hợp này khiến các tôn giáo ít khi đối đầu triệt
          để
        </div>
      ),
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: <Users className="text-amber-700" size={24} />,
      title: "Trọng tình hơn lý",
      desc: (
        <div>
          Người Việt thường coi trọng tình cảm hơn lý trí trong các mối quan hệ
          xã hội.
          <br />
          Điều này thể hiện qua việc xây dựng và duy trì các mối quan hệ gia
          đình, bạn bè và hàng xóm.
          <div className="flex justify-center gap-4 my-4">
            <img
              src="/src/asset/CQ/CQ85-1.jpg"
              alt="Description 1"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      bgGradient: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-200",
    },
    {
      icon: <Flag className="text-orange-700" size={24} />,
      title: "Ngoại bang và chính trị",
      desc: (
        <div>
          Khi có xung đột, nguyên nhân thường là do quyền lực chính trị hoặc sự
          can thiệp ngoại bang, chứ không do niềm tin tôn giáo đối lập nhau.
          <br />
          <div className="flex justify-center gap-4 my-4">
            <img
              src="/src/asset/CQ/CQ85-2.jpg"
              alt="Description 1"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
          Ví dụ: Khủng hoảng Phật giáo 1963 ở miền Nam gắn với chính sách độc
          tài, không phải bản chất giáo lý Công giáo chống lại Phật giáo.
        </div>
      ),
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Feather className="text-yellow-700" size={24} />,
      title: "Bản địa hóa",
      desc: (
        <div>
          Các tôn giáo du nhập (Phật giáo, Công giáo, Tin Lành…) đều có sự Việt
          hóa để hòa nhập vào tín ngưỡng dân gian. Nhờ đó, giảm xung đột giữa
          “tôn giáo mới” và “tín ngưỡng cũ”.
          <div className="flex justify-center gap-4 my-4">
            <img
              src="/src/asset/CQ/CQ85-3.jpg"
              alt="Description 1"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      bgGradient: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50">
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${
                  feature.bgGradient
                } p-8 border ${
                  feature.borderColor
                } shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150 + 600}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>

                <div className="relative">
                  {/* Icon Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 flex space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default VietnamReligionHomepage;
