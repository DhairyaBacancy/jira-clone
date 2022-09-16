import React from 'react';

import Breadcrumb from '../component/UI/Breadcrumb';
import ProjectList from '../component/dashboard/ProjectList';

const Dashboard = () => {
  return (
    <div className="p-8">
      <Breadcrumb title="Projects" buttonTitle="Create Project" />
      <ProjectList />
    </div>
  );
};

export default Dashboard;
