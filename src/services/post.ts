//import axios from 'axios'

const ApiDomain = "https://jsonplaceholder.typicode.com/"
const post = "posts/"

export const getPost = (postId:string, arg:any) => {
    return fetch(ApiDomain+post+postId,arg)
}

export const getComment = (postId:string, arg:any) =>{
    return fetch(ApiDomain+post+postId+"/comments",arg)
}

export const clog = (description:string) =>{
    return console.log(description);
}