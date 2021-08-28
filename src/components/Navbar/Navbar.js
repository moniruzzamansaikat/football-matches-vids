import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main_nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/matches">All Matches</Link>
        </li>
        <li>
          <Link to="/saved">Saved Matches</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
