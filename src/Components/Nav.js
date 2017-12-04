// navigation menu component

import React from 'react';

// Imports the NavLink Component which can recognise the current url
// and allows links to be styles as active
import { NavLink } from 'react-router-dom';

// Returns the Nav buttons when the Component is rendered in the app
const Nav = props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink exact to='/'>Search</NavLink></li>
      <li><NavLink to='/cats'>Cats</NavLink></li>
      <li><NavLink to='/dogs'>Dogs</NavLink></li>
      <li><NavLink to='/computers'>Computers</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
