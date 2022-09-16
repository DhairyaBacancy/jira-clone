import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isValidArray } from '../../../utils/global.util';
import IssueCard from '../IssueCard';

const Block = ({ heading, id, searchQuery }) => {
  const { slug } = useParams();
  const issues = useSelector((state) => state.issues.data);

  const [projectIssues, setProjectIssues] = useState(null);

  useEffect(() => {
    const projectIssues = issues
      .filter((issue) => issue.project === slug)
      .filter((issue) => (searchQuery ? issue.summary.toLowerCase().includes(searchQuery) : issue));
    setProjectIssues(projectIssues);
  }, [issues, searchQuery]);

  return (
    <div className="bg-slate-100 w-[calc(25%-10px)] p-2 h-[80vh] overflow-y-auto">
      <h4 className="uppercase px-1 py-2 text-slate-500 font-semibold">{heading}</h4>
      <div className="">
        {id === 'backlog' &&
          isValidArray(projectIssues) &&
          projectIssues.map((issue, index) => <IssueCard key={index} {...issue} />)}
      </div>
    </div>
  );
};

export default Block;
