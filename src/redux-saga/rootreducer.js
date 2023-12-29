import { combineReducers } from "redux";
import product_reducer from "./admin/reducer/reducer"
import viewer_reducer from "./viewer/reducer/viewreducer"

const rootReducer = combineReducers({
    viewer_reducer,
    product_reducer,
})

export default rootReducer;