import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  Users, 
  TrendingUp, 
  Award,
  Mail,
  Github,
  Linkedin,
  Globe,
  Heart,
  Shield,
  Lightbulb
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Mental Health Focus',
      description: 'Comprehensive analysis of social media impact on mental health metrics including depression, anxiety, and sleep patterns.'
    },
    {
      icon: Target,
      title: 'Data-Driven Insights',
      description: 'Based on survey data from 481 respondents with advanced statistical analysis and predictive modeling.'
    },
    {
      icon: Users,
      title: 'Diverse Demographics',
      description: 'Research covers various age groups, genders, and social media platforms to ensure comprehensive findings.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Interactive dashboard with real-time data visualization and correlation analysis.'
    }
  ];

  const team = [
    {
      name: 'Research Team',
      role: 'Data Analysis & Statistics',
      description: 'Expert team specializing in social media research and mental health analytics.',
      icon: Users
    },
    {
      name: 'Development Team',
      role: 'UI/UX & Frontend',
      description: 'Skilled developers creating interactive visualizations and modern web interfaces.',
      icon: Globe
    },
    {
      name: 'Academic Advisors',
      role: 'Research Methodology',
      description: 'Academic experts ensuring rigorous research standards and statistical validity.',
      icon: Award
    }
  ];

  const mission = [
    {
      title: 'Awareness',
      description: 'Raise awareness about the impact of social media on mental health through data-driven insights.',
      icon: Lightbulb,
      color: 'primary'
    },
    {
      title: 'Education',
      description: 'Provide educational resources and tools for promoting healthy social media usage patterns.',
      icon: Shield,
      color: 'secondary'
    },
    {
      title: 'Innovation',
      description: 'Develop innovative solutions for digital wellness and mental health monitoring.',
      icon: Heart,
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About VirtualVeins</h1>
        <p className="text-gray-600 text-lg">
          Understanding the digital age's impact on mental health through comprehensive research and data analysis
        </p>
      </motion.div>

      {/* Project Overview */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-4">
                VirtualVeins is a comprehensive research project that investigates the relationship between social media usage 
                and mental health outcomes. Through extensive data collection and advanced statistical analysis, we aim to 
                provide evidence-based insights into how digital platforms affect our psychological well-being.
              </p>
              <p className="text-gray-700">
                Our research encompasses 481 respondents across diverse demographics, analyzing usage patterns, 
                mental health metrics, and platform-specific impacts to create actionable recommendations for 
                healthier digital habits.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                <Brain className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Features */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mission.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center"
              >
                <div className={`p-4 rounded-lg mb-4 mx-auto w-16 h-16 flex items-center justify-center ${
                  item.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                  item.color === 'secondary' ? 'bg-secondary-100 text-secondary-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Team */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center"
              >
                <div className="p-4 rounded-lg mb-4 mx-auto w-16 h-16 bg-gray-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-primary-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contact & Links */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">research@virtualveins.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">www.virtualveins.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Our Research</h3>
            <div className="flex space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 text-center"
      >
        <p className="text-gray-500">
          © 2024 VirtualVeins. All rights reserved. | 
          <span className="text-primary-600"> Privacy Policy</span> | 
          <span className="text-primary-600"> Terms of Service</span>
        </p>
      </motion.div>
    </div>
  );
};

export default About; 