import React from "react";

function Navbar() {
  return (
    <nav className="main_nav">
      <ul>
        <li>
          <a href="/">All Matches</a>
        </li>
        <li>
          <a href="#">Saved Matches</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
