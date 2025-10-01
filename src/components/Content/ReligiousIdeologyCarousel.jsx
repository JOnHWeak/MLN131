import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Map,
  Globe,
  Aperture,
  Sliders,
  Feather,
} from "lucide-react";

// Import images so Vite bundles them for production
import CQ83_1 from "../../asset/CQ/CQ83-1.jpg";
import CQ83_2 from "../../asset/CQ/CQ83-2.jpg";
import CQ83_3 from "../../asset/CQ/CQ83-3.jpg";
import CQ83_4 from "../../asset/CQ/CQ83-4.jpg";
import CQ83_5 from "../../asset/CQ/CQ83-5.jpg";
import CQ83_6 from "../../asset/CQ/CQ83-6.jpg";
import CQ83_7 from "../../asset/CQ/CQ83-7.jpg";
import CQ83_8 from "../../asset/CQ/CQ83-8.jpg";

const ReligiousIdeologyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Map className="" size={24} />,
      title: "Bối cảnh lịch sử/địa lý",
      desc: (
        <div>
          Mỗi tôn giáo ra đời trong một thời điểm và không gian văn hóa riêng
          biệt.
          <div className="flex justify-center gap-4 my-4">
            <img
              src={CQ83_3}
              alt="Description 1"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
          Ví dụ: Phật giáo phát triển ở Ấn Độ trong bối cảnh xã hội phân tầng,
          nên nhấn mạnh đến sự giải thoát khỏi khổ đau; trong khi Hồi giáo ra
          đời ở bán đảo Ả Rập, nơi bộ lạc và luật lệ đóng vai trò quan trọng,
          nên có hệ thống luật pháp rõ ràng.
        </div>
      ),
      examples: ["Thiên Chúa giáo", "Đạo giáo", "Thượng đế"],
    },
    {
      icon: <Globe className="" size={24} />,
      title: "Quan niệm vũ trụ/nhận thức",
      desc: (
        <div>
          Các tôn giáo có cách lý giải khác nhau về nguồn gốc con người, mục
          đích sống và sự tồn tại sau cái chết.
          <div className="flex justify-center gap-4 my-4">
            <img
              src={CQ83_1}
              alt="Description 1"
              className="w-1/2 rounded-lg shadow-md"
            />
            <img
              src={CQ83_2}
              alt="Description 2"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
          Ví dụ: Thiên Chúa giáo tin vào một Thượng Đế toàn năng và sự cứu rỗi
          qua đức tin; trong khi Đạo giáo lại nhấn mạnh đến sự hòa hợp với tự
          nhiên và Đạo.
        </div>
      ),
      examples: ["Thiên Chúa giáo", "Đạo giáo", "Thượng đế"],
    },
    {
      icon: <Aperture className="" size={24} />,
      title:
        "Biến động hiện đại: toàn cầu hoá, hiện đại hoá, thế tục hoá, phục hưng tôn giáo",
      desc: (
        <div>
          Hiện đại hóa và khoa học làm xói mòn một số nền tảng tín ngưỡng ở nơi
          khác, nhưng cũng kích thích “phục hưng tôn giáo” và chủ nghĩa bản sắc
          ở nơi khác. Toàn cầu hoá, di cư, Internet tạo điều kiện cho cả đa
          nguyên tôn giáo và phân cực tôn giáo (vì công nghệ cũng lan truyền tư
          tưởng cực đoan nhanh hơn). Kết quả là: trong thế giới hiện đại, ta
          thấy đồng thời xu hướng hoà hợp (ecumenism, interfaith dialogue) và xu
          hướng đối kháng, phân ly mạnh mẽ.
          <div className="flex justify-center gap-4 my-4">
            <img
              src={CQ83_4}
              alt="Description 1"
              className="w-1/2 rounded-lg shadow-md"
            />
            <img
              src={CQ83_5}
              alt="Description 2"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      examples: ["Thiên Chúa giáo", "Đạo giáo", "Thượng đế"],
    },
    {
      icon: <Sliders className="" size={24} />,
      title: "Lợi ích chính trị — kinh tế — quyền lực",
      desc: (
        <div>
          Tôn giáo thường liên kết với quyền lực nhà nước (ví dụ Thiên Chúa giáo
          ở châu Âu trung cổ) hoặc bị theo đuổi/đàn áp (ví dụ các phong trào tôn
          giáo bị triều đình chống). Nhà nước, giai cấp hay phong trào chính trị
          có thể sử dụng tôn giáo như công cụ củng cố quyền lực hoặc để vận động
          quần chúng. Điều này làm cho “ý thức hệ tôn giáo” mang màu sắc chính
          trị và dễ dẫn tới đối kháng giữa các nhóm có lợi ích khác nhau. Thêm
          nữa, xung đột kinh tế (đất đai, nguồn lực) thường được che phủ dưới
          lớp áo tôn giáo — làm tăng mức độ “đối lập” tưởng như là vì niềm tin
          nhưng thực chất có nền tảng thế tục.
          <div className="flex justify-center gap-4 my-4">
            <img
              src={CQ83_6}
              alt="Description 1"
              className="w-1/2 rounded-lg shadow-md"
            />
            <img
              src={CQ83_7}
              alt="Description 1"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
          Ví dụ: Công giáo và Tin Lành (Châu Âu thế kỷ 16) Cải cách tôn giáo
          (Martin Luther, John Calvin) xuất phát từ mâu thuẫn về giáo lý, nhưng
          nhanh chóng trở thành cuộc đấu tranh quyền lực. Nhiều lãnh chúa, quốc
          vương ủng hộ Tin Lành để thoát khỏi ảnh hưởng của Giáo hoàng và Giáo
          hội Công giáo.
        </div>
      ),
      examples: ["Thiên Chúa giáo", "Đạo giáo", "Thượng đế"],
    },
    {
      icon: <Feather className="" size={24} />,
      title: "Tính cạnh tranh và khẳng định bản sắc",
      desc: (
        <div>
          Khi nhiều tôn giáo cùng tồn tại, mỗi bên thường nhấn mạnh: “Chân lý
          của ta khác và đúng hơn chân lý kia”. Chính vì vậy, ý thức hệ có xu
          hướng phân cực và đối lập,
          <div className="flex justify-center gap-4 my-4">
            <img
              src={CQ83_8}
              alt="Description 1"
              className="w-1/2 rounded-lg shadow-md"
            />
          </div>
          Ví dụ: Phật giáo phủ nhận sự tồn tại của một Đấng sáng tạo, trong khi
          Kitô giáo và Hồi giáo đặt trọng tâm vào Thượng Đế duy nhất. Một bên
          nhấn mạnh tự lực (Phật giáo: tự mình tu tập), một bên nhấn mạnh tha
          lực (Kitô giáo: tin vào Chúa để được cứu rỗi).
        </div>
      ),
      examples: ["Thiên Chúa giáo", "Đạo giáo", "Thượng đế"],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            CQ8.3: Tại sao các tôn giáo khác nhau lại có những ý thức hệ khác
            nhau, thậm chí đối lập nhau
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="p-8 sm:p-12 text-center min-h-[400px] flex flex-col justify-center">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <div className="text-white">{slide.icon}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                      {slide.desc}
                    </p>

                    {/* Examples */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                : "bg-slate-300 hover:bg-slate-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-slate-200 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-slate-500 font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
};

export default ReligiousIdeologyCarousel;
