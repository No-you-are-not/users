import React from 'react';
import {useSelector} from 'react-redux'
import { useParams, Link } from 'react-router-dom'

export default function UserFull(){
    let {id} = useParams();
    const users = useSelector(state => state.users);
    let user;
    for (let item of users){
        if (item.id === +id){
            user = item;
        }
    }
    return(
        <>
        <div key={user.id} className={'user-info'}>
            <h3 className={'name'}>{user.name}</h3>
            <section className={'info-section'}>
                <div className="title">Personal information</div>
                <div><b>username:</b>{user.username}</div>
                <div><b>email:</b> {user.email}</div>
                <div><b>address:</b> {user.address.city} {user.address.street} {user.address.suite}</div>
                <div><b>phone:</b> {user.phone}</div>
                <div><b>website:</b>{user.website}</div>
            </section>
            <section className="info-section">
                <div className="title">Work information</div>
                <div><b>company name:</b>{user.company.name}</div>
                <div><b>catch phrase:</b>{user.company.catchPhrase}</div>
                <div><b>bs:</b> {user.company.bs}</div>
            </section>
        </div>
           <Link to={'/users'}> <button className={'back-btn'}>Back</button> </Link>
        </>
    )
}