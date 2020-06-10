import { shopActionTypes } from "./shop-action-type";

export const shopItemDetail = (item) => ({
  type: shopActionTypes.SHOP_ITEM_DETAIL,
  payload: item,
});

export const shopFetchStart = (urlParams) => ({
  type: shopActionTypes.SHOP_FETCH_START,
  payload: urlParams,
});

export const shopFetchSuccess = (collectionItems) => ({
  type: shopActionTypes.SHOP_FETCH_SUCCESS,
  payload: collectionItems,
});

export const shopFetchFailure = (err) => ({
  type: shopActionTypes.SHOP_FETCH_FAILURE,
  payload: err,
});

export const shopItemStart = (itemId) => ({
  type: shopActionTypes.SHOP_ITEM_START,
  payload: itemId,
});

export const shopItemSuccess = (shopItem) => ({
  type: shopActionTypes.SHOP_ITEM_SUCCESS,
  payload: shopItem,
});
