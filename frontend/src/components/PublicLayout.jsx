import React from "react";
import {
  FaHome,
  FaSignInAlt,
  FaTruck,
  FaUserPlus,
  FaUserShield,
  FaUtensils,
  FaUtensilSpoon,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/Layout.css'

const PublicLayout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container d-flex">
          <Link className="navbar-brand">
            <FaUtensils className="me-1" /> Food Ordering System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <Link to="#" className="nav-link active">
                  <FaHome className="me-1" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <FaUtensilSpoon className="me-1" /> Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <FaTruck className="me-1" /> Track Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <FaUserPlus className="me-1" /> Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <FaSignInAlt className="me-1" /> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <FaUserShield className="me-1" /> Admin-Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>{children}</div>

      <footer className="text-center py-3 mt-5">
        <div className="container">
          <p className="">
            &copy;{new Date().getFullYear()} Prakash Chaudhary.All rights
            reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
