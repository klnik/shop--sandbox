import { createSelector } from "reselect";

const selectShop = state => state.collections;

export const selectShopCollections = createSelector(
  [selectShop],
  collections => {
    console.log("collections", collections);
    return collections;
  }
);
