import React, { useEffect, useState } from 'react';
import Selectbox from '../UI/Selectbox';

import Table from '../UI/Table';
import Textbox from '../UI/Textbox';
import projects from '../../data/projects.json';

const columns = [
  { key: 'name', name: 'Name*' },
  { key: 'key', name: 'Key' },
  { key: 'type', name: 'Type' },
  { key: 'lead', name: 'Lead' },
  { key: 'action', name: '' }
];

const ProjectList = () => {
  const [name, setName] = useState('');
  const [projectList, setProjectList] = useState(projects);

  const handleFilter = (e) => {
    const { value } = e.target;
    setName(value);
  };

  useEffect(() => {
    if (name) {
      const filteredList = projects.filter(
        (project) =>
          project.lead.toLowerCase().includes(name.toLowerCase()) ||
          project.key.toLowerCase().includes(name.toLowerCase()) ||
          project.lead.toLowerCase().includes(name.toLowerCase())
      );
      setProjectList(filteredList);
    } else {
      setProjectList(projects);
    }
  }, [name]);

  return (
    <div className="mt-6">
      <div className="flex p-2 mb-2">
        <div className="w-64">
          <Textbox placeholder="Search project" value={name} onChange={handleFilter} searchIcon />
        </div>
        <div className="w-64 ml-3">
          <Selectbox placeholder="All jira products" />
        </div>
      </div>
      <Table columns={columns} rows={projectList} />
    </div>
  );
};

export default ProjectList;
