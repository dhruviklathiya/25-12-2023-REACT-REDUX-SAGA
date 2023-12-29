import { all } from "@redux-saga/core/effects";
import { get_product_saga } from "./rootsaga/rootproductsaga";
import { get_user_saga } from "./rootsaga/rootusersaga";
import { get_viewer_saga, post_viewer_saga } from "./rootsaga/rootviewersaga";
import { post_viewer_handler } from "./viewer/viewersaga";
export function* rootSaga() {
  yield all([get_product_saga(),get_user_saga(),get_viewer_saga(),post_viewer_saga  ()]);
}
