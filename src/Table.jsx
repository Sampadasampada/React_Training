// import './Assessment_1b.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetailsTable() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserInformation = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUserData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoading(false);
    }
  };

  const handleDisplayData = () => {
    fetchUserInformation();
  };

  const handleClearData = () => {
    setUserData([]);
  };

  useEffect(() => {
    fetchUserInformation();
  }, []);

  if (isLoading) {
    return <p>Retrieving user data...</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <div className="button-container">
        <button className="button button-fetch" onClick={handleDisplayData}>Show Data</button>
        <button className="button button-clear" onClick={handleClearData}>Clear Data</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
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

export default UserDetailsTable;