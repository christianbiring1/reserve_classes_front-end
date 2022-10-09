import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sessionLogin } from '../redux/authentication/authentication';

function Home() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

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
      </div>
    </div>
  );
}

export default Home;
