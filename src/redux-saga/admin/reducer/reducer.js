import { GET_USER_PROCESS, GET_USER_SUCCESS } from "../../user/action/useraction";
import { GET_PRODUCT_ERROR,GET_PRODUCT_SUCCESS,GET_PRODUCT_PROCESS } from "../action/action";


const initialState = {
    product: [],
    isLoading: false,
    isError: null,
  };


  const product_reducer = (state = initialState, action) => {
    //   console.log(action, "Data from reducer");
    switch (action.type) {
        case GET_PRODUCT_PROCESS:{
            const data = action.data
            return{
                mydata:[0,1,2,12,1,2,5,4,12,5,20,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5,0,1,2,12,1,2,5,4,12,5]
            }
        }
        case GET_PRODUCT_SUCCESS:{
            const data = action.data
            return{
                data,
            }
        }
        case GET_USER_PROCESS:{
            return{
                ...state,
                isLoading: true,
                isError: null,
                mydata:[0,1,2,12,1,2,5,4,12,5,20]
            }
        }
        case GET_USER_SUCCESS:{
            const data = action.data
            return{
                data,
            }
        }
        default:
            return({
                name:"Hello"
            })
            break;
    }
}

export default product_reducer