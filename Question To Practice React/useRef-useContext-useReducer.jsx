import React, { useRef, useContext , createContext , useReducer } from 'react';

const MyContext = createContext();

// Define a reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function MyComponent() {
  const inputRef = useRef(null);
  const { count, dispatch } = useContext(MyContext);
  const [state, dispatch2] = useReducer(reducer, { count: 0 });

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
      <p>State Count: {state.count}</p>
      <button onClick={() => dispatch2({ type: "increment" })}>+</button>
      <button onClick={() => dispatch2({ type: "decrement" })}>-</button>
    </div>
  );
}

export default MyComponent;
