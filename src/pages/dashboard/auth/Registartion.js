import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sessionSignUp } from '../../../redux/authentication/authentication';

function Registration() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const hanldeSubmit = (e) => {
    dispatch(sessionSignUp({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
    e.preventDefault();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          ref={nameRef}
          required
        />
        <br />
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
        <button type="submit">Register</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Registration;
