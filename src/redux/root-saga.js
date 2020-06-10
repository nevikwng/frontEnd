import { call, all } from "redux-saga/effects";

import { shopSagas } from "./shop/shop-saga";

export default function* rootSaga() {
  yield all([call(shopSagas)]);
}
