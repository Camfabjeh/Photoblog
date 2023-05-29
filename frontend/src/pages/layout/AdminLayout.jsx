import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="container-fluid">
      <div className="row flex-fill">
        <div className="col-2 bg-secondary vh-100">
          <h2 className="text-center text-white">Menu</h2>
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
