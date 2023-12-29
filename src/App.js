import { Provider, useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_PROCESS } from "./redux-saga/admin/action/action";
import { useEffect } from "react";

function App() {
  const abc = useSelector((state) => state.product_reducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:GET_PRODUCT_PROCESS})
  },[])
  console.log(abc);
  return (
    <>
    {
      abc.data?.map((val)=>{
        return(
          <>
          <h1>Usernamee:{val.username}</h1>
          <h1>password:{val.password}</h1>
          </>
        )
      })
    }
    {/* data to be when action is GET_PRODUCT_PROCESS */}
    {
      abc.mydata?.map((val)=>{
        return(
          <>
          <h1>{val}</h1>
          </>
        )
      })
    }
    </>
  )

}

export default App;
