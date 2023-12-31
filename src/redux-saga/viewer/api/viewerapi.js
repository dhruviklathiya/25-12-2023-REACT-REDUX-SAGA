// Get api for viewer

import axios from "axios"

export const get_viewer_api = async() => {
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

export const post_viewer_api = async(action) => {
    console.log(action);
    return axios.post("http://localhost:3001/posts",action.payload).then((res)=>{
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

export const delete_viewer_api = async(action) => {
    console.log("{}{}{}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{");
    console.log(action);
    return axios.delete(`http://localhost:3001/posts/${action.payload.id}`).then((res)=>{
        const id = action.payload.id
        const status = res.status
        return {
            id,
            status
        }
    }).catch((err)=>{
        console.log(err);
    })
}