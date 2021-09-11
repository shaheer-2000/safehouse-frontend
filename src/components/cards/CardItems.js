import React from 'react';
import axios from 'axios';
import { BsHouseFill } from 'react-icons/bs';
import { FaBriefcase, FaChalkboardTeacher, FaUserShield, FaHandHoldingHeart, FaBed, FaBath, FaRulerCombined, FaCheckCircle } from 'react-icons/fa';

let instance = axios.create({
    baseURL: 'http://safehouse-weavy.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

const CardItems = (props) => {

    const submitJobApplication = (e) => {
        e.preventDefault();

        try {
            instance.post(`/api/v1/applications`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    type : "job",
                    user_id : `${localStorage.getItem('id')}`,
                    job_id : `${props.id}`
                }
            );
        }
        catch (e) {
            console.log(e);
        }

        alert("Application submitted!");
        var elementButton = document.getElementById(`job${props.id}`);
        elementButton.classList.remove('border-yellow-600', 'bg-yellow-600');
        elementButton.classList.add('border-gray-400', 'bg-gray-400', 'pointer-events-none');
    }
    const submitInsuranceApplication = (e) => {
        e.preventDefault();

        try {
            instance.post(`/api/v1/applications`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    type : "insurance",
                    user_id : `${localStorage.getItem('id')}`,
                    insurance_id : `${props.id}`
                }
            );
        }
        catch (e) {
            console.log(e);
        }

        alert("Application submitted!");
        var elementButton = document.getElementById(`insurance${props.id}`);
        elementButton.classList.remove('border-yellow-600', 'bg-yellow-600');
        elementButton.classList.add('border-gray-400', 'bg-gray-400', 'pointer-events-none');
    }
    const submitTrainingApplication = (e) => {
        e.preventDefault();

        try {
            instance.post(`/api/v1/applications`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    type : "training",
                    user_id : `${localStorage.getItem('id')}`,
                    training_id : `${props.id}`
                }
            );
        }
        catch (e) {
            console.log(e);
        }

        alert("Application submitted!");
        var elementButton = document.getElementById(`training${props.id}`);
        elementButton.classList.remove('border-yellow-600', 'bg-yellow-600');
        elementButton.classList.add('border-gray-400', 'bg-gray-400', 'pointer-events-none');
    }

    const submitRehabApplication = (e) => {
        e.preventDefault();

        alert("Application submitted!");
        var elementButton = document.getElementById(`rehab${props.id}`);
        elementButton.classList.remove('border-yellow-600', 'bg-yellow-600');
        elementButton.classList.add('border-gray-400', 'bg-gray-400', 'pointer-events-none');
    }

    const rentHouse = (e) => {
        e.preventDefault();

        alert("Application submitted!");
        var elementButton = document.getElementById(`house${props.id}`);
        elementButton.classList.remove('border-yellow-600', 'bg-yellow-600');
        elementButton.classList.add('border-gray-400', 'bg-gray-400', 'pointer-events-none');
    }
    
    return (
    <div className="m-1 w-max p-3 border-2 border-gray-300 rounded-lg bg-white box-content flex flex-row">
        <div className="w-20 h-36 mr-3 rounded-lg bg-white grid place-content-center">
            {
                (props.type === 'house') ?
                <BsHouseFill className="h-10 w-10 text-primary" /> :
                (props.type === 'job') ?
                <FaBriefcase className="h-10 w-10 text-primary" /> :
                (props.type === 'rehabPlan') ?
                <FaHandHoldingHeart className="h-10 w-10 text-primary" /> :
                (props.type === 'training') ?
                <FaChalkboardTeacher className="h-10 w-10 text-primary" /> :
                (props.type === 'insurance') ?
                <FaUserShield className="h-10 w-10 text-primary" /> : null
            }
        </div>
        <div className="flex flex-col justify-between">
            {
                (props.type === 'house') ?
                <p className="text-lg text-primary">PKR<span className="mx-1 text-2xl">{props.price}</span>Rs/mo</p> :
                (props.type === 'training') ?
                <span className="flex flex-row items-center justify-between"><p className="text-2xl text-primary">{props.title}</p>
                {
                    (props.certification === true) ?
                    <FaCheckCircle className="w-5 h-5 text-green-600" title="Certified" /> :
                    <FaCheckCircle className="w-5 h-5 text-gray-400" title="Not certified" />
                }
                </span> :
                <p className="text-2xl text-primary">{props.title}</p>
            }
            {
                (props.type === 'house') ?
                <p className="text-base text-gray-400" title="Address">{props.address}</p> :
                (props.type === 'rehabPlan') ?
                <p className="text-base text-gray-400" title="Plan Type | Duration">{props.planType} | {props.duration} months</p> :
                (props.type === 'job') ?
                <p className="text-base text-gray-400" title="Designation | Experience level">{props.designation} | {props.experience}</p> :
                (props.type === 'insurance') ?
                <p className="text-base text-gray-400" title="Coverage">PKR {props.minCoverage} Rs - PKR {props.maxCoverage} Rs</p> :
                (props.type === 'training') ?
                <p className="text-base text-gray-400" title="Discipline | Duration">{props.discipline} | {props.duration} months</p> : null
            }
            {
                (props.type === 'training') ?
                <p className="text-base text-primary capitalize">• {props.experience} experience required</p> : null
            }
            {
                (props.type === 'house') ?
                <div className="flex flex-row">
                    <span className="mr-6 flex flex-row" title="Bedrooms"><FaBed className="h-6 w-6 mr-2 text-primary"/><p>{props.bedrooms}</p></span>
                    <span className="mr-6 flex flex-row" title="Bathrooms"><FaBath className="h-6 w-6 mr-2 text-primary"/><p>{props.bathrooms}</p></span>
                    <span className="mr-6 flex flex-row" title="Area"><FaRulerCombined className="h-6 w-6 mr-2 text-primary"/><p>{props.area} Sq. Yd.</p></span>
                </div> :
                (props.type === 'rehabPlan' || props.type === 'training') ?
                <p className="text-base text-primary" title="Registration charges">• For PKR {props.fee} Rs</p> :
                (props.type === 'job') ?
                <p className="text-base text-primary" className="text-base text-primary" title="Salary">• PKR {props.fee} Rs/mo</p> :
                (props.type === 'insurance') ?
                <p className="text-base text-primary" title="Subscription charges">• For PKR {props.fee} Rs/mo</p> : null
            }
            {
                (props.type === 'job' || props.type === 'insurance' || props.type === 'rehabPlan') ?
                <p className="text-base text-primary" title="Description">• {props.description}</p> : null
            }
            <div className="flex flex-row justify-end">
            {
                (props.type === 'house') ?
                <>
                <form onSubmit={rentHouse}>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <>
                        <a href={`callto: ${props.phoneNum}`} className="px-4 border-2 border-gray-400 text-gray-400 rounded-md pointer-events-none">Call</a>
                        <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Rent</button>
                    </> :
                    <>
                        <a href={`callto: ${props.phoneNum}`} className="px-1 text-yellow-600">Call</a>
                        <button id={`house`+props.id} className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Rent</button>
                    </>
                }
                </form>
                </> :
                (props.type === 'rehabPlan') ?
                <>
                <form onSubmit={submitRehabApplication}>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Register</button> :
                    <button id={`rehab`+props.id} className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Register</button>
                }
                </form>
                </> :
                (props.type === 'insurance') ?
                <>
                <form onSubmit={submitInsuranceApplication}>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Subscribe</button> :
                    <button id={`insurance`+props.id} className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Subscribe</button>
                }
                </form>
                </> :
                (props.type === 'job') ?
                <>
                <form onSubmit={submitJobApplication}>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Apply</button> :
                    <button id={`job`+props.id} className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Apply</button>
                }
                </form>
                </> :
                (props.type === 'training') ?
                <>
                <form onSubmit={submitTrainingApplication}>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Enroll</button> :
                    <button id={`training`+props.id} className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Enroll</button>
                }
                </form>
                </> : null
            }
            </div>
        </div>
    </div>
    )
}

export default CardItems;