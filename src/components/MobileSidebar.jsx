import React from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-start d-lg-none bg-dark text-white"
      tabIndex="-1"
      id="mobileSidebar"
      aria-labelledby="mobileSidebarLabel"
    >
      <div className="offcanvas-header bg-dark text-white">
        <h5 className="offcanvas-title" id="mobileSidebarLabel">Menu</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body p-0">
        <Sidebar />
      </div>
    </div>
  );
};

export default MobileSidebar;
