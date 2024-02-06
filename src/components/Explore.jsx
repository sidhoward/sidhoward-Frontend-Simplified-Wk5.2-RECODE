import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            <Link to="/books">
              <buttun className="btn">Explore Books</buttun>
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Explore;
