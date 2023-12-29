import { Provider, useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_PROCESS } from "./redux-saga/admin/action/action";
import { useEffect, useRef } from "react";
import { GET_VIEWER_PROCESS, POST_VIEWER_PROCESS } from "./redux-saga/viewer/action/viewaction";

function App() {
  const username = useRef()
  const password = useRef()
  const abc = useSelector((state) => state.viewer_reducer)
  // const abc = useSelector((state) => state.product_reducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:GET_VIEWER_PROCESS})
  },[])

  const submit_handler = () => {
    const input = {
      username: username.current.value,
      password: password.current.value
    }
    dispatch({type:POST_VIEWER_PROCESS, payload:input})
  }
  console.log(abc,"{+++++++++++++++++++}");
  return (
    <>
    <input name="username" ref={username}/>
    <input name="password" ref={password}/>
    <button onClick={submit_handler}>Submit</button>
    {
      abc.viewer_data?.map((val)=>{
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
