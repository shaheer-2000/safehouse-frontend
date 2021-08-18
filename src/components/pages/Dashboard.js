import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import Users from '../features/Users';
import Jobs from '../features/Jobs';
import Training from '../features/Training';
import Funding from '../features/Funding';
import Insurance from '../features/Insurance';
import Houses from '../features/Houses';
import Profile from '../features/Profile';
import Rehablitation from '../features/Rehablitation';
import { BsHouseFill, BsPeopleCircle } from 'react-icons/bs';
import { FaUsers, FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaUserShield, FaHandHoldingHeart } from 'react-icons/fa';

const Dashboard = (props) => {
    const history = useHistory();
    const { user } = useParams();

    if (!props.authorized) {
        alert("Invalid ID or password!");
        history.push('/');
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
                                (user === 'manager') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={`/dashboard/${user}/users`} className="navlink" activeClassName="bg-selected hover:bg-opacity-100"><FaUsers className="mr-4"/>Users</NavLink>
                                        <NavLink to={`/dashboard/${user}/jobs`} className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4" />Jobs</NavLink>
                                        <NavLink to={`/dashboard/${user}/training`} className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4" />Training</NavLink>
                                        <NavLink to={`/dashboard/${user}/funding`} className="navlink" activeClassName="bg-selected"><FaHandHoldingUsd className="mr-4" />Fundings</NavLink>
                                        <NavLink to={`/dashboard/${user}/insurance`} className="navlink" activeClassName="bg-selected"><FaUserShield className="mr-4" />Insurance</NavLink>
                                        <NavLink to={`/dashboard/${user}/houses`} className="navlink" activeClassName="bg-selected"><BsHouseFill className="mr-4" />Houses</NavLink>
                                        <NavLink to={`/dashboard/${user}/rehablitation`} className="navlink" activeClassName="bg-selected"><FaHandHoldingHeart className="mr-4" />Rehablitation</NavLink>
                                    </div>
                                </> :
                                (user === 'admin') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={`/dashboard/${user}/users`} className="navlink" activeClassName="bg-selected hover:bg-opacity-100"><FaUsers className="mr-4"/>Home</NavLink>
                                        <NavLink to={`/dashboard/${user}/jobs`} className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4" />Jobs</NavLink>
                                        <NavLink to={`/dashboard/${user}/training`} className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4" />Training</NavLink>
                                        <NavLink to={`/dashboard/${user}/funding`} className="navlink" activeClassName="bg-selected"><FaHandHoldingUsd className="mr-4" />Fundings</NavLink>
                                        <NavLink to={`/dashboard/${user}/insurance`} className="navlink" activeClassName="bg-selected"><FaUserShield className="mr-4" />Insurance</NavLink>
                                        <NavLink to={`/dashboard/${user}/houses`} className="navlink" activeClassName="bg-selected"><BsHouseFill className="mr-4" />Houses</NavLink>
                                        <NavLink to={`/dashboard/${user}/rehablitation`} className="navlink" activeClassName="bg-selected"><FaHandHoldingHeart className="mr-4" />Rehablitation</NavLink>
                                    </div>
                                </> :
                                (user === 'housemate') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={`/dashboard/${user}/users`} className="navlink" activeClassName="bg-selected hover:bg-opacity-100"><FaUsers className="mr-4"/>Homeless</NavLink>
                                        <NavLink to={`/dashboard/${user}/jobs`} className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4" />Jobs</NavLink>
                                        <NavLink to={`/dashboard/${user}/training`} className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4" />Training</NavLink>
                                        <NavLink to={`/dashboard/${user}/funding`} className="navlink" activeClassName="bg-selected"><FaHandHoldingUsd className="mr-4" />Fundings</NavLink>
                                        <NavLink to={`/dashboard/${user}/insurance`} className="navlink" activeClassName="bg-selected"><FaUserShield className="mr-4" />Insurance</NavLink>
                                        <NavLink to={`/dashboard/${user}/houses`} className="navlink" activeClassName="bg-selected"><BsHouseFill className="mr-4" />Houses</NavLink>
                                        <NavLink to={`/dashboard/${user}/rehablitation`} className="navlink" activeClassName="bg-selected"><FaHandHoldingHeart className="mr-4" />Rehablitation</NavLink>
                                    </div>  
                                </> :
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to={`/dashboard/${user}/profile`} className="navlink" activeClassName="bg-selected"><BsPeopleCircle className="mr-4" />Profile</NavLink>
                                        <NavLink to={`/dashboard/${user}/jobs`} className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4" />Jobs</NavLink>
                                        <NavLink to={`/dashboard/${user}/training`} className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4" />Training</NavLink>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className="w-32 mx-auto mb-8">
                        <button className="w-full px-2 py-1 border-2 border-red-600 border-opacity-50 rounded-xl bg-red-600 bg-opacity-50 hover:bg-opacity-100 flex items-center justify-center transition-all" onClick={() => history.push('/')}>Logout</button>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col bg-secondary">
                    <div className="h-20 px-24 border-b-2 border-gray-300 bg-white">
                    </div>
                    <div className="px-24 py-6">
                        <Switch>
                            <Route path={`/dashboard/${user}/users`} component={Users}></Route>
                            <Route path={`/dashboard/${user}/jobs`} component={Jobs}></Route>
                            <Route path={`/dashboard/${user}/training`} component={Training}></Route>
                            <Route path={`/dashboard/${user}/funding`} component={Funding}></Route>
                            <Route path={`/dashboard/${user}/houses`} component={Houses}></Route>
                            <Route path={`/dashboard/${user}/rehablitation`} component={Rehablitation}></Route>
                            <Route path={`/dashboard/${user}/insurance`} component={Insurance}></Route>
                            <Route path={`/dashboard/${user}/profile`} component={Profile}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;