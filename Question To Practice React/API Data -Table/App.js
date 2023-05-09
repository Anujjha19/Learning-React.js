import React, { useEffect, useState } from 'react';
import UserData from './UserData';

const API = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div>
      <h1>Table</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <UserData users={users} />
      </table>

      <style>{`
        table {
          border-collapse: collapse;
          width: 100%;
          max-width: 800px;
          margin: 20px auto;
          background-color: #fff;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
          font-family: Arial, sans-serif;
        }
        
        th,
        td {
          text-align: left;
          padding: 10px;
          border: 1px solid #ddd;
        }
        
        th {
          background-color: #f2f2f2;
          font-weight: bold;
          color: #333;
        }
        
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default App;
