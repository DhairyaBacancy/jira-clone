import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsWindow, BsFillGearFill, BsTruck, BsFileEarmarkText, BsBox } from 'react-icons/bs';
import { BiTrendingUp } from 'react-icons/bi';
import { FiServer } from 'react-icons/fi';

import projects from '../data/projects.json';

const MAIN_LIST_ITEMS = [
  { id: 'kanban-board', name: 'Kanban Board', icon: <BsWindow /> },
  { id: 'project-settings', name: 'Project Settings', icon: <BsFillGearFill /> }
];
const SUB_LIST_ITEMS = [
  { id: 'release', name: 'Release', icon: <BsTruck /> },
  { id: 'issue', name: 'Issue', icon: <FiServer /> },
  { id: 'page', name: 'Page', icon: <BsFileEarmarkText /> },
  { id: 'reports', name: 'Reports', icon: <BiTrendingUp /> },
  { id: 'component', name: 'Component', icon: <BsBox /> }
];

const MenuItem = (item) => {
  return (
    <li
      key={item.id}
      className="flex items-center p-2 font-semibold text-slate-600 hover:bg-slate-200 rounded cursor-pointer"
    >
      {item.icon}
      <span className="pl-4">{item.name}</span>
    </li>
  );
};

const Sidebar = () => {
  const { slug } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectDetail = projects.find((project) => project.id === slug);
    setProject(projectDetail);
  }, []);

  return (
    <div className="bg-slate-100 h-[calc(100vh-58px)] w-64 border-r p-4">
      <div className="py-2 flex mb-3">
        <img
          src="https://picsum.photos/50/50"
          alt="project image"
          className="rounded-sm"
          loading="lazy"
        />
        <div className="flex flex-col pl-4">
          <h4 className="font-bold text-slate-600">{project?.name}</h4>
          <span className="text-sm text-slate-600 font-semibold">{project?.description}</span>
        </div>
      </div>

      <ul>
        {MAIN_LIST_ITEMS.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ul>
      <div className="border my-3"></div>
      <ul>
        {SUB_LIST_ITEMS.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
