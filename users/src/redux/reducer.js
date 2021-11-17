import {GET_POSTS, GET_USERS} from "./constants";


let initialState = {
    users:[],
    posts:[],
};

export const pageReducer = (state = initialState, action) => {
switch (action.type){
    case GET_USERS:
        return { ...state, users: action.item}
    case GET_POSTS:
        return { ...state, posts: action.item}
    default:
        return state
}
}