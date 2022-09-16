import React, { useId } from 'react';
import { BsSearch } from 'react-icons/bs';

const Textbox = ({
  type = 'text',
  value,
  name,
  label,
  onChange,
  placeholder = '',
  searchIcon = false,
  required = false
}) => {
  const inputId = useId();

  return (
    <div className="flex flex-col">
      {label && (
        <label className="font-semibold text-sm text-slate-600 pb-1" htmlFor={inputId}>
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative flex w-full">
        <input
          className="w-full border border-slate-400 p-1 rounded bg-slate-50 hover:border-slate-500 focus:border-slate-500 outline-none"
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          // required={required}
        />
        {searchIcon && (
          <span className="absolute right-[8px] top-[8px] text-slate-500">
            <BsSearch />
          </span>
        )}
      </div>
    </div>
  );
};

export default Textbox;
