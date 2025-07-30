import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ScatterChart,
  Scatter
} from 'recharts';
import { Filter, TrendingUp, Users, Smartphone } from 'lucide-react';
import ChartContainer from './ChartContainer';

const Analysis = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data based on the research findings
  const ageDistribution = [
    { age: '18-22', count: 156, percentage: 32.4 },
    { age: '23-27', count: 189, percentage: 39.3 },
    { age: '28-32', count: 98, percentage: 20.4 },
    { age: '33+', count: 38, percentage: 7.9 }
  ];

  const genderDistribution = [
    { name: 'Female', value: 312, color: '#8B5CF6' },
    { name: 'Male', value: 145, color: '#3B82F6' },
    { name: 'Other', value: 24, color: '#10B981' }
  ];

  const socialMediaPlatforms = [
    { platform: 'YouTube', users: 289, impact: 3.2 },
    { platform: 'Facebook', users: 267, impact: 3.8 },
    { platform: 'Instagram', users: 234, impact: 4.1 },
    { platform: 'Twitter', users: 156, impact: 3.5 },
    { platform: 'TikTok', users: 123, impact: 4.3 },
    { platform: 'LinkedIn', users: 98, impact: 2.8 }
  ];

  const mentalHealthCorrelation = [
    { usage: 1, restlessness: 2.1, distraction: 1.8 },
    { usage: 2, restlessness: 2.8, distraction: 2.3 },
    { usage: 3, restlessness: 3.4, distraction: 3.1 },
    { usage: 4, restlessness: 4.2, distraction: 3.9 },
    { usage: 5, restlessness: 4.8, distraction: 4.5 }
  ];

  const dailyUsagePatterns = [
    { time: '0-1h', users: 45, mental_impact: 2.1 },
    { time: '1-2h', users: 89, mental_impact: 2.8 },
    { time: '2-4h', users: 156, mental_impact: 3.4 },
    { time: '4-6h', users: 134, mental_impact: 4.1 },
    { time: '6h+', users: 57, mental_impact: 4.7 }
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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Analysis</h1>
        <p className="text-gray-600 text-lg">
          Deep dive into the correlations between social media usage and mental health
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mb-6"
      >
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <div className="flex space-x-2">
            {['all', 'age', 'gender', 'platforms', 'mental-health'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedFilter === filter
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Age Distribution */}
        <motion.div variants={itemVariants}>
          <ChartContainer title="Age Distribution of Respondents">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p>• Average age: 26.14 years</p>
              <p>• Majority (71.7%) are between 18-27 years</p>
            </div>
          </ChartContainer>
        </motion.div>

        {/* Gender Distribution */}
        <motion.div variants={itemVariants}>
          <ChartContainer title="Gender Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {genderDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p>• Female respondents: 64.9%</p>
              <p>• Male respondents: 30.1%</p>
            </div>
          </ChartContainer>
        </motion.div>

        {/* Social Media Platforms */}
        <motion.div variants={itemVariants}>
          <ChartContainer title="Social Media Platform Usage & Impact">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={socialMediaPlatforms}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="users" fill="#8B5CF6" name="Users" />
                <Bar yAxisId="right" dataKey="impact" fill="#F59E0B" name="Mental Impact" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p>• YouTube and Facebook are most popular</p>
              <p>• TikTok shows highest mental health impact</p>
            </div>
          </ChartContainer>
        </motion.div>

        {/* Mental Health Correlation */}
        <motion.div variants={itemVariants}>
          <ChartContainer title="Social Media Usage vs Mental Health Impact">
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={mentalHealthCorrelation}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="usage" name="Usage Level" />
                <YAxis dataKey="restlessness" name="Restlessness" />
                <Tooltip />
                <Scatter dataKey="restlessness" fill="#EF4444" name="Restlessness" />
                <Scatter dataKey="distraction" fill="#F59E0B" name="Distraction" />
              </ScatterChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p>• Strong positive correlation found</p>
              <p>• Higher usage = higher mental health impact</p>
            </div>
          </ChartContainer>
        </motion.div>

        {/* Daily Usage Patterns */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <ChartContainer title="Daily Usage Patterns & Mental Health Impact">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyUsagePatterns}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="users" stroke="#3B82F6" name="Users" />
                <Line yAxisId="right" type="monotone" dataKey="mental_impact" stroke="#EF4444" name="Mental Impact" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p>• 2-4 hours is the most common usage pattern</p>
              <p>• Mental health impact increases with usage time</p>
            </div>
          </ChartContainer>
        </motion.div>
      </motion.div>

      {/* Key Insights */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mt-8"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Statistical Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">73%</div>
              <div className="text-sm text-gray-600">Report mental health impact</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">4.2h</div>
              <div className="text-sm text-gray-600">Average daily usage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">68%</div>
              <div className="text-sm text-gray-600">Experience distraction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">82%</div>
              <div className="text-sm text-gray-600">Seek validation online</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analysis; 