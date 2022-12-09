import logo from './logo.svg';
import './App.css';
import React from 'react';


//react.createElement(element_name, element_properties, children)

//ReactDOM.render(ar1, arg2); arg1 - What to render, where to render

function App() {
  let name = 'Guvi B41-WD'
  return (
    <div>
      <div className="header">
        Phone Book Application
      </div>
      <button> Add </button>
      <div>
        <span> Name </span><br />
        <span> Ph No </span>
      </div>
    </div>

    // <div id="name">
    //   <p> MERN STACK </p>
    // </div>

    // React.createElement("div", { id: "name" },
    //   React.createElement("p", null, "MERN STACK"))
  );
}

export default App;
