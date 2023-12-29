import { takeLatest } from "@redux-saga/core/effects";

import { get_user_controller } from "../user/manageuser";
import { GET_USER_PROCESS } from "../../user/action/useraction";



// GET - product saga
export function* get_user_saga() {
  yield takeLatest(GET_USER_PROCESS, get_user_controller);
}