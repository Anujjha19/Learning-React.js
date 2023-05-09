//Using properties make one table with rows and
//columns.

import React from "react";

const App = () => {
  const tableData = [
    { name: "John Doe", age: 25, email: "johndoe@example.com" },
    { name: "Jane Doe", age: 30, email: "janedoe@example.com" },
    { name: "Bob Smith", age: 40, email: "bobsmith@example.com" }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
