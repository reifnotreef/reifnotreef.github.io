import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const ProjectCard = props => {
  return (
    <section
      className='project-card'
      key={props.project.id}
      style={{ borderTop: '1px solid black' }}
    >
      <div>
        <h3
          className='project-name'
          style={{ display: 'inline-block', margin: 0 }}
        >
          {props.project.name}
        </h3>
        <a
          className='project-links'
          target='_blank'
          rel='noopener noreferrer'
          href={props.project.url}
          style={{ display: 'inline-block', paddingLeft: '1rem' }}
        >
          <GitHubIcon htmlColor='black' />
        </a>
        {props.project.homepageUrl !== '' ? (
          <a
            className='project-links'
            target='_blank'
            rel='noopener noreferrer'
            href={props.project.homepageUrl}
          >
            <WebIcon htmlColor='black' />
          </a>
        ) : (
          <></>
        )}
      </div>
      <p className='project-description' style={{ maxWidth: '60rem' }}>
        {props.project.description}
      </p>
      <p className='project-languages'>Languages: </p>
      <ul>
        {props.project.languages.edges.map((i, key) => (
          <li key={key}>{i.node.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectCard;
