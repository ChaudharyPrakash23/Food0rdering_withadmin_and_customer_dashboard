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
          <form method="GET" action={"/search"}>
            <input
              type="text"
              name="q"
              placeholder="Qucik search ..."
              className='from-control'
            ></input>
            <button className="btn btn-warning px-4 py-2 fw-bold">
              Explore Food →
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
};
export default Home;
