// components/Filter.tsx

import React from 'react';

const Filter: React.FC = () => {
  return (
    <div className="flex space-x-4 mb-4">
      {/* Dropdown Filter */}
      <select className="px-4 py-2 border rounded-md">
        <option value="all">All Time</option>
        <option value="last-month">Last Month</option>
        <option value="last-week">Last Week</option>
      </select>

      {/* Date Picker Filter */}
      <input
        type="date"
        className="px-4 py-2 border rounded-md"
        placeholder="Select Date"
      />
    </div>
  );
};

export default Filter;
