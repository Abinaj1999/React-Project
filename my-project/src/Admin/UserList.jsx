import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Admin from './Admin';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:3000/USERS")
      .then((response) => {
        const usersData = response.data;
        setUsers(usersData);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const handleBlockUser = (userId) => {
    axios.patch(`http://localhost:3000/USERS/${userId}`, { isBlocked: true })
      .then(() => {
        const updatedUsers = users.map(user => {
          if (user.id === userId) {
            return { ...user, isBlocked: true };
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error('Error blocking user:', error);
      });
  };

  const handleUnblockUser = (userId) => {
    axios.patch(`http://localhost:3000/USERS/${userId}`, { isBlocked: false })
      .then(() => {
        const updatedUsers = users.map(user => {
          if (user.id === userId) {
            return { ...user, isBlocked: false };
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error('Error unblocking user:', error);
      });
  };

  return (
    <>
    <Admin/>
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">User Management</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.FirstName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.LastName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.PhoneNo}</td>
              <td className="border border-gray-300 px-4 py-2">{user.isBlocked ? 'Blocked' : 'Unblocked'}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.isBlocked ? (
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded" onClick={() => handleUnblockUser(user.id)}>Unblock</button>
                ) : (
                  <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded" onClick={() => handleBlockUser(user.id)}>Block</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default UserList;




