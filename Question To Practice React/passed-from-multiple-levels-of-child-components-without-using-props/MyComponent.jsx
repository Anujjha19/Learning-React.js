import React, { useContext } from "react";
import { MyContext } from "./MyProvider";

const MyComponent = () => {
  // Use the useContext hook to get the current context value
  const { myValue, setMyValue } = useContext(MyContext);

  const handleButtonClick = () => {
    // Update the value using the setMyValue function
    setMyValue("new value");
  };

  return (
    <div>
      <p>Current value: {myValue}</p>
      <button onClick={handleButtonClick}>Update value</button>
    </div>
  );
};

export default MyComponent;
