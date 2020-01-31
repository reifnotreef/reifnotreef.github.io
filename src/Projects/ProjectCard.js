import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const ProjectCard = props => {
  return (
    <section className='project-card' key={props.project.id}>
      <h3 className='project-name'>{props.project.name}</h3>
      {props.project.homepageUrl !== '' ? (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={props.project.homepageUrl}
        >
          <WebIcon htmlColor='black' />
        </a>
      ) : (
        <></>
      )}
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={props.project.projectsUrl}
      >
        <GitHubIcon htmlColor='black' />
      </a>
      <p className='project-description'>About: {props.project.description}</p>
      <p className='project-languages'>
        {props.project.languages.edges.length > 1 ? (
          <>Languages</>
        ) : (
          <>Language</>
        )}
        :{' '}
        {props.project.languages.edges.map(i => (
          <p>{i.node.name}</p>
        ))}
      </p>
    </section>
  );
};

export default ProjectCard;
