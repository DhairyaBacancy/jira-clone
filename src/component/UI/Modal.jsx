import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div className="relative p-4 w-full max-w-2xl h-auto">
        <div className="relative bg-white rounded shadow">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
