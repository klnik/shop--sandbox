import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo-container">
      <Link className="option">LOGO</Link>
    </div>
    <div className="options">
      <Link className="option option--menu">SHOP</Link>
      <Link className="option option--menu">CONTACTS</Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option option--menu" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
