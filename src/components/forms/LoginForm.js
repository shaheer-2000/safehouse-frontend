import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

let instance = axios.create({
    baseURL: 'http://safehouse-weavy.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [userid, setuserid] = useState('');
    const [loggedIn, setloggedIn] = useState(false);
    const [token, settoken] = useState('');
    const [type, settype] = useState('');

    const history = useHistory();

    const submitForm = async (e) => {
        e.preventDefault();

        var elementButton = document.getElementById('loginButton');
        elementButton.classList.remove('bg-purple-800', 'hover:bg-purple-600', 'hover:shadow-md');
        elementButton.classList.add('bg-gray-400', 'pointer-events-none');

        try {
            let res = await instance.post('/v1/login/', {
                username,
                password
            })
            console.log(res);
            setloggedIn(true);
            settoken(res.data.token);
            settype(res.data.role);
            setusername(res.data.username);
            setuserid(res.data.id);

            history.push('/dashboard');
        }
        catch (e) {
            alert("Invalid username or password!");
            elementButton.classList.add('bg-purple-800', 'hover:bg-purple-600', 'hover:shadow-md');
            elementButton.classList.remove('bg-gray-400', 'pointer-events-none');
        }
    }

    useEffect(()  => {
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
        localStorage.setItem('token', token);
        localStorage.setItem('type', type);
        localStorage.setItem('username', username);
        localStorage.setItem('id', userid);
    }, [loggedIn, token, type, username, userid])

    return (
        <>
        <form onSubmit={submitForm}>
            <div className="w-80 h-60 ml-12 p-3 shadow-xl border-2 flex flex-col justify-evenly bg-secondary text-primary rounded-xl relative z-20">
                <div>
                    <label htmlFor="username">Username</label><br></br>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setusername(e.target.value)} required autoComplete="off" title="Enter your username" className="inputField"></input>
                </div>
                <div>
                    <label htmlFor="userpassword">Password</label><br></br>
                    <input type="password" id="userpassword" name="password" value={password} onChange={(e) => setpassword(e.target.value)} required title="Enter your password" className="inputField"></input>
                </div>
                <div className="w-full flex flex-row">
                    <button type="submit" id="loginButton" className=" w-full rounded-lg bg-purple-800 text-secondary p-1 hover:bg-purple-600 hover:shadow-md transition-all">Login</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default LoginForm;