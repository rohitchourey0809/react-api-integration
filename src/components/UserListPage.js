// UserListPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api/userApi";

function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/edit-user/${user.id}`}>{user.email}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListPage;
