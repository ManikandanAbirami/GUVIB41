import React, { useContext, useState } from 'react';
import { AppContext } from '../context';

const AddUser = () => {
  const { dispatchUserEvent } = useContext(AppContext);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');

  const handleAddUser = () => {
    const user = { id: Math.random(), name, age, bio };
    dispatchUserEvent('ADD', { newUser: user });
  }

  return (
    <div>
      <h2>Add New User</h2>
      <input type='text' value={name} onChange={e => { setName(e.target.value) }} placeholder="name">
      </input>
      <br />
      <input type='text' value={age} onChange={e => { setAge(e.target.value) }} placeholder="age">
      </input>
      <br />
      <input type='text' value={bio} onChange={e => { setBio(e.target.value) }} placeholder="bio">
      </input>
      <br />

      <button onClick={handleAddUser}> Add</button>
    </div >
  )
}

export default AddUser;
