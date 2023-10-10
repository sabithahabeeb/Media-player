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