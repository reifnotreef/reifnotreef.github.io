// import BottomNavigation from '@material-ui/core/BottomNavigation';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import React from 'react';

export const Navigation = () => {
  return (
    <div
      style={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        height: '2rem',
        paddingTop: '0.25rem',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center'
      }}
      className='navigation-container'
    >
      <div
        style={{
          width: '60rem',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}
      >
        <a href='#root'>
          <HomeIcon htmlColor='white' />
        </a>
        <a
          href='mailto:bridgerrhammond@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <EmailIcon htmlColor='white' />
        </a>
        <a
          href='https://github.com/reifnotreef'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon htmlColor='white' />
        </a>
        <a
          href='https://www.linkedin.com/in/bridgerhammond/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon htmlColor='white' />
        </a>
      </div>
    </div>
  );
};
