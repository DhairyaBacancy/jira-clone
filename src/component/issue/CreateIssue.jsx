import React, { useEffect, useId, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import Button from '../UI/Button';
import Textbox from '../UI/Textbox';
import Selectbox from '../UI/Selectbox';

import { addIssue } from '../../redux/slice/issueSlice';

import projects from '../../data/projects.json';
import priorities from '../../data/priority.json';
import users from '../../data/users.json';
import issueTypes from '../../data/issueType.json';

const INITIAL_DATA = {
  project: null,
  type: null,
  priority: null,
  reporter: null,
  summary: '',
  description: '',
  assignee: null,
  ticketPoint: ''
};

const CreateIssue = ({ onCancel }) => {
  const textareaId = useId();
  const checkboxId = useId();
  const dispatch = useDispatch();

  const [options, setOptions] = useState({
    project: [],
    issueType: [],
    priority: [],
    reporter: [],
    assignee: []
  });
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid(formData)) {
      setIsFormDirty(true);
      return false;
    }
    dispatch(addIssue(formData));
    onCancel();
  };

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = (obj) => {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === '') return false;
    }
    return true;
  };

  useEffect(() => {
    const projectOptions = projects.map((project) => {
      return {
        name: project.name,
        value: project.key
      };
    });
    const priorityOptions = priorities.map((priority) => {
      return {
        name: priority.name,
        value: priority.id
      };
    });
    const userOptions = users.map((user) => {
      return {
        name: user.name,
        value: user.id
      };
    });
    const typeOptions = issueTypes.map((type) => {
      return {
        name: type.name,
        value: type.id
      };
    });

    setOptions({
      project: projectOptions,
      priority: priorityOptions,
      issueType: typeOptions,
      reporter: userOptions,
      assignee: userOptions
    });
  }, []);

  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center py-2">
        <h3 className="text-lg font-semibold">Create issue</h3>
        <div className="flex items-center">
          <Button label="Import issue" onClick={() => {}} />
          <BsThreeDots className="ml-4 hover:cursor-pointer" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="border-b pb-6">
          <div className="flex mt-4 justify-between">
            <div className="w-[calc(50%-10px)]">
              <Selectbox
                label="Project"
                placeholder="Select project"
                name="project"
                onChange={handleFormChange}
                options={options.project}
                value={formData.project}
                required
              />
            </div>
            <div className="w-[calc(50%-10px)]">
              <Selectbox
                label="Issue type"
                placeholder="Select issue type"
                name="type"
                onChange={handleFormChange}
                options={options.issueType}
                value={formData.type}
                required
              />
            </div>
          </div>

          <div className="flex mt-4 justify-between">
            <div className="w-[calc(50%-10px)]">
              <Selectbox
                label="Priority"
                placeholder="Select priority"
                name="priority"
                onChange={handleFormChange}
                options={options.priority}
                value={formData.priority}
                required
              />
            </div>
            <div className="w-[calc(50%-10px)]">
              <Selectbox
                label="Reporter"
                placeholder="Select reporter"
                name="reporter"
                onChange={handleFormChange}
                options={options.reporter}
                value={formData.reporter}
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Textbox
            label="Summary"
            required
            value={formData.summary}
            name="summary"
            onChange={handleFormChange}
          />
        </div>

        <div className="mt-4">
          <label className="font-semibold text-sm text-slate-600 pb-1" htmlFor={textareaId}>
            Description<span className="text-red-600">*</span>
          </label>
          <textarea
            className="border w-full outline-none p-1 rounded"
            name="description"
            onChange={handleFormChange}
            id={textareaId}
            rows="4"
            value={formData.description}
          ></textarea>
        </div>

        <div className="flex mt-1 mb-4 justify-between">
          <div className="w-[calc(50%-10px)]">
            <Selectbox
              label="Assignee"
              placeholder="Select Assignee"
              name="assignee"
              onChange={handleFormChange}
              options={options.assignee}
              value={formData.assignee}
              required
            />
          </div>
          <div className="w-[calc(50%-10px)]">
            <Textbox
              label="Ticket point"
              value={formData.ticketPoint}
              name="ticketPoint"
              onChange={handleFormChange}
              required
            />
          </div>
        </div>

        {isFormDirty && (
          <p className="text-xs text-red-600 text-right pb-2">Please fill required details</p>
        )}
        <div className="flex pt-6 pb-4 border-t">
          <div className="flex items-center">
            <input type="checkbox" name="" id={checkboxId} className="" />
            <label className="pl-2" htmlFor={checkboxId}>
              Create another issue
            </label>
          </div>
          <div className="ml-auto flex items-center">
            <Button label="Cancel" variant="text" onClick={onCancel} />
            <Button label="Create" type="submit" styles={{ marginLeft: '10px' }} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateIssue;
