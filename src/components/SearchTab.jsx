import React, { useState, useEffect } from 'react';
import { items } from '../container/Data.jsx';
import SearchResults from './SearchResults.jsx';
import FadeInOnScroll from '../container/FadeInOnScroll.jsx';

const SearchTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col w-full justify-center items-end m-10">
      <div className="w-full max-w-md mb-6">
        <div className="relative">
        <FadeInOnScroll>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          </FadeInOnScroll>
        </div>
      </div>
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default SearchTab;
