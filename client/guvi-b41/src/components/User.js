import { useContext } from 'react';
import { AppContext } from '../context';

const User = ({ user }) => {
  const { dispatchUserEvent } = useContext(AppContext);

  const handleRemoveUser = () => {

    dispatchUserEvent('REMOVE', { userId: user.id });

  }

  return (
    <div className='User'>
      <h2>{user.name}</h2>
      <h3>{user.age}</h3>
      <div>
        <small>{user.bio}</small>
      </div>

      <button onClick={handleRemoveUser}>Delete</button>
    </div>
  )
}

export default User;