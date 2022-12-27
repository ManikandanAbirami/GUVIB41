import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("About to execute useEffect!!!");
    document.title = `Clicked ${count} times`;
  })

  const increment = () => {
    console.log("About to execute setcount!!!");
    setCount(count + 1);
  }
  return (
    <div>
      <h2>Counter App</h2>
      <Button type='primary' onClick={increment}>Clicked {count} times</Button>
    </div>
  )
}

// class App extends Component {
//   state = {
//     count: 0
//   }
//   increment = () => {
//     console.log("increment!!!!");
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   componentDidMount() {
//     console.log("componentDidMount!!!!");
//     document.title = `Clicked ${this.state.count} times`
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate!!!!");
//     document.title = `Clicked ${this.state.count} times`
//   }

//   render() {
//     console.log("render!!!!");
//     return (
//       <div>
//         <h2>Counter App</h2>
//         <Button type='primary' onClick={this.increment}>
//           Clicked {this.state.count} times
//         </Button>
//       </div>
//     );
//   }
// }

export default App;
