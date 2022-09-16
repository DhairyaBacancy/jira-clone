import React from 'react';
import { BsThreeDots, BsStar } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { isValidArray } from '../../utils/global.util';

const Table = ({ columns, rows }) => {
  const navigate = useNavigate();

  const handleRedirect = (url) => {
    navigate(url);
  };

  return (
    <table className="table w-full">
      <thead>
        <tr className="border-b">
          <th scope="col" className="text-center p-1.5 w-16">
            <span className="text-sm font-medium text-slate-700">*</span>
          </th>
          {isValidArray(columns) &&
            columns.map((column) => (
              <th scope="col" className="text-left p-1.5" key={column.key}>
                <span className="text-sm font-medium text-slate-700">{column.name}</span>
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {isValidArray(rows) &&
          rows.map((row) => (
            <tr
              className="border-b cursor-pointer"
              key={row.id}
              onClick={() => handleRedirect(row?.action.redirectLink)}
            >
              <th scope="row" className="p-1.5 flex justify-center">
                <BsStar className="hover:cursor-pointer" />
              </th>
              {isValidArray(columns) &&
                columns.map((column) => (
                  <th scope="row" className="text-left p-1.5" key={`${row.id}-${column.key}`}>
                    {column.key === 'action' ? (
                      <BsThreeDots className="hover:cursor-pointer" />
                    ) : (
                      <div className="font-medium">{row[column.key]}</div>
                    )}
                  </th>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
