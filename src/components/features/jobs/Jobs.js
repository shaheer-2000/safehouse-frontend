import React from 'react';
import CardItems from '../../cards/CardItems';

const jobs = [
    {
        title: "Plumber",
        designation: "Supervisor",
        salary: "10000",
        experience: "2 years",
        description: "No description"
    },
    {
        title: "Carpenter",
        designation: "Supervisor",
        salary: "15000",
        experience: "2 years",
        description: "No description"
    }
]

const Jobs = () => {
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