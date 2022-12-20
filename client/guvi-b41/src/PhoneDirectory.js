import React, { Component } from 'react'
import AddUser from './AddUser'

class PhoneDirectory extends Component {

  constructor() {
    super();
    this.state = {
      userList: []
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
      <AddUser addUserHandler={this.addUser} />
    )
  }
}

export default PhoneDirectory;