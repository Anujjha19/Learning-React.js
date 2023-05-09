import React, { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && <p>This element is visible</p>}
      <button onClick={handleButtonClick}>Hide element</button>
    </div>
  );
};

export default App;
