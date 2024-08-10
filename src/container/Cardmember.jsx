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

// import React from 'react';
// import FadeInOnScroll from './FadeInOnScroll';

// const Cardmember = ({ Imagemember, Title, Description, onClick }) => {
//   return (
//     <FadeInOnScroll>
//     <div
//       className="md:w-[32vh] md:h-[55vh] w-[16vh] h-[30vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center cursor-pointer"
//       onClick={onClick}
//     >
//       <img src={Imagemember} alt={Title} className="rounded-md h-[35vh] w-full object-cover" />
//       <h1 className="text-center font-bold mt-2 md:text-base text-xs">{Title}</h1>
//       <p className="text-center w-[90%] md:h-0 h-20 md:text-base text-[10px]">{Description}</p>
//     </div>
//     </FadeInOnScroll>
//   );
// };

// export default Cardmember;


// import React, { useState } from 'react';
// import FadeInOnScroll from './FadeInOnScroll';
// import MemberModal from '../container/MemberModal.jsx';

// const Cardmember = ({ Imagemember, Title, Description, Jabatan }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <FadeInOnScroll>
//         <div
//           className="md:w-[32vh] md:h-[55vh] w-[16vh] h-[30vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center cursor-pointer"
//           onClick={openModal}
//         >
//           <img src={Imagemember} alt={Title} className="rounded-md h-[35vh] w-full object-cover" />
//           <h1 className="text-center font-bold mt-2 md:text-base text-xs">{Title}</h1>
//           <p className="text-center w-[90%] md:h-0 h-20 md:text-base text-[10px]">{Description}</p>
//         </div>
//       </FadeInOnScroll>

//       <MemberModal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         member={{ image: Imagemember, name: Title, description: Description, jabatan: Jabatan }}
//       />
//     </div>
//   );
// };

// export default Cardmember;

import React, { useState } from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import MemberModal from '../container/MemberModal.jsx';

const Cardmember = ({ Imagemember, Title, Description, Jabatan }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <FadeInOnScroll>
        <div
          className="md:w-[32vh] md:h-[55vh] w-[16vh] h-[30vh] overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col items-center cursor-pointer"
          onClick={openModal}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        >
          <img src={Imagemember} alt={Title} className="rounded-md h-[35vh] w-full object-cover" />
          <h1 className="text-center font-bold mt-2 md:text-base text-xs">{Title}</h1>
          <p className="text-center w-[90%] md:h-0 h-20 md:text-base text-[10px]">{Description}</p>
        </div>
      </FadeInOnScroll>

      <MemberModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        member={{ image: Imagemember, name: Title, description: Description, jabatan: Jabatan }}
      />
    </div>
  );
};

export default Cardmember;
