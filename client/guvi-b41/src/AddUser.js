import React, { Component } from 'react'
import Header from './Header'
import './AddUser.css'
import { Link } from 'react-router-dom';
export class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      username: '',
      phone: ''
    }
    console.log(this.state);
    console.log("Constructor called - Add User");
  }

  inputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
    console.log("inputChangeHandler called!!! - Add User");
  }

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addUserHandler(this.state);
  }

  render() {
    console.log("Render called!!! - Add User");
    const { username, phone } = this.state;
    return (
      <div>
        <Header heading="Add User"></Header>
        <div className='component-body-container'>
          <Link to="/">
            <button className='custom-btn'>Back</button>
          </Link>
          <form className='user-form' onSubmit={this.onFormSubmitted.bind(this)}>
            <label htmlFor='username' className='label-control'>Name: </label><br />
            <input id="username" type="text" className="input-control" name="username" onChange={this.inputChangeHandler}></input><br /><br />
            <label htmlFor='phone' className='label-control'>Phone: </label><br />
            <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangeHandler}></input><br /><br />
            <div className='user-info-container'>
              <span className='user-to-add-heading'>User to be added:</span><br />
              <span className='user-info'>Name: {username}</span><br />
              <span className='user-info'>Phone: {phone}</span>
            </div>
            <button type="submit" className='custom-btn add-btn'>Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddUser