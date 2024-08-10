import React from 'react';
import Modal from 'react-modal';
import FadeInOnScroll from '../container/FadeInOnScroll.jsx';

const MemberModal = ({ isOpen, onRequestClose, member }) => {

  console.log(member);
  return (
    <FadeInOnScroll>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Member Detail"
      className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75"
    >
      <div className="bg-white p-4 rounded-md shadow-lg max-w-lg w-full relative mt-28">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        {member && (
          <div className='flex text-blue-900 md:flex-row flex-col-reverse'>
            <div>
              <h2 className="text-2xl font-bold mb-2 w-[40vh] mx-0">Nama: <br/>{member.name}</h2>
              <p className='font-semibold'>Tugas: <br/>{member.description}</p>
              <p className='font-light'>Jabatan: <br/>{member.jabatan}</p>
            </div>
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-md mb-4 md:mx-2 mx-0" />
          </div>
        )}
      </div>
    </Modal>
    </FadeInOnScroll>
  );
};

Modal.setAppElement('#root');
export default MemberModal;
