import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

import { shopActionTypes } from "./shop-action-type";
import {
  shopFetchSuccess,
  shopFetchFailure,
  shopItemSuccess,
} from "./shop-action";

// Shop Fetch-----------------
export function* ShopFetchAsyncSaga({ payload }) {
  try {
    const {
      data: { collection },
    } = yield axios.get(`http://localhost:5000/api/shop/${payload}`);
    yield put(shopFetchSuccess(collection));
  } catch (err) {
    yield put(shopFetchFailure(err));
  }
}

export function* ShopFetchStartSaga() {
  yield takeLatest(shopActionTypes.SHOP_FETCH_START, ShopFetchAsyncSaga);
}
// -------------------

// shop item fetch---------------
export function* ShopItemAsyncSaga({ payload }) {
  try {
    const {
      data: { shopItem },
    } = yield axios.get(`http://localhost:5000/api/shop/detail/${payload}`);
    yield put(shopItemSuccess(shopItem[0]));
  } catch (err) {
    yield put(shopFetchFailure(err));
  }
}

export function* ShopItemFetchStartSaga() {
  yield takeLatest(shopActionTypes.SHOP_ITEM_START, ShopItemAsyncSaga);
}
// -------------------

export function* shopSagas() {
  yield all([call(ShopFetchStartSaga), call(ShopItemFetchStartSaga)]);
}
