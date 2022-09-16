import React, { useId } from 'react';
// import { BsSearch } from 'react-icons/bs';
import { isValidArray } from '../../utils/global.util';

const Selectbox = ({
  value,
  name,
  label,
  onChange,
  placeholder = '',
  options,
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
        <select
          className="w-full  p-1 rounded bg-slate-100 shadow hover:bg-slate-200 focus:bg-slate-200 outline-none"
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {isValidArray(options) &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Selectbox;
