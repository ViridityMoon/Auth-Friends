import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

const Login = (props) => {
 const [creds, setCreds] = useState({
     username: '',
     password: ''
 });
 
const login = e => {
    e.preventDefault();
    axiosWithAuth()
        .post('/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected');
        })
        .catch(err => console.log('Error: ', err));
    }

const handleChange = e => {
    setCreds({
    ...creds,
    [e.target.name]: e.target.value,
    })
  }

    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={creds.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;