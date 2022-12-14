import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';


//react.createElement(element_name, element_properties, children)

//ReactDOM.render(ar1, arg2); arg1 - What to render, where to render

function App() {
  let name = 'Guvi B41-WD'
  return (
    <div>
      <Header />
      <button> Add </button>
      <div>
        <span> Name </span><br />
        <span> Ph No </span>
      </div>
    </div>
  );
}

export default App;
