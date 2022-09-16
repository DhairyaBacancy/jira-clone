import React from 'react';
import Button from './Button';

const Breadcrumb = ({ title, buttonTitle = '', buttonType = 'primary' }) => {
  return (
    <div className="flex justify-between items-center px-1 py-2">
      <h3 className="text-2xl font-bold">{title}</h3>
      <Button
        label={buttonTitle}
        onClick={() => {
          console.log('WIP');
        }}
        variant={buttonType}
      />
    </div>
  );
};

export default Breadcrumb;
