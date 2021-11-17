import {GET_POSTS, GET_USERS} from "./constants";

export function getUsers(){
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json()
        dispatch({type: GET_USERS, item: json})
    }
}

export function getPosts(){
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json()
        dispatch({type: GET_POSTS, item: json})
    }
}
