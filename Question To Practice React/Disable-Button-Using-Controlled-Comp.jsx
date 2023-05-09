/* import React, { useState } from 'react';

const DisableButton = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsDisabled(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDisabled}
          onChange={handleCheckboxChange}
        />
        Disable button
      </label>
      <br />
      <button disabled={isDisabled}>Click me!</button>
    </div>
  );
};

export default DisableButton;
 */

import React, { useState } from "react";

const DisableTextInput = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleCheckboxChange = (event) => {
    setIsDisabled(event.target.checked);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDisabled}
          onChange={handleCheckboxChange}
        />
        Disable text input
      </label>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isDisabled}
      />
    </div>
  );
};

export default DisableTextInput;
