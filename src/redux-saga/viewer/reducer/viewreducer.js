import { GET_VIEWER_ERROR, GET_VIEWER_PROCESS, GET_VIEWER_SUCCESS, POST_VIEWER_ERROR, POST_VIEWER_PROCESS, POST_VIEWER_SUCCESS, DELETE_VIEWER_PROCESS ,DELETE_VIEWER_SUCCESS, DELETE_VIEWER_ERROR } from "../action/viewaction";


const initialState = {
    viewer_data: [],
    isLoading: false,
    isError: null,
  };


  const viewer_reducer = (state = initialState, action) => {
      console.log(action, "Data from reducer");
    switch (action.type) {
        case GET_VIEWER_PROCESS:{
            return{
                ...state,
                isLoading:true,
            }
        }
        case GET_VIEWER_SUCCESS:{
            const data = action.data
            return{
                viewer_data: data
            }
        }
        case GET_VIEWER_ERROR:{
            const data = action.data
            return{
                ...state,
                isError:true,
                isLoading:false,
                data
            }
        }
        case POST_VIEWER_PROCESS:{
            return{
                ...state
            }
        }
        case POST_VIEWER_SUCCESS:{
            return{
                viewer_data: state.viewer_data.concat(action.data)
            }
        }
        case POST_VIEWER_ERROR:{
            const data = action.data
            return{
                ...state,
                isError:true,
                isLoading:false,
                data
            }
        }
        case DELETE_VIEWER_PROCESS:{
            return{
                ...state
            }
        }
        case DELETE_VIEWER_SUCCESS:{
            return{
                viewer_data: state.viewer_data.filter((one)=>one.id !== action.id)
            }
        }
        case DELETE_VIEWER_ERROR:{
            const data = action.data
            return{
                ...state,
                isError:true,
                isLoading:false,
                data
            }
        }
        default:
            return({
                name:"Hello"
            })
            break;
    }
}

export default viewer_reducer