import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_USER_PROCESS } from '../redux-saga/user/action/useraction'

const User = () => {
    const abc = useSelector((state)=>state.product_reducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:GET_USER_PROCESS})
    },[])
  return (
    <>
    {
        abc.data?.map((val)=>{
            return(
                <>
                <h1>{val.username}</h1>
                <h1>{val.password}</h1>
                </>
            )
        })
    }
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

export default User