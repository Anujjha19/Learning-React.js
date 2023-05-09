//Changing the color button and message of submit button
import React, { useState } from "react";

const SubmitButton = () => {
  const [buttonColor, setButtonColor] = useState("blue");
  const [buttonMessage, setButtonMessage] = useState("Submit");

  const handleClick = () => {
    setButtonColor("green");
    setButtonMessage("Submitted!");
  };

  return (
    <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
      {buttonMessage}
    </button>
  );
};

export default SubmitButton;
