import React from "react";
import { FaBars, FaBell, FaSignOutAlt, FaUtensils } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3 shadow-sm">
      <span className="navbar-brand fw-semibold"><FaUtensils/>Food Ordering System</span>
      <button className="navbar-toggler border-0 ms-auto">
        <FaBars/>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto align-items-center gap-3">
          <li className="nav-item">
            <button className="btn btn-outline-secondary">
              <FaBell/>
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-danger">
              <FaSignOutAlt className="me-1"/>Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminHeader;
