import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react'
import { Button } from 'antd'

const lazyValue = () => {
  return 'Hello, Guvi WD-41';
}

function App() {

  const [counter, setCounter] = useState(5);
  // const arr = useState(() => console.log('Hello world!!'));
  // const state = arr[0];
  // const setState = arr[1];
  // console.log(arr)
  return (
    <div>
      <h1 onClick={() => {
        setCounter((a) => { //functional update
          return a + 1;
        })
        // setCounter(counter + 1); //direct
      }}>
        Counter: {counter}
      </h1>
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   })

//   const increment = () => {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h2>Counter App</h2>
//       <Button type='primary' onClick={increment}>Clicked {count} times</Button>
//     </div>
//   )
// }

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
