//Search from the content of the table

import React, { useState } from "react";

const TableWithSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([
    { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 30, occupation: "Designer" },
    { id: 3, name: "Charlie", age: 35, occupation: "Manager" },
    { id: 4, name: "David", age: 40, occupation: "Developer" }
  ]);

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = value
      ? filteredData.filter(
          (item) =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.age.toString().includes(value) ||
            item.occupation.toLowerCase().includes(value.toLowerCase())
        )
      : [
          { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
          { id: 2, name: "Bob", age: 30, occupation: "Designer" },
          { id: 3, name: "Charlie", age: 35, occupation: "Manager" },
          { id: 4, name: "David", age: 40, occupation: "Developer" }
        ];

    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithSearch;
