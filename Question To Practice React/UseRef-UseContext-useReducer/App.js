import React, { useReducer } from "react";
import MyComponent from "./MyComponent";
import MyContext from "./MyContext";

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

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <MyContext.Provider value={{ count: state.count, dispatch }}>
      <MyComponent />
    </MyContext.Provider>
  );
}

export default App;
