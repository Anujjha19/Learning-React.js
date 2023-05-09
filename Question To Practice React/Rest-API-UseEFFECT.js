import React, { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {" "}
      <h1>My Blog Posts</h1>{" "}
      <ul>
        {" "}
        {data.map((item) => (
          <li key={item.id}>
            {" "}
            <h2>{item.title}</h2> <p>{item.body}</p>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};
export default App;
