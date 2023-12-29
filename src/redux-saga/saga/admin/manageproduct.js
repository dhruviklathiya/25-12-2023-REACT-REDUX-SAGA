import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../admin/action/action";
import { get_product } from "../../admin/api/api";
import { call, put } from "redux-saga/effects";

export function* get_product_controller (action) {
    try {
        const res = yield call(get_product,action)
        const status = res.status
        const data = res.data
        if ( status === 200 || status === 201){
            yield put({type:GET_PRODUCT_SUCCESS, data})
        }
        else{
            yield put({type:GET_PRODUCT_ERROR, data})
        }
    } catch (error) {
        console.log("Error in controller")
    }
}