import { takeLatest } from "@redux-saga/core/effects";

import { GET_USER_PROCESS } from "../../user/action/useraction";
import { delete_viewer_handler, get_viewer_handler, post_viewer_handler } from "../viewer/viewersaga";
import { DELETE_VIEWER_PROCESS, GET_VIEWER_PROCESS, POST_VIEWER_PROCESS } from "../../viewer/action/viewaction";



// GET - product saga
export function* get_viewer_saga() {
  yield takeLatest(GET_VIEWER_PROCESS, get_viewer_handler);
}

export function* post_viewer_saga() {
  yield takeLatest(POST_VIEWER_PROCESS, post_viewer_handler);
}

export function* delete_viewer_saga() {
  yield takeLatest(DELETE_VIEWER_PROCESS, delete_viewer_handler);
}