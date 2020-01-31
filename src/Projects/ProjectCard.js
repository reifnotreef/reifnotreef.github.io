import React from 'react';

const ProjectCard = props => {
  return (
    <section className='project-card' key={props.project.id}>
      <h3 className='project-name'>{props.project.name}</h3>
      <p className='project-description'>what: {props.project.description}</p>
      <p className='project-languages'>
        how (mostly): {props.project.primaryLanguage.name}
      </p>
      <p className='project-code-link'>
        where:
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={props.project.projectsUrl}
        >
          github
        </a>
      </p>
    </section>
  );
};

export default ProjectCard;
