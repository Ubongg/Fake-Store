import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>you've reached a dead end</h2>
      <h3>you need to go back real quick</h3>
      <button>
        <Link to="/">back home</Link>
      </button>
    </div>
  );
};

export default Error;
