import { phonklogo } from "../utils";
import "./navbar.css";

import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navParent">
        <div className="logo">
          <img src={phonklogo} alt="logo" />
          <h1>Phunk</h1>
        </div>
        <div className="bars">
          <h2>Home</h2>
          <h2>About Us</h2>
          <h2>Services</h2>
          <h2>Projects</h2>
          <h2>News</h2>
          <h2>Webflow</h2>
        </div>
        <div className="talk">
          <button>Talk to us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
