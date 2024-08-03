// import React from 'react';
// import Cardmember from '../container/Cardmember.jsx';

// const SearchResults = ({ searchResults }) => {
//   return (
//     <div className="w-full max-w-md overflow-hidden mr-[135vh] mt-8">
//       {searchResults.length > 0 ? (
//         <div className="grid grid-cols-5 absolute gap-16">
//           {searchResults.map(item => (
//             <Cardmember
//               key={item.id}
//               Imagemember={item.image}
//               Title={item.name}
//               Description={item.description}
//             />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500">No results found</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

import React from 'react';
import Cardmember from '../container/Cardmember.jsx';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="w-full max-w-6xl overflow-hidden mx-auto mt-8">
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 gap-4">
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
        <p className="text-gray-500 text-center">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
