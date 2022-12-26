import React, { Component } from 'react'
import AddUser from './AddUser'
import ShowUser from './ShowUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
class PhoneDirectory extends Component {

  constructor() {
    super();
    this.state = {
      userList: [{
        id: 1,
        username: 'Guvi-B41 - *******',
        phone: '123123123123'
      },
      {
        id: 2,
        username: 'Mani - ######',
        phone: '45345345'
      }]
    }
  }

  addUser = (newUser) => {
    let userListNew = this.state.userList;
    if (userListNew.length > 0) {
      newUser.id = userListNew[userListNew.length - 1].id + 1;
    }
    else {
      newUser.id = 1;
    }
    userListNew.push(newUser);
    this.setState({ userList: userListNew });
    console.log(this.state.userList);
  }

  render() {
    return (
      // <AddUser addUserHandler={this.addUser} />
      // <ShowUser userList={this.state.userList}></ShowUser>
      <div className='main-container'>
        <Router>
          <Routes>
            <Route exact path='/' element={<ShowUser userList={this.state.userList} />}>
            </Route>

            <Route exact path='/add' element={<AddUser addUserHandler={this.addUser} />}>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default PhoneDirectory;