import React from "react";

function SearchFilter() {
  return (
    <div className="bg-white p-4 mb-6 rounded-lg shadow-md">
      <div className="flex space-x-4">
        <input type="text" placeholder="Location" className="w-full p-2 border border-gray-300 rounded" />
        <input type="date" className="w-full p-2 border border-gray-300 rounded" />
        <select className="w-full p-2 border border-gray-300 rounded">
          <option>All</option>
          <option>Sports Car</option>
          <option>SUV</option>
          <option>Sedan</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
      </div>
    </div>
  );
}

export default SearchFilter;
