import React from 'react';

export default function Main(){
    return(
        <div className={'main'}>
            <h1>Welcome!</h1>
            <div>On this webpage you can find storage of users and their posts. To see them simply use navigation at the top of this page</div>
            <div>If you need to find:</div>
            <ul>
                <li>• Users:</li>
                <li>Just go to the "Users" section and select the user that you want to see</li>
                <li>• Posts:</li>
                <li>Just go to the "Posts" section and select the user whose posts you want to see</li>
            </ul>
        </div>
    )
}