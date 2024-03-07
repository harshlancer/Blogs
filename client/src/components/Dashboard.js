import React from "react";
import { Routes, Route } from "react-router-dom";
import DashProfile from "./DashProfile";
import DashSidebar from "./DashSidebar";
import Footer from "./Footer";
import "./Dash.css";

function Dashboard() {
  return (
    <div>
      <div className="sidebar">
        <DashSidebar />
      </div>

      {/* Place all route components within the Routes component */}

      <Footer />
    </div>
  );
}

export default Dashboard;
