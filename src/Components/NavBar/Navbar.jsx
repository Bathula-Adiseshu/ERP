// NavBar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-link">
          <NavLink to="/" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/orders" activeClassName="active">
            Orders
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/calendar" activeClassName="active">
            Calendar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
