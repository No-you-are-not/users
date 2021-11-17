import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {getPosts, getUsers} from "../redux/actions";

export default function Header(){
    const [check, setCheck] = useState('one')
    const dispatch = useDispatch();
    function showUsers(){
        dispatch(getUsers());
        setCheck('two');
    }
    function showPosts(){
        dispatch(getUsers());
        dispatch(getPosts());
        setCheck('three');
    }
    return(
        <nav className={'header'}>
            <div onClick={() => setCheck('one')} className={check === "one" ? "selected" : ""}><Link to='/'>Main</Link></div>
            <div onClick={showUsers} className={check === "two" ? "selected" : ""}><Link to='/users'>Users</Link></div>
            <div onClick={showPosts} className={check === "three" ? "selected" : ""}> <Link to='/posts'>Posts</Link></div>
        </nav>
    )
}