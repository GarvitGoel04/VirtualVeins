import React from 'react';

const ChartContainer = ({ title, children, className = '' }) => {
  return (
    <div className={`chart-container ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};

export default ChartContainer; 