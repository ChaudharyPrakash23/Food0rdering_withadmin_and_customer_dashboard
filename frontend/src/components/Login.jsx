import React, { useState, useEffect } from "react";
import PublicLayout from "./PublicLayout";
import { FaSignInAlt, FaUserCheck } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [formdata, setFormData] = useState({
    emailcont: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailcont, password } = formdata;

    try {
      const response = await fetch(`${BASEURL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailcont, password }),
      });
      const result = await response.json();
      if (response.status == 200) {
        toast.success(result.message || "Login Successful");
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("userName", result.userName);
        setFormData({
          emailcont: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(result.message || "Invlaid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PublicLayout>
      <ToastContainer position="top-right" autoClose="3000" />
      <div className="container py-4 py-md-5 px-3 px-md-4">
        <div className="row shadow-lg rounded-4 overflow-hidden mx-auto">
          {/* Login Form */}
          <div className="col-12 col-md-6 p-3 p-sm-4 p-lg-5">
            <h3 className="text-center mb-4 text-primary">
              <FaSignInAlt className="me-2" />
              User Login:
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  name="emailcont"
                  type="text"
                  className="form-control"
                  value={formdata.emailcont}
                  onChange={handleChange}
                  placeholder="Enter Email or Contact-no"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  value={formdata.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                <FaUserCheck className="me-2" />
                Login
              </button>
            </form>
            <p className="mt-3 text-muted d-flex justify-content-center">
              Don't have an account?
              <Link
                to="/register"
                className="ms-1 text-primary text-decoration-none fw-semibold"
              >
                Register
              </Link>
            </p>
          </div>

          {/* Registration Image and Message */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-3 p-sm-4">
            <div className="bg-white rounded-4 shadow-lg p-3 p-sm-4 text-center w-100">
              <div className="overflow-hidden rounded-3 mb-4 shadow-sm bg-light">
                <img
                  src="/images/Userlogin.jpeg"
                  alt="Food family community"
                  className="img-fluid w-100 object-fit-cover"
                  style={{
                    maxHeight: "320px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <h5 className="fw-bold mb-2 text-primary">
                &ldquo;Please sign in to continue to your account.&rdquo;
              </h5>

              <p className="text-secondary small fw-medium d-flex align-items-center justify-content-center flex-wrap gap-1 mb-0">
                Protected by industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Login;
