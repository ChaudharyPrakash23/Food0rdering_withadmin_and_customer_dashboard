import React, { useState, useEffect } from "react";
import PublicLayout from "../components/PublicLayout";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "../styles/Home.css";

const SearchPage = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (!query) {
      setFoods([]);
      return;
    }

    fetch(`${BASEURL}/api/food_search/?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(Array.isArray(data) ? data : []);
      })
      .catch(() => setFoods([]));
  }, [BASEURL, query]);

  return (
    <PublicLayout>
      <div className="container py-4">
        <h3 className="text-primary text-center">Results for: {query}</h3>
      </div>
      <div className="row mx-2 mt-4">
        {foods.length === 0 ? (
          <p className="text-center">No Foods found</p>
        ) : (
          foods.map((food, index) => {
            return (
              <div key={food.id} className="col-md-4 mb-4">
                <div
                  className="hover-effect rounded-3 overflow-hidden border-1"
                  style={{
                    backgroundColor: "rgba(175, 155, 155, 0.15)",
                  }}
                >
                  <img
                    src={`${BASEURL}${food.image}`}
                    alt={food.item_name || "Food item"}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body p-2">
                    <h5 className="card-title">
                      <Link to="#">{food.item_name || "Food Item"}</Link>
                    </h5>
                    <p className="card-text text-muted">
                      {food.item_description || "This is Description"}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">
                        रु: {Number(food.item_price || 0).toFixed(2)}
                      </span>
                      <Link to="#" className="btn btn-outline-primary btn-sm">
                        <FaShoppingBasket className="me-1" />
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </PublicLayout>
  );
};

export default SearchPage;
