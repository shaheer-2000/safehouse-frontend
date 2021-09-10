import React from 'react';
import CardItems from '../../cards/CardItems';

const plans = [
    {
        title: 'Plan 1',
        type: 'Drugs',
        duration: '4 weeks',
        fee: '500',
        description: 'No description'
    },
    {
        title: 'Plan 2',
        type: 'Drugs',
        duration: '2 weeks',
        fee: '1000',
        description: 'No description'
    },
    {
        title: 'Plan 3',
        type: 'Drugs',
        duration: '3 weeks',
        fee: '650',
        description: 'No description'
    }
]

const Plans = () => {
    return (
        <div className="w-full flex flex-row flex-wrap">
        {
            plans.map((item, id) => {
                return <CardItems key={id} type="rehabPlan" title={item.title} planType={item.type} duration={item.duration} fee={item.fee} description={item.description}/>
            })
        }
    </div>
    )
}

export default Plans;