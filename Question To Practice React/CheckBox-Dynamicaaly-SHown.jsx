import React, { useState } from "react";

const Checklist = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
      ))}
      <p>Selected Options: {selectedOptions.join(", ")}</p>
    </div>
  );
};

export default Checklist;
