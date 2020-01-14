import React from "react";

import "./collectionpreview.component.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
    <div className="preview">
      {items
        .filter((item, ind) => ind < 4)
        .map(item => (
          <CollectionItem item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
