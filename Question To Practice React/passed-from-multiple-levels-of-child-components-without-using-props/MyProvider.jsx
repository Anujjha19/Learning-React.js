import React, { createContext, useState } from "react";

// Create the context with an initial value
export const MyContext = createContext("default value");

const MyProvider = ({ children }) => {
  const [myValue, setMyValue] = useState("initial value");

  return (
    // Provide the context with the value and make it available to all children
    <MyContext.Provider value={{ myValue, setMyValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
