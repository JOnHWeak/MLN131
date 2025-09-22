// Utility functions for handling images
export const getImagePath = (imageName) => {
  return `/assets/images/${imageName}`;
};

export const getImageWithFallback = (imagePath, fallbackPath = '/assets/images/placeholder.jpg') => {
  return imagePath || fallbackPath;
};

// List of all available images
export const availableImages = [
  'classroom-education.jpg',
  'religious-festival.jpg', 
  'charity-kitchen.jpg',
  'religious-meeting.jpg',
  'positive-role-of-religion.jpg',
  'unity-diversity.jpg'
];

// Image metadata
export const imageMetadata = {
  'classroom-education.jpg': {
    title: 'Giáo dục vùng sâu vùng xa',
    description: 'Nơi trình độ dân trí còn thấp, tôn giáo vẫn có ảnh hưởng mạnh'
  },
  'religious-festival.jpg': {
    title: 'Lễ hội tôn giáo',
    description: 'Được tổ chức công khai - thể hiện quyền tự do tín ngưỡng'
  },
  'charity-kitchen.jpg': {
    title: 'Bếp ăn từ thiện',
    description: 'Đóng góp tích cực của tôn giáo trong xã hội'
  },
  'religious-meeting.jpg': {
    title: 'Họp mặt chức sắc tôn giáo',
    description: 'Sự hợp tác giữa Nhà nước và tôn giáo'
  },
  'positive-role-of-religion.jpg': {
    title: 'Vai trò tích cực của tôn giáo',
    description: 'Trong xã hội Việt Nam'
  },
  'unity-diversity.jpg': {
    title: 'Đoàn kết đa dạng tôn giáo',
    description: 'Nền tảng cho sự phát triển bền vững'
  }
};
