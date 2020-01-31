import BottomNavigation from '@material-ui/core/BottomNavigation';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

import React from 'react';

export const Navigation = () => {
  return (
    <BottomNavigation
      style={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        height: '1.6rem',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-around'
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
    </BottomNavigation>
  );
};
