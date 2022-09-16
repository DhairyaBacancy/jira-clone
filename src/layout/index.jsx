import React from 'react';

import Header from './Header';
// import Sidebar from './Sidebar';

const index = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default index;
