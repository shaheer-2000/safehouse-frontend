import React, { useState } from 'react';
import { useHistory } from 'react-router';

const LoginForm = () => {
    const [userID, setuserID] = useState('');
    const [password, setpassword] = useState('');

    const history = useHistory();

    const submitForm = async (e) => {
        e.preventDefault();

        var element = document.getElementById('loginButton');
        element.classList.remove('bg-purple-800', 'hover:bg-purple-600', 'hover:shadow-md');
        element.classList.add('bg-gray-400', 'pointer-events-none');

        const loginData = {userID, password}

        /* authenticate login data */
        await setTimeout(() => {
            console.log(loginData);
            
            history.push(`/dashboard/${loginData.userID}`);
        }, 3000);
    }

    return (
        <>
        <form onSubmit={submitForm}>
            <div className="w-80 h-60 ml-12 p-3 shadow-2xl border-2 flex flex-col justify-evenly bg-secondary text-primary rounded-xl">
                <div>
                    <label htmlFor="userID">Username</label><br></br>
                    <input type="text" id="userID" name="userID" value={userID} onChange={(e) => setuserID(e.target.value)} required autoComplete="off" className="inputField"></input>
                </div>
                <div>
                    <label htmlFor="adminPassword">Password</label><br></br>
                    <input type="password" id="adminPassword" name="password" value={password} onChange={(e) => setpassword(e.target.value)} required  className="inputField"></input>
                </div>
                <div className="w-full flex flex-row justify-between">
                    <button type="submit" id="loginButton" className=" w-3/12 rounded-lg bg-purple-800 text-secondary p-1 hover:bg-purple-600 hover:shadow-md transition-all">Login</button>
                    <button type="button" onSubmit={() => history.push('/createUser')} className="text-purple-800 hover:text-purple-600 transition-all">Register yourself &rarr;</button>
                </div>
            </div>
            <div className="w-80 ml-12 relative -bottom-4 text-secondary text-center"><a href="/">Contact</a> • <a href="/">Privacy</a></div>
        </form>
        </>
    )
}

export default LoginForm;