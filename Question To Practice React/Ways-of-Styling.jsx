import React from "react";
import "./styles.css";

const styleObj = {
  backgroundColor: "lightblue",
  color: "white",
  padding: "10px",
  borderRadius: "5px"
};

function App() {
  return (
    <div>
      {/* Inline CSS */}
      <h1 style={{ color: "red", textDecoration: "underline" }}>
        Inline CSS Example
      </h1>

      {/* External CSS */}
      <h2 className="title">External CSS Example</h2>

      {/* Internal CSS */}
      <p style={styleObj}>Internal CSS Example</p>
    </div>
  );
}

export default App;

/* Inline 

function InlineStyling() {
  const myStyle = {
    color: "blue",
    backgroundColor: "lightgrey",
    padding: "10px",
    border: "1px solid black"
  };

  return (
    <div style={myStyle}>
      <p>This is an example of inline styling.</p>
    </div>
  );
}

External 
// styles.css
.myDiv {
  color: blue;
  background-color: lightgrey;
  padding: 10px;
  border: 1px solid black;
}

// App.js
import './styles.css';

function ExternalCSS() {
  return (
    <div className="myDiv">
      <p>This is an example of external CSS.</p>
    </div>
  );
}


Internal
function InternalCSS() {
  return (
    <div>
      <style>
        {`
          .myDiv {
            color: blue;
            background-color: lightgrey;
            padding: 10px;
            border: 1px solid black;
          }
        `}
      </style>
      <div className="myDiv">
        <p>This is an example of internal CSS.</p>
      </div>
    </div>
  );
}
 */
