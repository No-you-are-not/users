import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from "./Main";
import Users from "./Users";
import Posts from "./Posts";
import UserFull from "./UserFull";
export default function Content(){
    return(
        <div className={'content'}>
        <Switch>
            <Route exact path='/' component={Main}></Route>
            <Route path='/users' component={Users}></Route>
            <Route path='/posts' component={Posts}></Route>
        </Switch>
        </div>
    )
}