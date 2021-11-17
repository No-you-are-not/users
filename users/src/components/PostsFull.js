import React from 'react';
import {useSelector} from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Post from "./Post";

export default function PostsFull(){
    let {id} = useParams();
    const posts = useSelector(state => state.posts)
    let postsFinal = [];
    for (let item of posts){
        if (item.userId === +id){
            postsFinal.push(item)
        }
    }
    return(
        <>
            <Link to={'/posts'}><button className={'back-btn'}>Back</button></Link>
            {postsFinal.map((post) => <Post post={post}/>)}
        </>
    )
}