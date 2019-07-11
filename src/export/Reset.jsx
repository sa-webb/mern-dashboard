import React from 'react';
import axios from 'axios';

const { useState } = React;

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

export const Signup = () => {
  const [
    { username, email, password, passwordConfirmation },
    setState
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
      
    };
    axios
      .post("http://localhost:5000/users/add", newUser).then(clearState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input value={username} name="username" onChange={onChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input value={email} name="email" onChange={onChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            value={password}
            name="password"
            type="password"
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            value={passwordConfirmation}
            name="passwordConfirmation"
            type="password"
            onChange={onChange}
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};