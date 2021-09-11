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

const Plans = () => {
    const [plans, setplans] = useState([]);

    useEffect (async () => {
        try {
            let res = await instance.get(`/api/v1/rehab/plans`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            setplans(res.data);
            console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="w-full flex flex-row flex-wrap">
        {
            plans.map((item, id) => {
                return <CardItems key={id} type="rehabPlan" id={item.id} title={item.title} planType={item.type} duration={item.duration} fee={item.fee} description={item.description}/>
            })
        }
    </div>
    )
}

export default Plans;