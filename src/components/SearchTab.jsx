import React, { useState } from 'react';

const SearchTab = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Lakukan sesuatu dengan searchTerm
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="flex justify-center m-9 w-96 border border-blue-600 rounded-xl">
      <div className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 h-full px-4 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
