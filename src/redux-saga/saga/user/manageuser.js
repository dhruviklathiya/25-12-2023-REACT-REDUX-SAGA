import { call, put } from "redux-saga/effects";
import { get_user } from "../../user/api/userapi";
import { GET_USER_ERROR, GET_USER_SUCCESS } from "../../user/action/useraction";

export function* get_user_controller (action){
    try {
        const res = yield call(get_user,action)
        console.log("conteollwe");
        const data = res.data
        const status = res.status
        if(status === 200 || status === 201){
            yield put({type:GET_USER_SUCCESS,data})
        }
        else{
            yield put({type:GET_USER_ERROR})
        }
    } catch (error) {
        console.log("Error from user controller");
    }
}