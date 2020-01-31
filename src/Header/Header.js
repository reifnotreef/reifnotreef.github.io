import React, { useState, useEffect } from 'react';

import Loading from '../services/loading';
import getUser from '../services/getUser';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(info => setUser(info));
  }, []);

  return user == null ? (
    <Loading />
  ) : (
    <section>
      <img src={user.avatarUrl} alt='me' />
      <h4>{user.name}</h4>
      <p>
        contact:{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`mailto:${user.email}`}
        >
          email
        </a>
      </p>
      <p>bio: {user.bio}</p>
      <p>looking for work: {user.isHireable === true ? 'yep' : 'nope'}</p>
    </section>
  );
};
export default Header;
