//Implement a search functionality in react that
//alolow s user to filter the list of items based
//on search query enterd in input field react

import React, { useState } from "react";

const SearchableList = ({
  items = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "peach",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "ugli fruit",
    "watermelon"
  ]
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let filteredItems = [];

  if (items) {
    filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
