// CreateUserPage.js
import React, { useState } from "react";
import { createUser } from "../api/userApi";
import "../styles/CreateUserpage.css";

function CreateUserPage() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateUser = async () => {
    try {
      const response = await createUser({ name, job });
      setMessage(`User created with ID: ${response.id}`);
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage("Failed to create user");
    }
  };

  return (
    <div className="container">
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        required
      />
      <button onClick={handleCreateUser}>Create User</button>
      {message && <div>{message}</div>}
    </div>
  );
}

export default CreateUserPage;
