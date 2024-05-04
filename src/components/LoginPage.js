import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validation";
import "../styles/Loginpage.css"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    } else if (!validatePassword(password)) {
      setPasswordError("Invalid password");
      return;
    }

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
       await axios.post(
        "https://reqres.in/api/users",
        { email, password },
        { headers }
      );

      navigate("/users");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {emailError && <div>{emailError}</div>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {passwordError && <div>{passwordError}</div>}
      <button className="submit" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
