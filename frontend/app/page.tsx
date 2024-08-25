// pages/index.tsx
'use client'


import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ChartWidget from './components/ChartWidget';
import SalesChart from './components/SalesChart';
// import Filter from './components/Filter';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuClick={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 p-6 bg-gray-100 min-h-screen">
          {/* Filters */}
          {/* <Filter /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chart Widgets with actual chart component */}
            <ChartWidget title="Sales Overview">
              {/* <SalesChart /> */}
            </ChartWidget>
            {/* More widgets as needed */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
