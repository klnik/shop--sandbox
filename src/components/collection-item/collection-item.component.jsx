import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-buttom.component";

const CollectionItem = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="collection-item--img img"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-item--footer">
        <span className="collection-item--name">{name}</span>
        <span className="collection-item--price">{price}$</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CARD
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
