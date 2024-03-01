import React from "react";
import { UseSelector, useSelector } from "react-redux";
function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  return <div>Dashboard</div>;
}

export default Dashboard;
