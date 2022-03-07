import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>you've reached a dead end</h2>
      <button>
        <Link to="/">go back home</Link>
      </button>
    </div>
  );
};

export default Error;
