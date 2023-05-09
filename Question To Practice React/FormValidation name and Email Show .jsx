import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (name !== "" && email !== "") {
      console.log(`Name: ${name} Email: ${email}`);
      setSubmitted(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span style={{ color: "red" }}>Name is mandatory</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <span style={{ color: "red" }}>Email is mandatory</span>
          )}
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p>
          You submitted: Name - {name}, Email - {email}
        </p>
      )}
    </>
  );
}

export default Form;
