import React, { useState, useEffect } from "react";
import PublicLayout from "../components/PublicLayout";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaCartPlus, FaTimes, FaTruck } from "react-icons/fa";
const FoodDetail = () => {
  const userId = localStorage.getItem("userId");
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const [food, setFood] = useState([""]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${BASEURL}/api/foods/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, []);
  if (!food) return <div>Food item donot matach...</div>;

  return (
    <PublicLayout>
      <div className="container py-5">
        <div
          className="row align-items-center g-4 p-3 p-md-4 rounded-4 shadow-sm"
          style={{ backgroundColor: "#fffaf3" }}
        >
          {/* Food Image */}
          <div className="col-md-5">
            <div className="position-relative">
              <img
                src={`${BASEURL}${food.image}`}
                alt={food.item_name || "Food item"}
                className="img-fluid rounded-4 w-100 shadow-sm"
                style={{
                  height: "360px",
                  objectFit: "cover",
                }}
              />

              {food.is_available && (
                <span className="badge rounded-pill bg-success position-absolute top-0 start-0 m-3 px-3 py-2">
                  Fresh & Available
                </span>
              )}
            </div>
          </div>

          {/* Food Information */}
          <div className="col-md-7">
            <span className="text-uppercase fw-semibold text-warning">
              {food.category_name || "Our Menu"}
            </span>

            <h1 className="fw-bold mt-2 mb-3" style={{ color: "#30251e" }}>
              {food.item_name}
            </h1>

            <p
              className="text-secondary lh-lg mb-4"
              style={{ maxWidth: "520px" }}
            >
              {food.item_description || "A delicious dish made just for you."}
            </p>

            <div
              className="d-flex align-items-center gap-2 mb-4 p-3 rounded-3"
              style={{ backgroundColor: "#ffffff" }}
            >
              <span className="text-secondary">Price</span>
              <span className="fs-3 fw-bold text-dark">
                रु. {Number(food.item_price || 0).toFixed(2)}
              </span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-4 text-secondary">
              <FaTruck className="text-success" />
              <span>Free delivery on your order</span>
            </div>

            {food.is_available ? (
              <button
                type="button"
                className="btn btn-warning btn-lg rounded-3 fw-semibold px-4 py-3 w-100"
              >
                <FaCartPlus className="me-2" />
                Add to Cart
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg w-100 rounded-3"
                disabled
              >
                <FaTimes className="me-2" />
                Currently Unavailable
              </button>
            )}

            <p className="small text-muted mt-3 mb-0 text-center">
              Good food, great mood!
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
export default FoodDetail;
