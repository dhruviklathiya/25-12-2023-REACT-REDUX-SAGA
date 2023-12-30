import { call, put } from "redux-saga/effects";
import { delete_viewer_api, get_viewer_api, post_viewer_api } from "../../viewer/api/viewerapi";
import { DELETE_VIEWER_ERROR, DELETE_VIEWER_SUCCESS, GET_VIEWER_ERROR, GET_VIEWER_SUCCESS, POST_VIEWER_ERROR, POST_VIEWER_SUCCESS } from "../../viewer/action/viewaction";


export function* get_viewer_handler (){
    try {
        console.log("{========================}");
        const res = yield call(get_viewer_api)
        const status = res.status
        const data = res.data
        if(status === 200 || status === 201){
            yield put({type:GET_VIEWER_SUCCESS,data})
        }
        else{
            yield put({type:GET_VIEWER_ERROR,data})
        }
    } catch (error) {
        console.log(error);
    }
}

export function* post_viewer_handler (action){
    try {
        const res = yield call(post_viewer_api,action)
        const status = res.status
        const data = res.data
        if(status === 200 || status === 201){
            yield put({type:POST_VIEWER_SUCCESS,data})
        }
        else{
            yield put({type:POST_VIEWER_ERROR,data})
        }
    } catch (error) {
        console.log(error);
    }
}

export function* delete_viewer_handler (action){
    try {
        const res = yield call(delete_viewer_api,action)
        console.log("=F=R=O=M=SAGA===========",res);
        const id = res.id
        if(res.status === 200 || res.status === 201){
            yield put({type:DELETE_VIEWER_SUCCESS, id})
        }
        else{
            yield put({type:DELETE_VIEWER_ERROR, id})
        }
    } catch (error) {
        console.log(error);
    }
}