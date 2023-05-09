//Create a react form to make a new item
//in the table.

import { useState } from 'react';

function App() {
  // Initialize state for the items in the table
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', description: 'Description of Item 1' },
    { id: 2, name: 'Item 2', description: 'Description of Item 2' },
    { id: 3, name: 'Item 3', description: 'Description of Item 3' }
  ]);

  // Initialize state for the new item's name and description
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Handle changes to the new item's name input field
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Handle changes to the new item's description input field
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Handle submission of the form to add a new item to the table
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object with the next available ID
    const newItem = {
      id: items.length + 1,
      name: name,
      description: description
    };

    // Update the items state with the new item
    setItems([...items, newItem]);

    // Clear the name and description input fields
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
