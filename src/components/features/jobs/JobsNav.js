import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, NavLink } from 'react-router-dom';
import Jobs from './Jobs';
import Employers from './Employers';

const JobsNav = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/jobs/joblist"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Jobs</NavLink>
                {
                    (localStorage.getItem('type') === 'admin') ?
                        <NavLink to={"/dashboard/jobs/employers"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Employers</NavLink> :
                        null
                }
            </div>
            <div>
                {
                <NavLink to={"/dashboard/jobs/addjob"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+Job</NavLink>
                }
            </div>
        </div>
        <div>
            <Switch>
                <Redirect exact from="/dashboard/jobs" to="/dashboard/jobs/joblist" />
                <Route path="/dashboard/jobs/joblist" component={Jobs}></Route>
                <Route path="/dashboard/jobs/employers" component={Employers}></Route>
            </Switch>
        </div>
    </div>)
}

export default JobsNav;