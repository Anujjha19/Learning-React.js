import React, { useRef, useContext } from "react";
import MyContext from "./MyContext";

function MyComponent() {
  const inputRef = useRef(null);
  const { count, dispatch } = useContext(MyContext);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default MyComponent;
