import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import AddFriend from './AddFriend';

function Friends(){
    const [ friendsArr, setFriendsArr ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                return setFriendsArr(res.data);
            })
            .catch(err => console.log('Error: ', err));
    }, [] );

    return (
        <div>
            <h1>Friends List</h1>
            <div className="friend-container">
                {friendsArr.map((friend) => {
                    return (
                        <div className="card">
                            <Card
                                header={friend.name}
                                meta={friend.age}
                                description={friend.email}
                                extra={Date.now()}
                            />
                        </div>
                    );
                })}
            </div>
            <AddFriend />
        </div>
    );
};
export default Friends;