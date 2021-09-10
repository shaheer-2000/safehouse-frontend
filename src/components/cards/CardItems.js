import React from 'react';
import { BsHouseFill } from 'react-icons/bs';
import { FaBriefcase, FaChalkboardTeacher, FaUserShield, FaHandHoldingHeart, FaBed, FaBath, FaRulerCombined, FaCheckCircle } from 'react-icons/fa';

const CardItems = (props) => {
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
                (props.type === 'insurancePlan') ?
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
                    (props.certification === 'yes') ?
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
                <p className="text-base text-gray-400" title="Plan Type | Duration">{props.planType} | {props.duration}</p> :
                (props.type === 'job') ?
                <p className="text-base text-gray-400" title="Designation | Experience">{props.designation} | {props.experience}</p> :
                (props.type === 'insurancePlan') ?
                <p className="text-base text-gray-400" title="Coverage">PKR {props.minCoverage} Rs - PKR {props.maxCoverage} Rs</p> :
                (props.type === 'training') ?
                <p className="text-base text-gray-400" title="Discipline | Duration">{props.discipline} | {props.duration}</p> : null
            }
            {
                (props.type === 'training') ?
                <p className="text-base text-primary">• {props.experience} of experience required</p> : null
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
                (props.type === 'insurancePlan') ?
                <p className="text-base text-primary" title="Subscription charges">• For PKR {props.fee} Rs/mo</p> : null
            }
            {
                (props.type === 'job' || props.type === 'insurancePlan' || props.type === 'rehabPlan') ?
                <p className="text-base text-primary" title="Description">• {props.description}</p> : null
            }
            <div className="flex flex-row justify-end">
            {
                (props.type === 'house') ?
                <>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <>
                        <a href={`callto: ${props.phoneNum}`} className="px-4 border-2 border-gray-400 text-gray-400 rounded-md pointer-events-none">Call</a>
                        <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Rent</button>
                    </> :
                    <>
                        <a href={`callto: ${props.phoneNum}`} className="px-4 border-2 border-yellow-600 text-yellow-600 rounded-md">Call</a>
                        <button className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Rent</button>
                    </>
                }
                </> :
                (props.type === 'rehabPlan') ?
                <>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Register</button> :
                    <button className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Register</button>
                }
                </> :
                (props.type === 'insurancePlan') ?
                <>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Subscribe</button> :
                    <button className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Subscribe</button>
                }
                </> :
                (props.type === 'job') ?
                <>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Apply</button> :
                    <button className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Apply</button>
                }
                </> :
                (props.type === 'training') ?
                <>
                {
                    (localStorage.getItem('type') === 'admin') ?
                    <button className="ml-4 px-4 border-2 border-gray-400 rounded-md bg-gray-400 text-secondary pointer-events-none">Enroll</button> :
                    <button className="ml-4 px-4 border-2 border-yellow-600 rounded-md bg-yellow-600 text-secondary">Enroll</button>
                }
                </> : null
            }
            </div>
        </div>
    </div>
    )
}

export default CardItems;