import React from "react";
import PublicLayout from "../components/PublicLayout";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "../styles/Home.css";

const SearchPage = () => {
  return (
    <PublicLayout>
      <div className="container py-4">
        <h3 className="text-primary text-center">Results for:</h3>SearchPage
      </div>
      <div className="row mx-2 mt-4">
        <div className="col-md-4">
          <div
            className="hover-effect rounded-3 overflow-hidden border-1"
            style={{
              backgroundColor: "rgba(175, 155, 155, 0.15)",
            }}
          >
            <img
              src="/images/Homebg.jpeg"
              className="card-img-top"
              style={{ height: "180px" }}
            />
            <div className="card-body p-2">
              <h5 className="card-title">
                <Link to="#">Chaumin</Link>
              </h5>
              <p className="card-text text-muted">This is Description</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">रु: 150</span>
                <Link to="" className="btn btn-outline-primary btn-sm">
                  <FaShoppingBasket className="me-1" />
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SearchPage;
