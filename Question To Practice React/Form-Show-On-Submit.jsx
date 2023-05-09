// Create the form.

import React, { useState } from "react";

const FormExample = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Simple Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
        </div>
      )}
    </div>
  );
};

export default FormExample;
