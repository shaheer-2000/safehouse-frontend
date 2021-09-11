import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItems from '../../cards/CardItems';

let instance = axios.create({
    baseURL: 'http://safehouse-weavy.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

const Jobs = () => {
    const [jobs, setjobs] = useState([]);
   
    useEffect (async () => {
        try {
            let res = await instance.get(`/api/v1/jobs`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            setjobs(res.data);
            console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="w-full flex flex-row flex-wrap">
        {
            jobs.map((item, id) => {
                return <CardItems key={id} type="job" description={item.description} fee={item.salary} designation={item.designation} experience={item.experience} title={item.title}/>
            })
        }
    </div>
    )
}

export default Jobs;