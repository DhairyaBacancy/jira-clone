import React, { useState } from 'react';

import Block from './kanban/Block';
import Textbox from '../UI/Textbox';
import Button from '../UI/Button';

const KanBanBoard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="flex mb-8 items-center">
        <Textbox value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} searchIcon />

        <div className="ml-8 flex flex-row-reverse">
          <img
            className="rounded-full w-[30px] ml-[-4px]"
            src="https://randomuser.me/api/portraits/thumb/women/76.jpg"
            alt="user profile"
          />
          <img
            className="rounded-full w-[30px] ml-[-4px]"
            src="https://randomuser.me/api/portraits/thumb/women/76.jpg"
            alt="user profile"
          />
          <img
            className="rounded-full w-[30px] ml-[-4px]"
            src="https://randomuser.me/api/portraits/thumb/women/76.jpg"
            alt="user profile"
          />
        </div>

        <div className="flex ml-6">
          <Button label="Only my issue" variant="secondary" />
          <Button label="Recently updated" variant="secondary" styles={{ marginLeft: '10px' }} />
        </div>
      </div>

      <div className="flex justify-between w-full">
        <Block heading="backlog" id="backlog" searchQuery={searchQuery} />
        <Block heading="todo" searchQuery={searchQuery} />
        <Block heading="in progress" searchQuery={searchQuery} />
        <Block heading="completed" searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default KanBanBoard;
