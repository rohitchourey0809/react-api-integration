// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserListPage from "./components/UserListPage";
import CreateUserPage from "./components/CreateUserPage";
import EditUserPage from "./components/EditUserPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/users">User List</Link>
            </li> */}
            <li>
              <Link to="/create-user">Create User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/users" element={<UserListPage />} />
          <Route exact path="/create-user" element={<CreateUserPage />} />
          <Route exact path="/edit-user/:userId" element={<EditUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
