import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StatisticsChart = ({ 
  data, 
  type = 'bar', 
  title, 
  delay = 0,
  className = "" 
}) => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#374151',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: !!title,
        text: title,
        color: '#374151',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#e5e7eb',
        borderWidth: 1
      }
    },
    scales: type === 'bar' ? {
      x: {
        grid: {
          color: '#e5e7eb'
        },
        ticks: {
          color: '#6b7280'
        }
      },
      y: {
        grid: {
          color: '#e5e7eb'
        },
        ticks: {
          color: '#6b7280'
        }
      }
    } : {}
  };

  const ChartComponent = type === 'doughnut' ? Doughnut : Bar;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${className}`}
    >
      <div className="h-80">
        <ChartComponent data={data} options={chartOptions} />
      </div>
    </motion.div>
  );
};

export default StatisticsChart;
