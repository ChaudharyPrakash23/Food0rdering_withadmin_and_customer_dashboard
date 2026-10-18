import React, { useState } from "react";
import PublicLayout from "./PublicLayout";
import { FaPizzaSlice, FaUser, FaUserCheck } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate,Link } from "react-router-dom";

const Register = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    contactno: "",
    email: "",
    password: "",
    confirmpassword: "",
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

    const { firstname, lastname, contactno, email, password, confirmpassword } =
      formData;
    if (password !== confirmpassword) {
      toast.error("password & confirmpassword donot match");
      return;
    }
    try {
      const response = await fetch(`${BASEURL}/api/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          contactno,
          email,
          password,
        }),
      });
      const result = await response.json();
      if (response.status == 201) {
        toast.success(result.message || "You have successfully registered");
        setFormData({
          firstname: "",
          lastname: "",
          contactno: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        setTimeout(()=>{
          navigate('/login')
        },1000)
      } else {
        toast.error(result.message || "Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error connecting to server");
    }
  };
  return (
    <PublicLayout>
      <ToastContainer position="top-right" autoClose="3000"/>
      <div className="container py-4 py-md-5 px-3 px-md-4">
        <div className="row shadow-lg rounded-4 overflow-hidden mx-auto">
          {/* Registration Form */}
          <div className="col-12 col-md-6 p-3 p-sm-4 p-lg-5">
            <h3 className="text-center mb-4 text-primary">
              <FaUser className="me-2" />
              User Registration:
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  name="firstname"
                  type="text"
                  className="form-control"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="lastname"
                  type="text"
                  className="form-control"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email "
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="contactno"
                  type="text"
                  className="form-control"
                  value={formData.contactno}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="confirmpassword"
                  type="password"
                  className="form-control"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                <FaUserCheck className="me-2" />
                Create Account
              </button>
            </form>
             <p className="mt-3 text-muted d-flex justify-content-center">
              Already registered?
              <Link
                to="/login"
                className="ms-1 text-primary text-decoration-none fw-semibold"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Registration Image and Message */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-3 p-sm-4">
            <div className="bg-white rounded-4 shadow-lg p-3 p-sm-4 text-center w-100">
              <div className="overflow-hidden rounded-3 mb-4 shadow-sm bg-light">
                <img
                  src="/images/Registration.jpeg"
                  alt="Food family community"
                  className="img-fluid w-100 object-fit-cover"
                  style={{
                    maxHeight: "320px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <h5 className="fw-bold mb-2 text-primary">
                &ldquo;Creating an account took less than a minute!&rdquo;
              </h5>

              <p className="text-secondary small fw-medium d-flex align-items-center justify-content-center flex-wrap gap-1 mb-0">
                <FaPizzaSlice className="me-2" />
                Join our Food Family to order delicious foods
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Register;