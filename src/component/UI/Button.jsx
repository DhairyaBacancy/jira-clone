import React from 'react';

const Button = ({ type = 'button', label, onClick, variant = 'primary', styles = {} }) => {
  return (
    <button
      className={`${
        variant === 'primary' ? 'bg-blue-700 text-white' : 'bg-slate-50 text-slate-500'
      } rounded focus:outline-none font-medium text-sm px-4 text-center inline-flex items-center h-full py-1.5`}
      type={type}
      onClick={onClick}
      style={{ ...styles }}
    >
      {label}
    </button>
  );
};

export default Button;
