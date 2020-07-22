import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import AddFriends from './addFriends';

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
                                extra={friend.id}
                            />
                        </div>
                    );
                })}
            </div>
            <AddFriends />
        </div>
    );
};
export default Friends;