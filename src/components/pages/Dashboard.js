import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { useHistory, Redirect} from 'react-router';
import Users from '../features/users/Users';
import Jobs from '../features/jobs/Jobs';
import Training from '../features/training/Training';
import Funding from '../features/funding/Funding';
import Insurance from '../features/insurance/Insurance';
import Houses from '../features/houses/Houses';
import Profile from '../features/profile/Profile';
import Rehablitation from '../features/rehablitation/Rehablitation';
import Applications from '../features/applications/Applications';
import { BsHouseFill, BsPeopleCircle } from 'react-icons/bs';
import { FaUsers, FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaUserShield, FaHandHoldingHeart, FaClipboardCheck } from 'react-icons/fa';

const isLoggedIn = () => {
    let loggedIn = localStorage.getItem('loggedIn');
    return JSON.parse(loggedIn);
}

const getType = () => {
    return localStorage.getItem('type');
}

const Dashboard = () => {
    const loggedIn = isLoggedIn();
    const user = getType();
    const history = useHistory();

    if (!loggedIn) {
        alert("Login first!");
        return <Redirect to="/" />
    }

    return (
        <>
            <div className="w-screen h-screen flex flex-row bg-secondary">
                <div className="w-72 h-full bg-primary text-secondary text-xlc flex flex-col justify-between transform -translate-x-8 opacity-10 animate-appear">
                    <div>
                        <div className="h-20 text-secondary border-b-2 border-gray-100 border-opacity-10 grid place-content-center">
                            <h1 className="text-2xl font-comfortaa">.SafeHouse</h1>
                        </div>
                        <div>
                            {
                                (user === 'admin') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={"/dashboard/users"} className="navlink" activeClassName="bg-selected"><FaUsers className="mr-4 inline-block"/>Users</NavLink>
                                        <NavLink to={"/dashboard/jobs"} className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4 inline-block" />Jobs</NavLink>
                                        <NavLink to={"/dashboard/training"} className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4 inline-block" />Training</NavLink>
                                        <NavLink to={"/dashboard/insurance"} className="navlink" activeClassName="bg-selected"><FaUserShield className="mr-4 inline-block" />Insurance</NavLink>
                                        <NavLink to={"/dashboard/houses"} className="navlink" activeClassName="bg-selected"><BsHouseFill className="mr-4 inline-block" />Houses</NavLink>
                                        <NavLink to={"/dashboard/rehablitation"} className="navlink" activeClassName="bg-selected"><FaHandHoldingHeart className="mr-4 inline-block" />Rehablitation</NavLink>
                                        <NavLink to={"/dashboard/applications"} className="navlink" activeClassName="bg-selected"><FaClipboardCheck className="mr-4 inline-block" />Applications</NavLink>
                                    </div>
                                </> :
                                (user === 'ngo') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={"/dashboard/users"} className="navlink" activeClassName="bg-selected"><FaUsers className="mr-4 inline-block"/>Users</NavLink>
                                        <NavLink to={"/dashboard/funding"} className="navlink" activeClassName="bg-selected"><FaHandHoldingUsd className="mr-4" />Fundings</NavLink>
                                    </div>
                                </> :
                                (user === 'manager') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={"/dashboard/users"} className="navlink" activeClassName="bg-selected"><FaUsers className="mr-4"/>Users</NavLink>
                                    </div>
                                </> :
                                (user === 'housemate') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={"/dashboard/users"} className="navlink" activeClassName="bg-selected"><FaUsers className="mr-4"/>Homeless</NavLink>
                                        <NavLink to={"/dashboard/jobs"} className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4" />Jobs</NavLink>
                                        <NavLink to={"/dashboard/training"} className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4" />Training</NavLink>
                                        <NavLink to={"/dashboard/funding"} className="navlink" activeClassName="bg-selected"><FaHandHoldingUsd className="mr-4" />Fundings</NavLink>
                                        <NavLink to={"/dashboard/insurance"} className="navlink" activeClassName="bg-selected"><FaUserShield className="mr-4" />Insurance</NavLink>
                                        <NavLink to={"/dashboard/houses"} className="navlink" activeClassName="bg-selected"><BsHouseFill className="mr-4" />Houses</NavLink>
                                        <NavLink to={"/dashboard/rehablitation"} className="navlink" activeClassName="bg-selected"><FaHandHoldingHeart className="mr-4" />Rehablitation</NavLink>
                                    </div>  
                                </> :
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={"/dashboard/profile"} className="navlink" activeClassName="bg-selected"><BsPeopleCircle className="mr-4" />Profile</NavLink>
                                        <NavLink to={"/dashboard/jobs"} className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4" />Jobs</NavLink>
                                        <NavLink to={"/dashboard/training"} className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4" />Training</NavLink>
                                        <NavLink to={"/dashboard/applications"} className="navlink" activeClassName="bg-selected"><FaClipboardCheck className="mr-4 inline-block" />Applications</NavLink>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className="w-32 mx-auto mb-8">
                        <button className="w-full px-2 py-1 border-2 border-red-600 border-opacity-50 rounded-xl bg-red-600 bg-opacity-50 hover:bg-opacity-100 transition-all" onClick={() => history.push('/')}>Logout</button>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Switch>
                        {
                            (user === 'homeless') ?
                            <Redirect exact from="/dashboard" to="/dashboard/profile" /> :
                            <Redirect exact from="/dashboard" to="/dashboard/users" />
                        }
                        <Route path={"/dashboard/users"} component={() => <Users user={user} />}></Route>
                        <Route path={"/dashboard/jobs"} component={() => <Jobs user={user} />}></Route>
                        <Route path={"/dashboard/training"} component={() => <Training user={user} />}></Route>
                        <Route path={"/dashboard/funding"} component={() => <Funding user={user} />}></Route>
                        <Route path={"/dashboard/houses"} component={() => <Houses user={user} />}></Route>
                        <Route path={"/dashboard/rehablitation"} component={() => <Rehablitation user={user} />}></Route>
                        <Route path={"/dashboard/insurance"} component={() => <Insurance user={user} />}></Route>
                        <Route path={"/dashboard/profile"} component={() => <Profile user={user} />}></Route>
                        <Route path={"/dashboard/applications"} component={() => <Applications user={user} />}></Route>
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default Dashboard;