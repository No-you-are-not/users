import React from 'react';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import User from "./User";
export default function UsersShort(){
    const users = useSelector(state => state.users)
    return(
        <div className={'users'}>  {users.map((user) =>(
            <Link to={`/users/${user.id}`}>
                <User user={user}/>
            </Link>
            ))}
        </div>
    )
}