import { takeLatest } from "@redux-saga/core/effects";

import { get_product_controller } from "../admin/manageproduct";
import { GET_PRODUCT_PROCESS } from "../../admin/action/action";



// GET - product saga
export function* get_product_saga() {
  yield takeLatest(GET_PRODUCT_PROCESS, get_product_controller);
}