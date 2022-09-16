import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const PriorityBox = ({ priority, withLabel = false }) => {
  const renderPriority = (color = true) => {
    switch (priority) {
      case 'highest':
        return color ? 'text-red-600' : 'Highest';
      case 'high':
        return color ? 'text-red-400' : 'High';
      case 'medium':
        return color ? 'text-orange-400' : 'Medium';
      case 'low':
        return color ? 'text-green-600' : 'Low';
      case 'lowest':
        return color ? 'text-green-400' : 'Lowest';
    }
  };

  return (
    <span className={`${renderPriority()} flex`}>
      {['high', 'highest', 'medium'].includes(priority) ? <FiArrowUp /> : <FiArrowDown />}
      <span className="text-xs pl-3 text-slate-600 font-semibold">
        {withLabel && renderPriority(false)}
      </span>
    </span>
  );
};

export default PriorityBox;
