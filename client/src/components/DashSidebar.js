import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
// Assuming you're using React Router for navigation
import "./Dash.css";
function DashSidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      </ul>
    </div>
  );
}

export default DashSidebar;
