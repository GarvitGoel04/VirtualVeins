import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Analysis from './components/Analysis';
import Research from './components/Research';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App; 