import React, { useState } from "react";
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { AppContext } from './context';

function App() {
  const [users, setUsers] = useState([]);

  //actionType - (ADD, REMOVE, describes the type...)
  //payload - the actual content

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD':
        setUsers([...users, payload.newUser]);
        return;
      case 'REMOVE':
        setUsers(users.filter(user => user.id !== payload.userId));
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ users, dispatchUserEvent }}>
        <AddUser></AddUser>
        <UserList></UserList>
      </AppContext.Provider>
    </div>
  )
}

export default App;