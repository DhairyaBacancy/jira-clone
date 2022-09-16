import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { SiJirasoftware } from 'react-icons/si';
import { IoIosKeypad } from 'react-icons/io';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';

import Menu from '../component/UI/Menu';
import projects from '../data/projects.json';
import Button from '../component/UI/Button';
import Modal from '../component/UI/Modal';
import CreateIssue from '../component/issue/CreateIssue';

const ICONS = [
  { name: 'FaBell', icon: <FaBell /> },
  { name: 'FaQuestionCircle', icon: <FaQuestionCircle /> },
  { name: 'BsFillGearFill', icon: <BsFillGearFill /> }
];

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((val) => !val);
  };

  return (
    <>
      <header className="">
        <nav className="bg-white py-3 border-b">
          <div className="px-4 w-full flex items-center">
            <div className="flex items-center">
              <div className="flex justify-between items-center text-xl">
                <IoIosKeypad />
                <SiJirasoftware className="mx-3 text-indigo-600" />
                <Link to="/">
                  <span className="font-bold">Jira software</span>
                </Link>
              </div>

              <div className="flex ml-auto mt-0">
                <Menu name="Your work" />
                <Menu name="Projects" menuItems={projects} />
                <Menu name="Filters" />
                <Menu name="Dashboards" />
                <Menu name="People" />
                <Menu name="Apps" />
                <Button label="Create" onClick={toggleModal} />
              </div>
            </div>

            <div className="flex ml-auto mt-o">
              <ul className="flex items-center text-xl">
                {ICONS.map((icon) => (
                  <li key={icon.name} className="mx-2">
                    {icon.icon}
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {isModalOpen && (
        <Modal>
          <CreateIssue onCancel={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;
