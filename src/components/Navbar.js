import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav_container">
      <nav className="nav_menu">
        <ul className="nav_list">
          <li className="nav_item">
            <NavLink to="/">
              CLASSES
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/newreservation">
              RESERVE CLASS
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/reservations">
              MY RESERVATIONS
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/add">
              ADD CLASS
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to="/">
              DELETE CLASS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
