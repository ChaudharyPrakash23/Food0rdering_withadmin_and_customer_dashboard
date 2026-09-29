import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { FaPlus, FaPlusCircle, FaUtensils } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [categoryName, setCategoryName] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASEURL}/api/add-category/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category_name: categoryName }),
      });

      const data = await response.json();
      if (response.status === 201) {
        toast.success(data.message);
        setCategoryName("")
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Server not responding");
    }
  };

  return (
    <AdminLayout>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="row">
        <div className="col-md-8">
          <div className="shadow-sm p-4 rounded bg-white">
            {/* Header */}
            <div className="d-flex align-items-center mb-4">
              <FaPlusCircle className="text-primary me-2" size={32} />
              <h4 className="mb-0">Add Category</h4>
            </div>

            <form onSubmit={handlesubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Food Category</label>

                <input
                  value={categoryName}
                  type="text"
                  className="form-control"
                  placeholder="Enter food category"
                  onChange={(e) => setCategoryName(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                <FaPlus className="me-2" />
                Add Category
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <FaUtensils style={{ color: "#e5e5e5" }} size={200} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddCategory;
