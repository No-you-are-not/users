import React from 'react';

export default function User({user}){
    return(
        <div key={user.id} className={'user-card'}>
            <h1><b>Name: </b>{user.name}</h1>
            <h2><b>Username: </b>{user.username}</h2>
        </div>
    )
}