# Bản chất tôn giáo theo quan điểm Mác – Lênin

Ứng dụng học tập tương tác về môn học "Bản chất tôn giáo theo quan điểm Mác – Lênin" được xây dựng bằng React với giao diện hiện đại và tính năng tương tác cao.

## 🚀 Tính năng chính

### 📚 Nội dung học tập
- **Quan điểm Mác-Lênin về tôn giáo**: Tìm hiểu bản chất, đặc điểm và vai trò của tôn giáo
- **Tôn giáo trong xã hội chủ nghĩa**: Chính sách và biện pháp xử lý tôn giáo
- **Chính sách Việt Nam**: Thực tiễn chính sách tôn giáo tại Việt Nam
- **Liên hệ thực tiễn**: Hòa hợp tôn giáo trong xã hội Việt Nam hiện nay
- **Giải pháp**: Các giải pháp cụ thể trong giai đoạn hiện nay

### 🎯 Tính năng tương tác
- **Quiz kiểm tra kiến thức**: Hệ thống câu hỏi trắc nghiệm với giải thích chi tiết
- **Tìm kiếm thông minh**: Tìm kiếm nội dung và thuật ngữ trong toàn bộ ứng dụng
- **Từ điển thuật ngữ**: Tra cứu các khái niệm chuyên môn
- **Ghi chú cá nhân**: Lưu trữ và quản lý ghi chú học tập
- **Đánh dấu trang**: Bookmark các trang quan trọng

### 🎨 Giao diện hiện đại
- **Responsive Design**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Dark/Light Mode**: Chuyển đổi giao diện sáng/tối
- **Tùy chỉnh font chữ**: Điều chỉnh kích thước chữ phù hợp
- **Animation mượt mà**: Hiệu ứng chuyển động đẹp mắt với Framer Motion
- **Progress tracking**: Theo dõi tiến độ đọc và học tập

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 18+** với Hooks
- **React Router DOM v6** cho routing
- **Tailwind CSS** cho styling
- **Framer Motion** cho animations
- **React Icons** cho icons
- **Chart.js** cho biểu đồ thống kê

### Build Tools
- **Vite** cho development và build
- **PostCSS** và **Autoprefixer** cho CSS processing
- **ESLint** cho code quality

## 📦 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 16+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

### Build cho production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## 📁 Cấu trúc project

```
src/
├── components/           # React components
│   ├── Layout/          # Layout components (Header, Sidebar, Footer)
│   ├── Content/         # Content display components
│   ├── Interactive/     # Interactive components (Quiz, Search, etc.)
│   └── UI/              # UI components (ThemeToggle, etc.)
├── pages/               # Page components
├── data/                # Static data files
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # CSS files
├── App.jsx              # Main App component
└── main.jsx             # Entry point
```

## 🎓 Nội dung môn học

### 1. Bản chất tôn giáo theo quan điểm Mác – Lênin
- Tôn giáo là sản phẩm xã hội
- Phản ánh hư ảo hiện thực khách quan  
- Thuốc an thần của nhân dân

### 2. Quan điểm về tôn giáo trong xã hội chủ nghĩa
- Không dùng bạo lực để xóa bỏ tôn giáo
- Tôn trọng quyền tự do tín ngưỡng
- Xây dựng cơ sở xã hội mới

### 3. Chính sách tôn giáo của Việt Nam
- Bảo đảm tự do tín ngưỡng
- Bình đẳng trước pháp luật
- Ngăn chặn lợi dụng tôn giáo

### 4. Thực tiễn Việt Nam
- Hòa hợp tôn giáo trong xã hội
- Đóng góp từ thiện và xã hội
- Thành tựu đạt được

### 5. Giải pháp hiện tại
- Nâng cao nhận thức cộng đồng
- Hoàn thiện pháp luật
- Phát huy vai trò tích cực

## 🔧 Tính năng kỹ thuật

### State Management
- **React Context API** cho global state
- **useState/useReducer** cho local state
- **useLocalStorage** cho persistence

### Routing
- **React Router DOM v6** với nested routes
- **Lazy loading** cho performance
- **Protected routes** (nếu cần)

### Styling
- **Tailwind CSS** cho utility-first styling
- **Custom CSS** cho component-specific styles
- **Dark mode** support
- **Responsive design** cho mọi screen size

### Performance
- **Code splitting** với Vite
- **Lazy loading** components
- **Optimized images** và assets
- **Efficient re-renders** với React.memo

## 📱 Responsive Design

Ứng dụng được thiết kế responsive cho:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)  
- **Mobile** (320px - 767px)

## 🌙 Dark Mode

Hỗ trợ chế độ tối với:
- Tự động detect system preference
- Manual toggle
- Persistent setting
- Smooth transitions

## ♿ Accessibility

- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support
- **Reduced motion** support
- **Focus indicators** rõ ràng

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📞 Support

Nếu gặp vấn đề hoặc có câu hỏi, vui lòng:
- Tạo issue trên GitHub
- Liên hệ qua email: support@marxlenin-app.edu.vn

## 🙏 Acknowledgments

- **React Team** cho framework tuyệt vời
- **Tailwind CSS** cho utility-first CSS
- **Framer Motion** cho animations mượt mà
- **React Icons** cho icon set đầy đủ
- **Chart.js** cho biểu đồ thống kê

---

**Được phát triển với ❤️ cho mục đích giáo dục**