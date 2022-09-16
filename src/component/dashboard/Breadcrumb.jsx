import React from 'react';
import Button from '../UI/Button';

const Breadcrumb = ({ title }) => {
  return (
    <div className="flex justify-between items-center px-1 py-2">
      <h3 className="text-2xl font-bold">{title}</h3>
      <Button
        label="Create project"
        onClick={() => {
          console.log('WIP');
        }}
      />
    </div>
  );
};

export default Breadcrumb;
