import axios from 'axios'

const ApiDomain = "https://jsonplaceholder.typicode.com/"
const post = "posts/"

export const getPost = (postId:string) => {
    return axios(ApiDomain+post+postId)
}

export const getComment = (postId:string) =>{
    return axios(ApiDomain+post+postId+"/comments")
}

export const clog = (description:string) =>{
    return console.log(description);
}