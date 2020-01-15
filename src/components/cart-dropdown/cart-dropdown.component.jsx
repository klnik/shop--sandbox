import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButon from "../custom-button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButon type="submit"> CHECKOUT </CustomButon>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(
  mapStateToProps,
  null
)(CartDropdown);
