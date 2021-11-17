import React from 'react';
import {useSelector} from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import UsersWithPosts from "./UsersWithPosts";
import PostsFull from "./PostsFull";

export default function Posts(){
    return(
        <Switch>
            <Route exact path={'/posts'} component={UsersWithPosts}></Route>
            <Route exact path={'/posts/:id'} component={PostsFull}></Route>
        </Switch>
    )
}