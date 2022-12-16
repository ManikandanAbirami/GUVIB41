import React, { Component } from 'react'
import './App.css';
import Header from './Header';

export class App extends Component {
  users = [
    {
      id: 100,
      name: "Jack",
      ph: "8987898989",
    },
    {
      id: 101,
      name: "Jill",
      ph: "7676768978",
    },
    {
      id: 102,
      name: "Mary",
      ph: "9089787678"
    }
  ]
  deleteHandler(msg) {
    alert("Display msg: " + msg);
  }
  render() {
    return (
      <div className='component-container'>
        <Header heading="Phone Directory Application" />
        <div className='component-body-container'>
          <button className='custom-btn add-btn'> Add </button>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'> Name </span>
            <span className='grid-item phone-heading'> Ph No </span>
          </div>
          {
            this.users.map(user => {
              return <div key={user.id} className='grid-container'>
                <span className='grid-item'> {user.name} </span>
                <span className='grid-item'> {user.ph} </span>
                <span className='grid-item action-btn-container'>
                  <button className='custom-btn delete-btn' onClick={this.deleteHandler.bind(this, "Item Deleted!!!")}>Delete</button>
                </span>
              </div>
            })
          }

        </div>
        <Header footer="Phone Directory Application - Footer" />
      </div>
    )
  }
}

//react.createElement(element_name, element_properties, children)

//ReactDOM.render(ar1, arg2); arg1 - What to render, where to render.

export default App;
