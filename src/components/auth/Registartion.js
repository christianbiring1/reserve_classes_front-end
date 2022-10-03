import React, { useRef, useState } from 'react';
import axios from 'axios';
function Registration() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmationRef = useRef(null);

  const [user, setuser] = useState({name: '', email:'', password: '', password_confirmation: ''});

  const hanldeSubmit= (e) => {
    axios.post('http://localhost:3001/registrations', {
    user: {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.passwordConfirmation
    }
  },
  { withCredentials: true }
  ).then(response => {
    console.log('registration response', response);
  }).catch(error => {
    console.log('regitration error', error);
  });
  console.log(user);
    e.preventDefault();
  }

  const hanldeChange = (e) => {
    setuser({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: password_confirmationRef.current.value
    })
  }
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder='Name'
          ref={nameRef}
          onChange={hanldeChange}
          required
        /><br/>
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          ref={emailRef}
          onChange={hanldeChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder='Password'
          ref={passwordRef}
          onChange={hanldeChange}
          required
        /><br />
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder='Password Confirmation'
          ref={password_confirmationRef}
          onChange={hanldeChange}
          required
        /><br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Registration;