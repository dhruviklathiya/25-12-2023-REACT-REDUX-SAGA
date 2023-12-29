import { takeLatest } from "@redux-saga/core/effects";

import { GET_USER_PROCESS } from "../../user/action/useraction";
import { get_viewer_handler, post_viewer_handler } from "../viewer/viewersaga";
import { GET_VIEWER_PROCESS, POST_VIEWER_PROCESS } from "../../viewer/action/viewaction";



// GET - product saga
export function* get_viewer_saga() {
  yield takeLatest(GET_VIEWER_PROCESS, get_viewer_handler);
}

export function* post_viewer_saga() {
  yield takeLatest(POST_VIEWER_PROCESS, post_viewer_handler);
}