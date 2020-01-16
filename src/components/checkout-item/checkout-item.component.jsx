import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  decreaseItemCount,
  addItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  item,
  removeItemFromCart,
  addItemToCart,
  decreaseItemCount
}) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemCount(item)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  decreaseItemCount: item => dispatch(decreaseItemCount(item)),
  addItemToCart: item => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
