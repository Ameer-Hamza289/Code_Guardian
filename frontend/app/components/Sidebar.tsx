// components/Sidebar.tsx

import React from 'react';
import { FaTachometerAlt, FaProjectDiagram, FaChartLine, FaBell, FaCog, FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;  // Prop to control sidebar visibility
  onClose: () => void; // Prop to handle sidebar close
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed lg:relative inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-800 w-64 min-h-screen px-4 py-6 space-y-6 shadow-lg z-50`}
    >
      {/* Close Button (visible on small screens) */}
      <div className="flex justify-end lg:hidden">
        <button onClick={onClose} className="text-white p-2">
          <FaTimes size={24} />
        </button>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="flex items-center text-white p-2 rounded-md hover:bg-gray-700 transition duration-150"
            >
              <FaTachometerAlt className="mr-3" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-white p-2 rounded-md hover:bg-gray-700 transition duration-150"
            >
              <FaProjectDiagram className="mr-3" />
              Code Analytics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-white p-2 rounded-md hover:bg-gray-700 transition duration-150"
            >
              <FaChartLine className="mr-3" />
              Trends & Reports
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-white p-2 rounded-md hover:bg-gray-700 transition duration-150"
            >
              <FaBell className="mr-3" />
              Alerts
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-white p-2 rounded-md hover:bg-gray-700 transition duration-150"
            >
              <FaCog className="mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
