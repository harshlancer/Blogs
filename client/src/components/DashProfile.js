import React, { useState } from "react";
import { useSelector } from "react-redux";

function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);

  const username = currentUser?.userData?.username;
  const profilePicture = currentUser?.userData?.profilePicture;
  // State variables for profile information
  // Initial password
  // Initial username
  const [oldUserName, setOldUserName] = useState(username);
  const [password, setPassword] = useState(""); // Initial password

  // Function to handle username change
  const handleUsernameChange = (event) => {
    setOldUserName(event.target.value);
  };
  // Function to handle password change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send updated username and password to the backend
    console.log("Updated username:", oldUserName);
    console.log("Updated password:", password);
    // Add logic to send data to the backend or update state as needed
  };

  return (
    <div className="signin-container">
      <h2>Hello {username}</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={profilePicture} // Replace with actual profile picture source
          alt="Profile Picture"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            margin: "auto",
          }}
        />
      </div>
      {/* Username Change Form */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={oldUserName}
            onChange={handleUsernameChange}
          />
        </div>
        <button type="submit">Change Username</button>
      </form>
      {/* Password Change Form */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}

export default DashProfile;
