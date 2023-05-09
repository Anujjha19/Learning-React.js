//Display the list of items

import React from "react";

const items = ["Item 1", "Item 2", "Item 3"];

const ListOfItems = () => {
  return (
    <div>
      <h2>List of Items:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#eee"
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfItems;
