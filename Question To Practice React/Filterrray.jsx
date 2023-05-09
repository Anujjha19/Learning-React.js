//Create a react Js Component To perform A filter operation on an array , take your array of your on

import React, { useState } from "react";

const FilterArray = () => {
  // Example array of numbers
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // State to hold filtered numbers
  const [filteredNumbers, setFilteredNumbers] = useState(numbers);

  // Handler for filtering even numbers
  const handleFilterEven = () => {
    const filtered = numbers.filter((num) => num % 2 === 0);
    setFilteredNumbers(filtered);
  };

  // Handler for filtering odd numbers
  const handleFilterOdd = () => {
    const filtered = numbers.filter((num) => num % 2 !== 0);
    setFilteredNumbers(filtered);
  };

  return (
    <div>
      <h2>Filter Array Example</h2>
      <button onClick={handleFilterEven}>Filter Even Numbers</button>
      <button onClick={handleFilterOdd}>Filter Odd Numbers</button>
      <ul>
        {filteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterArray;

/* //Create a react Js Component To perform A filter operation
 on an array , take your array of your on
import React, { useState } from 'react';

const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Bob Johnson', age: 35 },
  { id: 4, name: 'Alice Lee', age: 40 },
  { id: 5, name: 'David Brown', age: 45 },
];

const FilterExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterExample; */
