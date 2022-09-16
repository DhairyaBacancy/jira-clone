import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

  return <div>ProjectDesasasatail</div>;
};

export default ProjectDetail;
