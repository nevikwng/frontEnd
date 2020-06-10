import { createSelector } from "reselect";

const shopSelect = (state) => state.shop;

export const shopIsFetchingSelect = createSelector(
  [shopSelect],
  (shop) => shop.isFetching
);

export const shopCollectionsSelect = createSelector(
  [shopSelect],
  (shop) => shop.collections
);

export const shopItemDetailSelect = createSelector(
  [shopSelect],
  (shop) => shop.shopItemDetail
);
