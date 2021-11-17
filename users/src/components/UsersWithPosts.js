import React from 'react';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import User from "./User";
export default function UsersWithPosts(){
    const users = useSelector(state => state.users)
    const posts = useSelector(state => state.posts)
    let postsIds = []
    let usersWithPosts = []
    for (let item of posts){
        if (postsIds.includes(item.userId)){
            continue;
        }
        else {
            postsIds.push(item.userId)
        }
    }
    for (let item of users){
        if (postsIds.includes(item.id)){
            usersWithPosts.push(item)
        }
    }
    return(
        <div className={'users'}>  {usersWithPosts.map((user) =>(
            <Link to={`/posts/${user.id}`}>
                <User user={user}/>
            </Link>
        ))}
        </div>
    )
}