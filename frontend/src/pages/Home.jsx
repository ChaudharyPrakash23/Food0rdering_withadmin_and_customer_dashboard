import React, { useState, useEffect } from "react";
import PublicLayout from "../components/PublicLayout";
import "../styles/Home.css";
import { Link} from "react-router-dom";
import { FaShoppingBasket, FaTimes } from "react-icons/fa";

const Home = () => {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(`${BASEURL}/api/random_foods/`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  return (
    <PublicLayout>
      <section
        className="hero"
        style={{ backgroundImage: `url(/images/Homebg.jpeg)` }}
      >
        <div className="hero-content text-center">
          <span className="badge bg-warning text-dark mb-3">
            Fresh & Delicious
          </span>

          <h1>Good Food, Great Mood!</h1>

          <p>
            Discover delicious meals from your favorite restaurants, delivered
            fresh and fast to your doorstep.
          </p>

          <form method="GET" action="/search-food" className="hero-search">
            <input
              type="text"
              name="q"
              placeholder="Search food..."
              className="hero-search-input"
              style={{ fontStyle: "italic" }}
            />

            <button type="submit" className="hero-search-btn">
              Search
            </button>
          </form>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">
            Most Trending Dishes of this week:
            <span className="badge bg-danger ms-2">Top Picks</span>
          </h2>
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
                        <Link to={`/food/${food.id}/`}>{food.item_name || "Food Item"}</Link>
                      </h5>
                      <p className="card-text text-muted">
                        {food.item_description || "This is Description"}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">
                          रु: {Number(food.item_price || 0).toFixed(2)}
                        </span>
                        {food.is_available ? (
                          <Link
                            to={`/food/${food.id}/`}
                            className="btn btn-outline-primary btn-sm"
                          >
                            <FaShoppingBasket className="me-1" />
                            Order Now
                          </Link>
                        ) : (
                          <div title="This food item is not availale right now.Please check later">
                            <button className="btn btn-outline-secondary btn-sm">
                              <FaTimes className="me-1" />
                              Currently unavailable
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
      <section className="p-5 bg-dark text-white">
        <div className="container text-center">
          <h2>Ordering in 3 simple steps</h2>
          <div className="mt-4 row">
            <div className="col-md-4">
              <h4>1.Pick the dish you love</h4>
              <p>
                Explore 100s of mouth watering dishes and choose what crave you
                most!
              </p>
            </div>
            <div className="col-md-4">
              <h4>2.Share your location</h4>
              <p>Tell us where you are, and we will handle the rest</p>
            </div>
            <div className="col-md-4">
              <h4>3.Enjoy doorstep delivery</h4>
              <p>
                Relax while your meal arrives fast and fresh -pay when it's
                delivered!
              </p>
            </div>
          </div>
          <p>Pay easily with Cash on Delivery-Hassle free!</p>
        </div>
      </section>
      <section className="p-5 bg-warning text-center text-dark">
          <h4>Give us chance to serve you!</h4>
          <Link to="" className="btn btn-dark btn-lg">
            Browse full menu
          </Link>
      </section>
    </PublicLayout>
  );
};
export default Home;