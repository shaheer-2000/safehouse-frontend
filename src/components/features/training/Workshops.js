import React from 'react';
import CardItems from '../../cards/CardItems';

const workshops = [
    {
        title: 'Workshop 1',
        discipline: 'Electronics',
        duration: '2 months',
        required_experience_level: 'None',
        certification: 'yes',
        fee: '6000',
        description: 'No description'
    },
    {
        title: 'Workshop 2',
        discipline: 'Web Development',
        duration: '4 months',
        required_experience_level: '1 year',
        certification: 'no',
        fee: '18000',
        description: 'No description'
    }
]

const Workshops = () => {
    return (
        <div className="w-full flex flex-row flex-wrap">
        {
            workshops.map((item, id) => {
                return <CardItems key={id} type="training" title={item.title} discipline={item.discipline} duration={item.duration} experience={item.required_experience_level} certification={item.certification} fee={item.fee} description={item.description}/>
            })
        }
    </div>
    )
}

export default Workshops;