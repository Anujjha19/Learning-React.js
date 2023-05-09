import React, { useState } from 'react';
import './PracticeForm.css';

const PracticeForm = () => {
  const [value, setValue] = useState('');
  const [fullValue, setFullValue] = useState('');

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFullValue(value);
  };

  return (
    <div className="form-container">
      <h1>Hello {fullValue}</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={inputChange}
          value={value}
        />
        <button type="submit" onClick={onSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default PracticeForm;
