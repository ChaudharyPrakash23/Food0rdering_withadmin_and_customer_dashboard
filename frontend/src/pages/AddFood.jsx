import React, { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus, FaPlusCircle, FaUtensils } from "react-icons/fa";
const AddFood = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  return (
    <AdminLayout>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="row">
        <div className="col-md-8">
          <div className="shadow-sm p-4 rounded bg-white">
            <div className="d-flex align-items-center mb-4">
              <FaPlusCircle className="text-primary me-2" size={32} />
              <h4 className="mb-0">Add Food Item</h4>
            </div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label fw-semibold">Food Category</label>

                <input
                  value=""
                  type="text"
                  className="form-control"
                  placeholder="Enter food category"
                  onChange=""
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {/* <FaPlus className="me-2" /> */}
                Add Category
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center align-items-center">
          {/* <FaUtensils style={{ color: "#e5e5e5" }} size={200} /> */}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddFood;
