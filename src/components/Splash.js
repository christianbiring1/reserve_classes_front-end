import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sessionLogin } from '../redux/authentication/authentication';

function Splash(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const { flash } = props;

  const hanldeSubmit = (e) => {
    dispatch(sessionLogin({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
    e.preventDefault();
  };
  return (
    <div>
      <h1>Login</h1>
      {flash && (
        <h6 className="flash_warn">You must be logged in to continue.</h6>
      )}
      <div>
        <form onSubmit={hanldeSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={emailRef}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

Splash.propTypes = {
  flash: PropTypes.bool,
};

Splash.defaultProps = {
  flash: false,
};

export default Splash;
