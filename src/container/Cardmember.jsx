import React from 'react';

const Cardmember = ({ Imagemember, Title, Description }) => {
  return (
    <div className="md:w-[32vh] md:h-[55vh] w-[15vh] h-[25vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center">
      <img src={Imagemember} alt={Title} className="rounded-md h-[35vh] w-full object-cover" />
      <h1 className="text-center font-bold mt-2 md:text-base text-xs">{Title}</h1>
      <p className="text-center w-[90%] md:text-base text-[10px]">{Description}</p>
    </div>
  );
};

export default Cardmember;