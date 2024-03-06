import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./signUp.css";
import Auth from "./Auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Corrected header
        body: JSON.stringify(formData),
      });
      const userData = await res.json();
      if (userData.success === false) {
        return setErrorMsg(userData.message);
      }
      console.log(userData); // Log response data
      setLoading(false); // Set loading state to false after successful request
      if (res.ok) {
        navigate("/"); // Use navigate function to redirect
      }
    } catch (error) {
      setErrorMsg(error.message); // Set error message
      setLoading(false); // Set loading state to false after error
    }
  };

  return (
    <div className="center-container">
      <div className="signup-container">
        <h2>Sign Up</h2>
        {errorMsg && <div className="error-message">{errorMsg}</div>}{" "}
        {/* Display error message if exists */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@company@gmailcom"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? <div className="loading-spinner" /> : "Sign Up"}{" "}
            {/* Show loading spinner if loading */}
          </button>
        </form>
        <div className="signin-link">
          Already user?{" "}
          <Link className="signInbutton" to="/signin">
            SignIn
          </Link>
        </div>
        <Auth></Auth>
      </div>
    </div>
  );
};

export default Signup;
