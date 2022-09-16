/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AiFillCheckSquare, AiFillBug, AiFillTag } from 'react-icons/ai';
import PriorityBox from '../UI/PriorityBox';
import users from '../../data/users.json';

const IssueCard = ({ summary, priority = 'high', type, assignee }) => {
  const [user, setUser] = useState();

  const renderTypeIcon = () => {
    switch (type) {
      case 'task':
        return <AiFillCheckSquare />;
      case 'improvement':
        return <AiFillTag />;
      case 'bug':
        return <AiFillBug />;
    }
  };

  useEffect(() => {
    const user = users.find((u) => u.id === assignee);
    setUser(user);
  }, []);

  return (
    <div className="p-3 bg-white shadow rounded mb-2">
      <div className="text-xs font-semibold mb-3">{summary}</div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="mr-1">{renderTypeIcon()}</span>
          <PriorityBox priority={priority} />
        </div>
        <img className="rounded-full w-[25px]" src={user?.thumbnail} alt="user profile" />
      </div>
    </div>
  );
};

export default IssueCard;
