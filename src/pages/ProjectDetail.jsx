import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import KanBanBoard from '../component/projectDetail/KanBanBoard';
import Breadcrumb from '../component/UI/Breadcrumb';
import projects from '../data/projects.json';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const projectId = projects.find((project) => project.id === slug);
    if (!projectId) {
      navigate('/');
    }
  }, [slug]);

  return (
    <div>
      <div className="mb-8">
        <Breadcrumb title="Kanban Board" buttonTitle="Github Repo" buttonType="secondary" />
      </div>

      <KanBanBoard />
    </div>
  );
};

export default ProjectDetail;
