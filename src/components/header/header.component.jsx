import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link className="option">LOGO</Link>
    </div>
    <div className="options">
      <Link className="option option--menu">SHOP</Link>
      <Link className="option option--menu">CONTACTS</Link>
    </div>
  </div>
);

export default Header;
