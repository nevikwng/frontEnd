import { shopActionTypes } from "./shop-action-type";

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  shopItemDetail: [],
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.SHOP_ITEM_DETAIL:
      return {
        ...state,
        shopItemDetail: action.payload,
      };
    case shopActionTypes.SHOP_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.SHOP_FETCH_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case shopActionTypes.SHOP_FETCH_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    case shopActionTypes.SHOP_ITEM_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.SHOP_ITEM_SUCCESS:
      return {
        ...state,
        shopItemDetail: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
