import React, { useRef } from 'react';
import axios from 'axios';

function Registration() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const hanldeSubmit = (e) => {
    axios.post('http://localhost:3001/registrations', {
      user: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    },
    { withCredentials: true });
    // .then((response) => {
    // }).catch((error) => {
    // });
    e.preventDefault();
  };

  return (
    <div>
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
    </div>
  );
}

export default Registration;
