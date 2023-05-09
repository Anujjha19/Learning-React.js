import React, { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setErrorMessage("All fields are required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Invalid email format.");
    } else if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
    } else {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
    setSubmitted(false);
  };

  if (submitted) {
    return <h1>Welcome, {name}!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default LoginForm;
