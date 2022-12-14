// import React from "react";
// import './Header.css';

// function Header(props) {
//   return (
//     <div className="header">
//       {props.heading}
//       {props.footer}
//     </div>
//   )
// }

// export default Header


import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        {this.props.heading}
        {this.props.footer}
      </div>
    )
  }
}

export default Header