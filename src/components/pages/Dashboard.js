import React from 'react';
import './Dashboard.css'
import { Switch, Route, NavLink } from 'react-router-dom';
import { useHistory, Redirect} from 'react-router';
import UsersNav from '../features/users/UsersNav';
import JobsNav from '../features/jobs/JobsNav';
import TrainingNav from '../features/training/TrainingNav';
import FundingNav from '../features/funding/FundingNav';
import InsuranceNav from '../features/insurance/InsuranceNav';
import HousesNav from '../features/houses/HousesNav';
import Profile from '../features/profile/Profile';
import RehablitationNav from '../features/rehablitation/RehablitationNav';
import AffiliatesNav from '../features/affiliates/AffiliatesNav';
import ApplicationsNav from '../features/applications/ApplicationsNav';
import Weavy from '../../weavy/Weavy';
import WeavyApp from '../../weavy/WeavyApp';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsPeopleCircle, BsChatSquareDotsFill } from 'react-icons/bs';
import { FaUsers, FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaUserShield, FaHandHoldingHeart, FaHandshake, FaClipboardCheck } from 'react-icons/fa';

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
        alert("Are you even authorized 🤔?");
        return <Redirect to="/" />
    }

    const getJwt = async () => {
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJpc3MiOiJmY2Q0MWM0ZC0wMTY5LTQwY2EtOWVkMC00ZWIwMTkwYjIyNmUifQ.VkHsZudftpEgLMgHFYhTFi41jaXRswRUHt7MMDy2_-s";
    }

    return (
        <>
            <div className="w-full h-screen flex flex-row bg-secondary overflow-hidden">
                <div className="w-72 h-full bg-primary text-secondary text-xlc flex flex-col justify-between transform -translate-x-8 opacity-10 animate-appear overflow-auto">
                    <div>
                        <div className="h-20 text-secondary border-b-2 border-gray-100 border-opacity-10 grid place-content-center">
                            <h1 className="text-2xl font-comfortaa">.SafeHouse</h1>
                        </div>
                        <div>
                            {
                                (user === 'admin') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to="/dashboard/users" className="navlink" activeClassName="bg-selected"><FaUsers className="mr-4 inline-block"/>Users</NavLink>
                                        <NavLink to="/dashboard/jobs" className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4 inline-block" />Jobs</NavLink>
                                        <NavLink to="/dashboard/training" className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4 inline-block" />Training</NavLink>
                                        <NavLink to="/dashboard/insurance" className="navlink" activeClassName="bg-selected"><FaUserShield className="mr-4 inline-block" />Insurance</NavLink>
                                        <NavLink to="/dashboard/houses" className="navlink" activeClassName="bg-selected"><BsHouseFill className="mr-4 inline-block" />Houses</NavLink>
                                        <NavLink to="/dashboard/rehablitation" className="navlink" activeClassName="bg-selected"><FaHandHoldingHeart className="mr-4 inline-block" />Rehablitation</NavLink>
                                        <NavLink to="/dashboard/affiliates" className="navlink" activeClassName="bg-selected"><FaHandshake className="mr-4 inline-block" />Affiliates</NavLink>
                                        <NavLink to="/dashboard/applications" className="navlink" activeClassName="bg-selected"><FaClipboardCheck className="mr-4 inline-block" />Applications</NavLink>
                                    </div>
                                </> :
                                (user === 'ngo') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to="/dashboard/users" className="navlink" activeClassName="bg-selected"><FaUsers className="mr-4 inline-block"/>Users</NavLink>
                                        <NavLink to="/dashboard/funding" className="navlink" activeClassName="bg-selected"><FaHandHoldingUsd className="mr-4" />Fundings</NavLink>
                                    </div>
                                </> :
                                (user === 'manager') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to="/dashboard/users" className="navlink" activeClassName="bg-selected"><FaUsers className="mr-4"/>Users</NavLink>
                                    </div>
                                </> :
                                (user === 'housemate') ?
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to="/dashboard/users" className="navlink" activeClassName="bg-selected"><FaUsers className="mr-4"/>Homeless</NavLink>
                                        <NavLink to="/dashboard/jobs" className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4" />Jobs</NavLink>
                                        <NavLink to="/dashboard/training" className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4" />Training</NavLink>
                                        <NavLink to="/dashboard/funding" className="navlink" activeClassName="bg-selected"><FaHandHoldingUsd className="mr-4" />Fundings</NavLink>
                                        <NavLink to="/dashboard/insurance" className="navlink" activeClassName="bg-selected"><FaUserShield className="mr-4" />Insurance</NavLink>
                                        <NavLink to="/dashboard/houses" className="navlink" activeClassName="bg-selected"><BsHouseFill className="mr-4" />Houses</NavLink>
                                        <NavLink to="/dashboard/rehablitation" className="navlink" activeClassName="bg-selected"><FaHandHoldingHeart className="mr-4" />Rehablitation</NavLink>
                                    </div>  
                                </> :
                                <>
                                    <div className="mt-6 flex flex-col">
                                        <NavLink to="/dashboard/jobs" className="navlink" activeClassName="bg-selected"><FaBriefcase className="mr-4" />Jobs</NavLink>
                                        <NavLink to="/dashboard/training" className="navlink" activeClassName="bg-selected"><FaChalkboardTeacher className="mr-4" />Training</NavLink>
                                        <NavLink to="/dashboard/applications" className="navlink" activeClassName="bg-selected"><FaClipboardCheck className="mr-4 inline-block" />Applications</NavLink>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className="w-full mx-auto border-t-2 border-gray-100 border-opacity-10 flex flex-row justify-between">
                        <NavLink to={`/dashboard/profile/${localStorage.getItem('type')}/${localStorage.getItem('username')}`} className="navlink w-full"><BsPeopleCircle className="mr-4" />Profile</NavLink>
                        <button className="px-4 bg-red-500 bg-opacity-80 text-white hover:bg-opacity-100 transition-all" title="Logout" onClick={() => history.push('/')}><BiLogOut className="w-6 h-6" /></button>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Switch>
                        {
                            (user === 'homeless') ?
                            <Redirect exact from="/dashboard" to="/dashboard/jobs" /> :
                            <Redirect exact from="/dashboard" to="/dashboard/users" />
                        }
                        <Route path="/dashboard/profile/:type/:username" component={Profile}></Route>
                        <Route path="/dashboard/users" component={UsersNav}></Route>
                        <Route path="/dashboard/jobs" component={JobsNav}></Route>
                        <Route path="/dashboard/training" component={TrainingNav}></Route>
                        <Route path="/dashboard/funding" component={FundingNav}></Route>
                        <Route path="/dashboard/houses" component={HousesNav}></Route>
                        <Route path="/dashboard/rehablitation" component={RehablitationNav}></Route>
                        <Route path="/dashboard/insurance" component={InsuranceNav}></Route>
                        <Route path="/dashboard/affiliates" component={AffiliatesNav}></Route>
                        <Route path="/dashboard/applications" component={ApplicationsNav}></Route>
                    </Switch>
                </div>
            </div>
            <div className="mybox overflow-hidden">
                <BsChatSquareDotsFill className="chatIcon text-primary" />
                <Weavy jwt={getJwt}>
                    <div className="weavy">
                        <WeavyApp
                        spaceKey="safehouse"
                        spaceName="Safehouse"
                        appKey="messenger-102"
                        appName="messenger"
                        appType="messenger"
                        />
                    </div>
                </Weavy>
            </div>
        </>
    )
}

export default Dashboard;