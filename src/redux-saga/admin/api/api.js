// GET PRODUCT API

import axios from "axios"

export const get_product = async(action) => {
    return axios.get("http://localhost:3001/posts").then((res)=>{
        const data = res.data
        const status = res.status
        return {
            data,
            status
        }
    }).catch((err)=>{
        console.log(err);
    })
}