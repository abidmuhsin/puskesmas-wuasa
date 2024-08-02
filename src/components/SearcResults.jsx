import React from 'react';
import Cardmember from '../container/Cardmember.jsx';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="w-full max-w-md overflow-y-hidden mr-[140vh] mt-8">
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-7 absolute gap-4">
          {searchResults.map(item => (
            <Cardmember
              key={item.id}
              Imagemember={item.image}
              Title={item.name}
              Description={item.description}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
