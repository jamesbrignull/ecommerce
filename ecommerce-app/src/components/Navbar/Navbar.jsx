import React from "react";
import * as S from "./Navbar.style";

function Navbar() {
  return (
    <div>
      <div className="logo-container">
        <h1 className="logo">ButcherBox</h1>
      </div>
      <div className="options-container">
        <ul>
          <li>Home</li>
          <li>Boxes</li>
          <li>About</li>
          <li>Sign In</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
