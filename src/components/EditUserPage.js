// EditUserPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../api/userApi";
import "../styles/userdetail.css"

function EditUserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserDetails(userId)
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, [userId]);

  return (
    <div className="container">
      <h2>Edit User</h2>
      {user ? (
        <div className="user-details">
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
          <img src={user.avatar} alt="Avatar" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EditUserPage;
