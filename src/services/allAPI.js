import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


// uploading video
export const uploadVideo = async (body)=>{
    // call post http request to http://localhost:4000/videos  to add video in json server return response to add Component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}

// get all videos
export const getAllVideos = async ()=>{
    // call get http request to http://localhost:4000/videos to get videos from json server return response to View Component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a single video
export const getAVideos = async (id)=>{
    // call get http request to http://localhost:4000/videos to get video from json server return response to VideoCard Component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}


// delete a single video
export const deleteAVideos = async (id)=>{
    // call delete http request to http://localhost:4000/videos to remove video from json server return response to VideoCard Component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store video watching history to json server
export const addHistory = async (videoHistory)=>{
    // call post http request to http://localhost:4000/history  to add video history in json server return response to videocard Component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}

// store video watching history to json server
export const getHistory = async ()=>{
    // call get http request to http://localhost:4000/history to get all video history from json server return response to watch history Component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// add catogery to json server
export const saveCategory = async (body)=>{
    // call post http request to http://localhost:4000/categories to add catogery in json server return response to Catogery Component
    return await commonAPI("POST",`${serverURL}/categories`,body)
}

// get cayegory from json server
export const getAllCategory = async ()=>{
    // call get http request to  http://localhost:4000/categories to get all category from json server return response to category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

// delete category from json server
export const deleteCategory = async (id)=>{
    // call delete http request to  http://localhost:4000/categories/id to delete category from json server return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}


// update category from json server
export const updateCategory = async (id,body)=>{
    // call put http request to http://localhost:4000/categories/id to update category from json server return response to Category Component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}


// delete video watching history to json server
export const deleteAHistory = async (id)=>{
    // call delete http request to http://localhost:4000/history to remove history from json server return response to watchhistory Component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}