import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Download,
  ExternalLink,
  BookOpen,
  Target,
  Lightbulb
} from 'lucide-react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('methodology');

  const tabs = [
    { id: 'methodology', name: 'Methodology', icon: Target },
    { id: 'findings', name: 'Key Findings', icon: Lightbulb },
    { id: 'implications', name: 'Implications', icon: TrendingUp },
    { id: 'publications', name: 'Publications', icon: FileText }
  ];

  const methodology = [
    {
      title: 'Survey Design',
      description: 'Comprehensive questionnaire covering social media usage patterns, mental health metrics, and demographic information.',
      icon: FileText,
      color: 'primary'
    },
    {
      title: 'Data Collection',
      description: '481 respondents across diverse age groups, genders, and social media platforms.',
      icon: Users,
      color: 'secondary'
    },
    {
      title: 'Statistical Analysis',
      description: 'Advanced statistical methods including correlation analysis, ANOVA tests, and predictive modeling.',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Mental Health Metrics',
      description: 'Validated scales for measuring depression, anxiety, distraction, and social comparison.',
      icon: AlertTriangle,
      color: 'red'
    }
  ];

  const findings = [
    {
      category: 'Usage Patterns',
      items: [
        'Average daily social media usage: 4.2 hours',
        '73% of users report mental health impact',
        'YouTube and Facebook are most popular platforms',
        'Younger users (18-27) show higher engagement'
      ]
    },
    {
      category: 'Mental Health Impact',
      items: [
        'Strong correlation between usage time and restlessness',
        '68% experience distraction during other activities',
        '82% seek validation through social media',
        '59% report sleep issues related to usage'
      ]
    },
    {
      category: 'Platform Differences',
      items: [
        'TikTok shows highest mental health impact',
        'LinkedIn has lowest mental health correlation',
        'Instagram linked to higher comparison behaviors',
        'Twitter associated with increased anxiety levels'
      ]
    },
    {
      category: 'Demographic Insights',
      items: [
        'Females report higher mental health impact',
        'Age 18-22 shows highest distraction levels',
        'Students more likely to seek online validation',
        'Working professionals show better self-regulation'
      ]
    }
  ];

  const implications = [
    {
      title: 'Mental Health Awareness',
      description: 'Need for increased awareness about social media\'s impact on mental health, especially among younger users.',
      impact: 'High'
    },
    {
      title: 'Platform Responsibility',
      description: 'Social media platforms should implement features to promote healthy usage patterns.',
      impact: 'Medium'
    },
    {
      title: 'Educational Programs',
      description: 'Schools and universities should include digital wellness in their curriculum.',
      impact: 'High'
    },
    {
      title: 'Policy Development',
      description: 'Government policies needed to regulate social media usage and protect vulnerable populations.',
      impact: 'Medium'
    }
  ];

  const publications = [
    {
      title: 'VirtualVeins: Social Media Impact on Mental Health',
      type: 'Research Paper',
      year: '2024',
      status: 'Published',
      description: 'Comprehensive analysis of 481 respondents on social media usage patterns and mental health correlations.'
    },
    {
      title: 'Digital Wellness: A Data-Driven Approach',
      type: 'Conference Paper',
      year: '2024',
      status: 'Submitted',
      description: 'Presentation of findings at International Conference on Digital Health and Wellness.'
    },
    {
      title: 'Platform-Specific Mental Health Impact Analysis',
      type: 'Journal Article',
      year: '2024',
      status: 'In Review',
      description: 'Detailed analysis of how different social media platforms affect mental health metrics.'
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Research & Publications</h1>
        <p className="text-gray-600 text-lg">
          Academic research methodology, findings, and implications for mental health
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {activeTab === 'methodology' && (
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methodology.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${item.color === 'primary' ? 'bg-primary-100 text-primary-600' : 
                        item.color === 'secondary' ? 'bg-secondary-100 text-secondary-600' :
                        item.color === 'green' ? 'bg-green-100 text-green-600' :
                        'bg-red-100 text-red-600'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'findings' && (
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {findings.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'implications' && (
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {implications.map((implication, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{implication.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      implication.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {implication.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-600">{implication.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'publications' && (
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{pub.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          pub.status === 'Published' ? 'bg-green-100 text-green-700' :
                          pub.status === 'Submitted' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {pub.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{pub.type} • {pub.year}</p>
                      <p className="text-gray-600">{pub.description}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Research Stats */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mt-8"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">481</div>
              <div className="text-sm text-gray-600">Total Respondents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">20</div>
              <div className="text-sm text-gray-600">Survey Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Platforms Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">15</div>
              <div className="text-sm text-gray-600">Mental Health Metrics</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Research; 