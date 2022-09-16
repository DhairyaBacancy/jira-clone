import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

const KanbanLayout = () => {
  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default KanbanLayout;
