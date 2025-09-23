import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBookOpen, FiBarChart, FiTarget } from 'react-icons/fi';

const Header = () => {
  const location = useLocation();

  const navigation = [
    {
      id: 'overview',
      name: 'Tổng quan',
      icon: FiBookOpen,
      href: '/overview',
      description: 'Thông tin chung về môn học'
    },
    {
      id: 'stats',
      name: 'Thống kê',
      icon: FiBarChart,
      href: '/stats',
      description: 'Số liệu và phân tích'
    },
    {
      id: 'goals',
      name: 'Mục tiêu',
      icon: FiTarget,
      href: '/goals',
      description: 'Mục tiêu học tập'
    }
  ];


  return (
    <div className="header-container sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo-icon"></div>
            <span className="logo-text">
              MLN131
              <sup className="logo-trademark">™</sup>
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="navigation-container">
            {navigation.map((nav) => {
              const Icon = nav.icon;
              const isActive = location.pathname === nav.href;
              const isLast = nav.id === 'goals';

              if (isLast) {
                // Special styling for the last item (Contact button style)
                return (
                  <Link
                    key={nav.id}
                    to={nav.href}
                    className={`nav-button ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={16} />
                    {nav.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={nav.id}
                  to={nav.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  {nav.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;