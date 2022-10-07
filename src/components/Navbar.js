import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      Navbar

      <NavLink to="/groups/addgroup">
        Add Class
        {' '}
        <h6>If admin</h6>
      </NavLink>

    </div>
  );
}

export default Navbar;
