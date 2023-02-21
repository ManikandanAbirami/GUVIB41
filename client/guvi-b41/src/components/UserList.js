import React, { useContext } from 'react';
import { AppContext } from '../context';
import User from './User';

const UserList = () => {
  const { users } = useContext(AppContext);
  return (
    <div>
      <h2>Available Users</h2>
      {users.map(user => <User key={user.id} user={user}></User>)}
    </div>
  )
}

export default UserList;