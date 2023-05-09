//Create a component by adding button sumbit 1 and
//2 and 3 and render on user click it should alert
// which button should click.
import React from "react";

const ButtonExample = () => {
  const handleClick = (buttonNum) => {
    alert(`You clicked button ${buttonNum}`);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Submit 1</button>
      <button onClick={() => handleClick(2)}>Submit 2</button>
      <button onClick={() => handleClick(3)}>Submit 3</button>
    </div>
  );
};

export default ButtonExample;
