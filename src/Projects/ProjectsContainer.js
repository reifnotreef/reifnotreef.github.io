import React, { useEffect, useState } from 'react';

import ProjectCard from './ProjectCard';
import getProjects from '../services/getProjects';
import Loading from '../services/loading';

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(projs => setProjects(projs));
  }, []);

  return (
    <>
      <section className='projects-header'>
        <h1>My Projects</h1>
      </section>
      <section className='projects-container'>
        {projects && projects.length > 0 ? (
          projects.map(i => <ProjectCard project={i} key={i.id} />)
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default ProjectsContainer;
