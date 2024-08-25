// components/ChartWidget.tsx

import React from 'react';

interface ChartWidgetProps {
  title: string;
  children: React.ReactNode;  // To hold the chart component
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default ChartWidget;
