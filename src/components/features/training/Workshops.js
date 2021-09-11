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

const Workshops = () => {
    const [workshops, setworkshops] = useState([]);

    useEffect (async () => {
        try {
            let res = await instance.get(`/api/v1/trainings`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            setworkshops(res.data);
            console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="w-full flex flex-row flex-wrap">
        {
            workshops.map((item, id) => {
                return <CardItems key={id} type="training" id={item.id} title={item.title} discipline={item.discipline} duration={item.duration} experience={item.required_experience_level} certification={item.certification} fee={item.fee} description={item.description}/>
            })
        }
    </div>
    )
}

export default Workshops;