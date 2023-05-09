import React from "react";

function List() {
  const names = ["Anuj", "Ritik", "Ravi", "Shivam"];

  const listItems = names.map((name, index) =>
    React.createElement("li", { key: index }, name)
  );

  return <ul>{listItems}</ul>;
}

export default List;
