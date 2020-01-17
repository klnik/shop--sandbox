import React from "react";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./../../components/collection-preview/collection-preview.component";
import "./shop.component.scss";

const ShopPage = props => {
  const { collections } = props;
  return (
    <div className="shop-page">
      <div className="header">
        <h1 className="title">Collections</h1>
      </div>
      {collections
        ? collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
