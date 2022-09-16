import React from 'react';

import Breadcrumb from '../component/dashboard/Breadcrumb';
import ProjectList from '../component/dashboard/ProjectList';

const Dashboard = () => {
  return (
    <div className="p-8">
      <Breadcrumb title="Projects" />
      <ProjectList />
    </div>
  );
};

export default Dashboard;
