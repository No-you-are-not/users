import React from 'react';

export default function Post({post}){
    return(
        <div key={post.id} className={'post-card'}>
            <h1>{post.title}</h1>
            <h4>{post.body}</h4>
        </div>
    )
}