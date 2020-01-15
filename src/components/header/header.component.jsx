import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import "./header.styles.scss";

const Header = ({ currentUser, cartHidden }) => (
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
      <CartIcon className="option option--menu" />
    </div>
    {cartHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
