import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButon from "../custom-button/custom-buttom.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButon type="submit"> CHECKOUT </CustomButon>
    </div>
  );
};

export default CartDropdown;
