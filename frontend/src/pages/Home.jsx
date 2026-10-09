import React from "react";
import PublicLayout from "../components/PublicLayout";
import "../styles/Home.css";
const Home = () => {
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
          <form method="GET" action="/search" className="hero-search">
            <input
              type="text"
              name="q"
              placeholder="Search food..."
              className="hero-search-input"
            />
            <button type="submit" className="hero-search-btn">
              Search
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
};
export default Home;
