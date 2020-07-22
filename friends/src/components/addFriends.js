import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

function AddFriend() {

    const [ newFriend, setNewFriend ] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now(),
    });

    const addFriend = () => {
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => console.log(res))
            .catch(err => console.log('Error: ', err));
    };

    const handleChange = e => {
        e.preventDefault();
        setNewFriend({
            ...newFriend,
            [e.target.name]: [e.target.value]
        });
    };

    return (
        <div className="add-friend">
            <form onSubmit={addFriend}>
                Name <br/>
                <input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                /><br/>
                Age <br/>
                <input
                    type="number"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                /><br/>
                Email <br/>
                <input
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                /><br/>
                <button>Add Friend</button>
            </form>
        </div>
    )
};
export default AddFriend;