import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItems from '../../cards/CardItems';

const plans = [
    {
        id: 1,
        title: "Package 1",
        minCoverage: "0",
        maxCoverage: "99",
        subscription_charges: "500",
        description: "No description"
    },
    {
        id: 2,
        title: "Package 2",
        minCoverage: "0",
        maxCoverage: "99",
        subscription_charges: "500",
        description: "No description"
    },
    {
        id: 3,
        title: "Package 3",
        minCoverage: "0",
        maxCoverage: "99",
        subscription_charges: "500",
        description: "No description"
    }
]

let instance = axios.create({
    baseURL: 'http://safehouse-weavy.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

const Packages = () => {
    const [data, setdata] = useState([]);
    
    useEffect (async () => {
        try {
            let res = await instance.get(`/api/v1/insurance/plans`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setdata(res.data);
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
                return <CardItems key={id} type="insurance" id={item.id} title={item.title} minCoverage={item.minCoverage} maxCoverage={item.maxCoverage} fee={item.subscription_charges} description={item.description}/>
            })
        }
    </div>
    )
}

export default Packages;