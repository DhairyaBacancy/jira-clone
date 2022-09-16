import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { isValidArray } from '../../utils/global.util';

const Menu = ({ name, menuItems }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible((val) => !val);
  };

  return (
    <div className="relative">
      <button
        className="hover:text-blue-700 focus:outline-none font-medium text-sm px-4 h-full text-center inline-flex items-center"
        type="button"
        onClick={toggle}
      >
        {name}
        <FiChevronDown />
      </button>
      {isVisible && isValidArray(menuItems) && (
        <div
          className="w-44 bg-white rounded shadow"
          style={{
            position: 'absolute',
            inset: '0px auto auto 0px',
            margin: '0px',
            transform: 'translate(0px, 40px)'
          }}
        >
          <ul className="py-1 text-sm text-gray-700">
            {menuItems.map((item) => (
              <li key={item.id} className="block py-2 px-4 hover:bg-gray-100">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
