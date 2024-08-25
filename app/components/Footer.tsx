// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-6">
      &copy; 2024 Your Company. All rights reserved. <a href="#" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a> | <a href="#" className="text-indigo-400 hover:text-indigo-300">Terms of Service</a>
    </footer>
  );
};

export default Footer;
