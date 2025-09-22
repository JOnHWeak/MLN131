// Mapping of images to content sections
export const imageMapping = {
  // Phần 1: Bản chất tôn giáo theo quan điểm Mác – Lênin
  "marx-lenin-religion-concept.jpg": {
    section: "1. Bản chất tôn giáo theo quan điểm Mác – Lênin",
    caption: "Quan điểm Mác-Lênin về bản chất tôn giáo - hiện tượng xã hội có nguồn gốc từ điều kiện sinh hoạt",
    location: "banChatTonGiao.image"
  },

  // Phần 2: Quan điểm về tôn giáo trong xã hội chủ nghĩa
  "classroom-education.jpg": {
    section: "2. Quan điểm về tôn giáo trong xã hội chủ nghĩa",
    caption: "Giáo dục ở vùng sâu, vùng xa - nơi trình độ dân trí còn thấp, tôn giáo vẫn có ảnh hưởng mạnh",
    location: "tonGiaoTrongXHCN.image"
  },

  // Phần 3: Chính sách tôn giáo của Việt Nam hiện nay
  "religious-festival.jpg": {
    section: "3. Chính sách tôn giáo của Việt Nam hiện nay",
    caption: "Lễ hội tôn giáo được tổ chức công khai - thể hiện quyền tự do tín ngưỡng (tự do tổ chức lễ)",
    location: "chinhSachVietNam.image"
  },

  // Phần 4: Liên hệ thực tiễn – Hòa hợp tôn giáo trong xã hội Việt Nam
  "charity-kitchen.jpg": {
    section: "4. Liên hệ thực tiễn – Hòa hợp tôn giáo trong xã hội Việt Nam",
    caption: "Bếp ăn từ thiện - đóng góp tích cực của tôn giáo trong xã hội",
    location: "thucTienVietNam.images[0]"
  },
  "religious-meeting.jpg": {
    section: "4. Liên hệ thực tiễn – Hòa hợp tôn giáo trong xã hội Việt Nam",
    caption: "Chức sắc tôn giáo tham gia Mặt trận Tổ quốc, vận động tín đồ chấp hành pháp luật, bảo vệ môi trường",
    location: "thucTienVietNam.images[1]"
  },

  // Phần 5: Giải pháp trong giai đoạn hiện nay
  "positive-role-of-religion.jpg": {
    section: "5. Giải pháp trong giai đoạn hiện nay",
    caption: "Phát huy vai trò tích cực của tôn giáo - khuyến khích tham gia bảo vệ môi trường, hỗ trợ người nghèo, phát triển giáo dục",
    location: "giaiPhap.image"
  },

  // Phần 6: Kết luận
  "unity-diversity.jpg": {
    section: "6. Kết luận",
    caption: "Đoàn kết các dân tộc, tôn giáo - nền tảng cho sự phát triển bền vững",
    location: "ketLuan.image"
  }
};

// Summary of all images
export const imageSummary = {
  totalImages: 7,
  sections: [
    {
      section: "Phần 1: Bản chất tôn giáo theo quan điểm Mác – Lênin",
      images: ["marx-lenin-religion-concept.jpg"],
      count: 1
    },
    {
      section: "Phần 2: Quan điểm về tôn giáo trong xã hội chủ nghĩa",
      images: ["classroom-education.jpg"],
      count: 1
    },
    {
      section: "Phần 3: Chính sách tôn giáo của Việt Nam hiện nay",
      images: ["religious-festival.jpg"],
      count: 1
    },
    {
      section: "Phần 4: Liên hệ thực tiễn – Hòa hợp tôn giáo trong xã hội Việt Nam",
      images: ["charity-kitchen.jpg", "religious-meeting.jpg"],
      count: 2
    },
    {
      section: "Phần 5: Giải pháp trong giai đoạn hiện nay",
      images: ["positive-role-of-religion.jpg"],
      count: 1
    },
    {
      section: "Phần 6: Kết luận",
      images: ["unity-diversity.jpg"],
      count: 1
    }
  ]
};
