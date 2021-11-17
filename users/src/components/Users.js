import React from 'react';
import { Switch, Route } from 'react-router-dom'
import UsersShort from "./UsersShort";
import UserFull from "./UserFull";
export default function Users(){
    return(
       <Switch>
           <Route exact path="/users/:id" component={UserFull}></Route>
           <Route exact path='/users' component={UsersShort}></Route>
       </Switch>
    )
}