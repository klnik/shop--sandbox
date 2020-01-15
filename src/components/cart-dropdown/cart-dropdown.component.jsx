import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButon from "../custom-button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">No items in your cart</span>
        )}
      </div>
      <CustomButon
        onClick={() => {
          history.push("/checkout");
          dispatch(ToggleCartHidden());
        }}
        type="submit"
      >
        {" "}
        CHECKOUT{" "}
      </CustomButon>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
