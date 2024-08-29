import './Table.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserInformationTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(result.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to retrieve user data:', err);
      setLoading(false);
    }
  };

  const showData = () => {
    fetchUsers();
  };

  const clearData = () => {
    setUsers([]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading user information...</p>;
  }

  return (
    <div>
      <h1>User Information</h1>
      <div className="action-buttons">
        <button className="btn btn-show" onClick={showData}>Display</button>
        <button className="btn btn-clear" onClick={clearData}>Clear</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserInformationTable;
