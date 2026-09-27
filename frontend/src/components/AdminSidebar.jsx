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
  FaChevronUp,
  FaChevronDown,
  FaList,
  FaCheckCircle,
  FaShoppingBag,
  FaTruck,
  FaTimesCircle,
  FaFile,
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
        <Link className="list-group-item list-group-item-action bg-dark text-white border-0">
          <FaThLarge className="me-3" /> Dashboard
        </Link>
        <div className="list-group list-group-flush">
          <Link className="list-group-item list-group-item-action bg-dark text-white">
            <FaUsers className="me-3" /> Manage users
          </Link>
        </div>
        <button
          onClick={() => toggleMenu("category")}
          className="list-group-item list-group-item-action bg-dark text-white border-0 d-flex align-items-center gap-3"
        >
          <FaPizzaSlice />
           Food Category{openMenu.category ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openMenu.category && (
          <div className="ps-4 mx-1 py-1">
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaPlus className="me-3" /> Add Category
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaLayerGroup className="me-3" /> Manage Catgory
            </Link>
          </div>
        )}
        <button
          onClick={() => toggleMenu("food")}
          className="list-group-item list-group-item-action bg-dark text-white border-0 d-flex align-items-center gap-3"
        >
          <FaUtensils />
          Food Item
          {openMenu.food ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {openMenu.food && (
          <div className="ps-4 mx-1 py-1">
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaPlus className="me-3" /> Add Food Item
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaLayerGroup className="me-3" /> Manage Food Item
            </Link>
          </div>
        )}
        <button
          onClick={() => toggleMenu("order")}
          className="list-group-item list-group-item-action bg-dark text-white border-0 d-flex align-items-center gap-3"
        >
          <FaList />
          Orders
          {openMenu.order? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {openMenu.order && (
          <div className="ps-4 mx-1 py-1">
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaPlus className="me-3" /> New Orders
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaUtensils className="me-3" /> Being Prepared
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaCheckCircle className="me-3" /> Confirmed
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaShoppingBag className="me-3" /> Pick up
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaTruck className="me-3" /> Delivered
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaTimesCircle className="me-3" /> Cancelled
            </Link>
            <Link className="list-group-item list-group-item-action bg-dark text-white py-1 border-0">
              <FaList className="me-3" /> All Orders
            </Link>
          </div>
        )}
        <div className="list-group list-group-flush">
          <Link className="list-group-item list-group-item-action bg-dark text-white">
            <FaFile className="me-3" /> Between Dates Report
          </Link>
        </div>
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
