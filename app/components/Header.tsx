// components/Header.tsx

import React from 'react';

interface HeaderProps {
  onMenuClick: () => void; // Prop to handle menu button click
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Code Reviewers</div>
      <div className="flex items-center space-x-4">
        {/* Menu Button */}
        <button
          className="lg:hidden px-4 py-2 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-200 transition duration-200"
          onClick={onMenuClick}
        >
          Menu
        </button>
        {/* Additional buttons, like Notifications and Profile */}
        <button className="hidden lg:block px-4 py-2 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-200 transition duration-200">
          Notifications
        </button>
        <button className="hidden lg:block px-4 py-2 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-200 transition duration-200">
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
