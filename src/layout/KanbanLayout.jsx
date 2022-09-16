import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

const KanbanLayout = () => {
  return (
    <div className="flex h-[calc(100vh-58px)]">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default KanbanLayout;
