import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <NavLink to="/">
        CLASSES
      </NavLink>
      <NavLink to="/newreservation">
        RESERVE CLASS
      </NavLink>
      <NavLink to="/reservations">
        MY RESERVATIONS
      </NavLink>
      <NavLink to="/add">
        ADD CLASS
      </NavLink>
      <NavLink to="/">
        DELETE CLASS
      </NavLink>
    </div>
  );
}

export default Navbar;
