import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css"; // Make sure the path to your CSS file is correct
import {
  signinStart,
  signinSuccess,
  signinFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, error: errorMsg } = useSelector((state) => state.user);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signinStart());
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Corrected header
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signinFailure(data.message));
      }
      if (res.ok) {
        // If response status is okay, sign-in was successful
        dispatch(signinSuccess(data));
        navigate("/");
      } else {
        // If response status is not okay, handle error
        dispatch(signinFailure(data.message));
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {errorMsg && <div className="error-message">{errorMsg}</div>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
      <div className="signup-link">
        New user?{" "}
        <Link className="signUpButton" to="/signUp">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
