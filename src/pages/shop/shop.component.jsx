import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import { render } from "react-dom";
import CollectionPreview from "./../../components/collection-preview/collection-preview.component";
import './shop.component.scss';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <div className="header">
          <h1 className="title">Collections</h1>
        </div>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
