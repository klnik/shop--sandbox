import React from "react";
import { connect } from "react-redux";

import { ToggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="option" onClick={toggleCartHidden}>
      <span className="shopping-text">MY CART</span>
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(ToggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
