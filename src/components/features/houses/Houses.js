import React, { useState, useEffect } from 'react';
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

const Houses = () => {
    const [houses, sethouses] = useState([]);

    useEffect (async () => {
        try {
            let res = await instance.get(`/api/v1/houses`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            console.log(res);
            sethouses(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    return (
    <div className="w-full flex flex-row flex-wrap">
    {
        houses.map((item, id) => {
            return <CardItems key={id} type="house" price={item.price} address={item.full_address} bedrooms={item.bedrooms} bathrooms={item.bathrooms} area={item.area} phoneNum={item.phone_num}/>
        })
    }
    </div>
    )
}

export default Houses;