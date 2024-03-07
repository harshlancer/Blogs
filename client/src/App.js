import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Investment from "./components/Investment";
import Trading from "./components/Trading";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import DashProfile from "./components/DashProfile";
import DashSidebar from "./components/DashSidebar";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  const username = currentUser?.userData?.username;
  const profilePicture = currentUser?.userData?.profilePicture;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="home">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/investment">Investment</Link>
          </li>
          <li>
            <Link to="/trading">Trading</Link>
          </li>
          <li>
            <Link to="/learning">Learning</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {currentUser ? (
            <div className="profile-dropdown-div">
              <ul>
                <li className="profile-dropdown">
                  <img
                    className="profilePicture"
                    src={profilePicture}
                    onClick={handleDropdownClick}
                    alt="Profile Picture"
                  />
                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      <ul>
                        <li>Hello {username.toUpperCase()}</li>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/logout">Logout</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          ) : (
            <>
              <li>
                <Link to="/signUp">SignUp</Link>
              </li>
              <li>
                <Link to="/signIn">SignIn</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/investment" element={<Investment />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<DashProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
