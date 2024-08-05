// import React from 'react';

// const Cardmember = ({ Imagemember, Title, Description }) => {
//   return (
//     <div className="md:w-[32vh] md:h-[55vh] w-[16vh] h-[30vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center">
//       <img src={Imagemember} alt={Title} className="rounded-md h-[35vh] w-full object-cover" />
//       <h1 className="text-center font-bold mt-2 md:text-base text-xs">{Title}</h1>
//       <p className="text-center w-[90%] md:h-0 h-20  md:text-base text-[10px]">{Description}</p>
//     </div>
//   );
// };

// export default Cardmember;

import React from 'react';

const Cardmember = ({ Imagemember, Title, Description, onClick }) => {
  return (
    <div
      className="md:w-[32vh] md:h-[55vh] w-[16vh] h-[30vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <img src={Imagemember} alt={Title} className="rounded-md h-[35vh] w-full object-cover" />
      <h1 className="text-center font-bold mt-2 md:text-base text-xs">{Title}</h1>
      <p className="text-center w-[90%] md:h-0 h-20 md:text-base text-[10px]">{Description}</p>
    </div>
  );
};

export default Cardmember;
