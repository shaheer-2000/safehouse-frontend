import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItems from '../../cards/ListItems';

let instance = axios.create({
    baseURL: 'http://safehouse-weavy.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

const Admins = () => {
    const [users, setusers] = useState([]);
    
    useEffect (async () => {
        try {
            let res = await instance.get(`/api/v1/users/admins`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            setusers(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return (
    <>
    <ListItems type="user" data={users} role="admin" />
    </>
    )
}

export default Admins;