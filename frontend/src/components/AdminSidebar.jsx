import React, { useState } from "react";
import "../styles/admin.css";
import { Link } from "react-router-dom";
import {
  FaPizzaSlice,
  FaLayerGroup,
  FaPlus,
  FaSearch,
  FaStar,
  FaThLarge,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
const AdminSidebar = () => {
  const [openMenu, setOpenMenu] = useState({
    category: false,
    food: false,
    order: false,
  });
  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  return (
    <div className="bg-dark text-white sidebar">
      <div className="text-center p-3">
        <img
          src="/images/admin.png"
          width="60"
          height="60"
          className="img-fluid rounded-circle bg-white mb-2"
          alt="adminImage"
        />
        <h6 className="fw-semibold mb-0">Admin</h6>
      </div>
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action bg-dark text-white">
          <FaThLarge className="me-3" /> Dashboard
        </Link>
        <div className="list-group list-group-flush">
          <Link className="list-group-item list-group-item-action bg-dark text-white">
            <FaUsers className="me-3" /> Manage users
          </Link>
        </div>
        <button
          onClick={() => toggleMenu("category")}
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          <FaPizzaSlice/>
          Food Category
        </button>
        {openMenu.category && (
          <div className="ps-4 mx-1 py-1">
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1">
              <FaPlus className="me-3" /> Add Category
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1">
              <FaLayerGroup className="me-3" /> Manage Catgory
            </Link>
          </div>
        )}
        <button
          onClick={() => toggleMenu("food")}
          className="list-group-item list-group-item-action bg-dark text-white"
        >
          <FaUtensils />
          Food Item
        </button>
        {openMenu.food && (
          <div className="ps-4 mx-1 py-1">
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1">
              <FaPlus className="me-3" /> Add Food Item
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1">
              <FaLayerGroup className="me-3" /> Manage Food Item
            </Link>
          </div>
        )}
        <div className="list-group list-group-flush">
          <Link className="list-group-item list-group-item-action bg-dark text-white">
            <FaSearch className="me-3" /> Search
          </Link>
        </div>
        <div className="list-group list-group-flush">
          <Link className="list-group-item list-group-item-action bg-dark text-white">
            <FaStar className="me-3" /> Manage Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
