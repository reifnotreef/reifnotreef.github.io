import React, { useState, useEffect } from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
import getUser from './services/getUser';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(info => setUser(info));
  }, []);

  return user == null ? (
    <Skeleton
      variant='circle'
      animation='pulse'
      height={'20rem'}
      width={'20rem'}
    />
  ) : (
    <section className='header-container'>
      <img
        src={user.avatarUrl}
        alt='me'
        className='profile-image'
        style={{
          height: '20rem',
          width: '20rem',
          borderRadius: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block'
        }}
      />
      <div className='header-copy'>
        <h4>{user.name}</h4>
        <p>
          hirable:{' '}
          {user.isHireable === true ? (
            <CheckCircleOutlineIcon
              className='hireable-icon'
              htmlColor='black'
              style={{
                display: 'inline-block',
                position: 'relative',
                top: '5px'
              }}
            />
          ) : (
            <HighlightOffIcon
              className='hireable-icon'
              htmlColor='black'
              style={{
                display: 'inline-block',
                position: 'relative',
                top: '5px'
              }}
            />
          )}
        </p>
        <p style={{ maxWidth: '60rem' }}>about me: {user.bio}</p>
        <p style={{ maxWidth: '60rem' }}>company: <a href={user.company}} /></p>
      </div>
    </section>
  );
};
export default Header;
