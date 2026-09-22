import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/admin.css";

const AdminLogin = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`${BASEURL}/api/admin-login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.status === 200) {
      toast.success(data.message);
      setTimeout(() => {
        window.location.href = "/admin-dashboard";
      }, 1000);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/images/adminlogin.jpeg')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h4 className="text-center">
          {" "}
          <FaUser className="me-2 icon-fix" />
          AdminLogin
        </h4>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">
              <FaUser className="me-1 icon-fix" />
              UserName
            </label>
            <input
              value={username}
              type="text"
              className="form-control"
              placeholder="Enter admin Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <FaLock className="me-1" />
              Password
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              placeholder="Enter admin password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            <FaSignInAlt className="me-1" />
            Login
          </button>
        </form>
      </div>
      <ToastContainer autoClose={2000} position="top-right" />
    </div>
  );
};

export default AdminLogin;
