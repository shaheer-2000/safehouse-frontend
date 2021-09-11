import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle } from "react-icons/fa";

let instance = axios.create({
    baseURL: 'http://safehouse-weavy.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

const Profile = () => {
    const [user, setuser] = useState({});
    const { type, username } = useParams();
    console.log(username);
    useEffect (async () => {
        try {
            let res = await instance.get(`/api/v1/users/${type}${type.endsWith('s') ? '' : 's'}?username=${username}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            console.log(res);
            setuser(res.data[0]);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="w-full h-full flex flex-col overflow-auto">
            <div className="w-full h-20 bg-white border-b-2 border-gray-300 flex flex-row justify-start">
                <div className="w-60 h-60 ml-16 bg-secondary border-2 border-gray-300 rounded-lg relative -bottom-8 grid place-content-center overflow-hidden">
                    <FaUserCircle className="w-20 h-20 bg-white text-primary rounded-full" />
                </div>
                <div className="ml-8 relative -bottom-24">
                    <p className="text-4xl text-primary">{user.name}</p>
                    <p className="text-xl text-gray-600 whitespace-pre"><span>{user.username}</span> | <span className="capitalize">{user.type}</span></p>
                    <p className="mt-8 text-xl text-gray-600">{user.email}</p>
                    <p className="text-xl text-gray-600 whitespace-pre">{user.city}, {user.country}</p>
                </div>
            </div>
            <div className="w-full h-full mt-56 bg-white border-t-2 border-gray-300">

            </div>
        </div>
    )
}

export default Profile;