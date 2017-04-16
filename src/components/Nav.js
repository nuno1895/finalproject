import './Nav.css';
import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <nav>
          <NavLink exact to="/">HOME</NavLink>
          <NavLink to="/name">NAME</NavLink>
          <NavLink to="/results">RESULTS</NavLink>
        </nav> 
      </div>
    );
  }
}

export default Nav;