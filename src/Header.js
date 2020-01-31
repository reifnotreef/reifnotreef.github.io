import React, { useState, useEffect } from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
import getUser from './services/getUser';

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
      <div>
        <h4>{user.name}</h4>
        <p>looking for work: {user.isHireable === true ? 'yep' : 'nope'}</p>
        <p style={{ maxWidth: '60rem' }}>bio: {user.bio}</p>
      </div>
    </section>
  );
};
export default Header;
