
//Display the login form    -> landing page welcome to lpu

import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can perform login validation here
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <h1>Welcome to LPU!</h1>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
