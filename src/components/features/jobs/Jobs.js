import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import JobsListing from './JobsListing';
import Employers from './Employers';

const Jobs = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div>
                <NavLink to={"/dashboard/jobs/joblist"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Jobs</NavLink>
                {/* Employers */}
            </div>
            <div>
                {/* +jobs */}
            </div>
        </div>
        <div>
            <Switch>
                <Route path={"/dashboard/jobs/joblist"} component={JobsListing}></Route>
            </Switch>
        </div>
    </div>)
}

export default Jobs;