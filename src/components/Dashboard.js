import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Smartphone,
  BarChart3,
  Activity,
  Heart,
  Brain
} from 'lucide-react';
import StatCard from './StatCard';
import ChartContainer from './ChartContainer';

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('overview');

  const stats = [
    {
      title: 'Total Respondents',
      value: '481',
      change: '+12%',
      icon: Users,
      color: 'primary'
    },
    {
      title: 'Average Age',
      value: '26.14',
      change: 'years',
      icon: TrendingUp,
      color: 'secondary'
    },
    {
      title: 'Mental Health Impact',
      value: '73%',
      change: 'affected',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'Daily Usage',
      value: '4.2h',
      change: 'average',
      icon: Smartphone,
      color: 'green'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          VirtualVeins Dashboard
        </h1>
        <p className="text-gray-600 text-lg">
          Exploring the impact of social media on mental health through data-driven insights
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Key Findings */}
        <motion.div variants={itemVariants}>
          <ChartContainer title="Key Research Findings">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Correlation Found</h4>
                  <p className="text-sm text-gray-600">
                    Strong correlation between social media usage and feelings of restlessness
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Gender Differences</h4>
                  <p className="text-sm text-gray-600">
                    Significant differences in mental health impact across gender groups
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Platform Impact</h4>
                  <p className="text-sm text-gray-600">
                    Different platforms show varying effects on mental health metrics
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Age Factor</h4>
                  <p className="text-sm text-gray-600">
                    Younger age groups report higher distraction levels from social media
                  </p>
                </div>
              </div>
            </div>
          </ChartContainer>
        </motion.div>

        {/* Interactive Metrics */}
        <motion.div variants={itemVariants}>
          <ChartContainer title="Interactive Metrics">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Mental Health Impact</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '73%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">73%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Distraction Level</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">68%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Validation Seeking</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">82%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Sleep Issues</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '59%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">59%</span>
                </div>
              </div>
            </div>
          </ChartContainer>
        </motion.div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mt-8"
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200">
              <BarChart3 className="w-5 h-5 text-primary-600" />
              <span className="font-medium text-gray-900">View Detailed Analysis</span>
            </button>
            <button className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-secondary-300 hover:bg-secondary-50 transition-colors duration-200">
              <Activity className="w-5 h-5 text-secondary-600" />
              <span className="font-medium text-gray-900">Explore Trends</span>
            </button>
            <button className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors duration-200">
              <Brain className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-900">Mental Health Insights</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 