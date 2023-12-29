import { all } from "@redux-saga/core/effects";
import { get_product_saga } from "./rootsaga/rootproductsaga";
import { get_user_saga } from "./rootsaga/rootusersaga";
export function* rootSaga() {
  yield all([get_product_saga(),get_user_saga()]);
}
