import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, change, icon: Icon, color = 'primary' }) => {
  const colorClasses = {
    primary: 'text-primary-600 bg-primary-50',
    secondary: 'text-secondary-600 bg-secondary-50',
    red: 'text-red-600 bg-red-50',
    green: 'text-green-600 bg-green-50',
    yellow: 'text-yellow-600 bg-yellow-50',
    purple: 'text-purple-600 bg-purple-50',
    blue: 'text-blue-600 bg-blue-50'
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="stat-card"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{change}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard; 