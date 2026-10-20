import React, { useEffect, useState } from "react";
import {
  FaCogs,
  FaHeart,
  FaHome,
  FaOpencart,
  FaShoppingCart,
  FaSignInAlt,
  FaTruck,
  FaUser,
  FaUserCircle,
  FaUserPlus,
  FaUserShield,
  FaUtensils,
  FaUtensilSpoon,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Layout.css";

const PublicLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const name = localStorage.getItem("userName");

  useEffect(() => {
    if (userId) {
      console.log(userId, name);
      setIsLoggedIn(true);
      setUserName(name);
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    navigate("/login");
  };
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
                <Link to="/" className="nav-link active">
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
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      <FaUserPlus className="me-1" /> Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <FaSignInAlt className="me-1" /> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin-login" className="nav-link">
                      <FaUserShield className="me-1" /> Admin
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/admin-login" className="nav-link">
                      <FaOpencart className="me-1" /> My Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin-login" className="nav-link">
                      <FaShoppingCart className="me-1" /> Cart Items
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin-login" className="nav-link">
                      <FaHeart className="me-1" /> Wishlist
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle text-capitalize"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <FaUserCircle className="me-1" />
                      {userName}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link class="dropdown-item" href="#">
                          <FaUser className="me-1" /> Profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          <FaCogs className="me-1" />
                          Settings
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          class="dropdown-item logout-btn"
                          href="#"
                          onClick={handleLogout}
                        >
                          <FaSignInAlt className="me-1" /> Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div>{children}</div>

      <footer className="text-center py-1 mt-3">
        <div className="container">
          <p className="mb-0">
            &copy;{new Date().getFullYear()} Prakash Chaudhary.All rights
            reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
