import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authentication/authentication';

function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="navigation_menu">
      <NavLink className="logo" to="/">
        Classes
      </NavLink>
      <nav className="nav_menu">
        <ul className="nav_list">
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
            <button
              onClick={() => {
                dispatch(logout());
              }}
              type="button"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
