import React from "react";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <h1 className="text-center text-primary">Mon blog photo</h1>
      <Outlet />
    </div>
  );
}

export default UserLayout;
