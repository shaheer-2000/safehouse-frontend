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

const Instructors = () => {
    const [instructors, setinstructors] = useState([]);
    
    useEffect (async () => {
        try {
            let res = await instance.get(`/api/v1/affiliates/instructor`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setinstructors(res.data);
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return (
    <>
    <ListItems type="trainingInstructor" data={instructors}/>
    </>
    )
}

export default Instructors;