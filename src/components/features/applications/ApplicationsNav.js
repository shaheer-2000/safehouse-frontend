import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, NavLink } from 'react-router-dom';
import Funding from './Funding';
import Jobs from './Jobs';
import Training from './Training';
import Insurance from './Insurance';

const ApplicationsNav = () => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 w-full px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end fixed z-10">
            <div>
                <NavLink to="/dashboard/applications/funding" className="tabLink" activeClassName="border-b-2 border-yellow-600">Funding</NavLink>
                <NavLink to="/dashboard/applications/jobs" className="tabLink" activeClassName="border-b-2 border-yellow-600">Jobs</NavLink>
                <NavLink to="/dashboard/applications/training" className="tabLink" activeClassName="border-b-2 border-yellow-600">Training</NavLink>
                <NavLink to="/dashboard/applications/insurance" className="tabLink" activeClassName="border-b-2 border-yellow-600">Insurance</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Redirect exact from="/dashboard/applications" to="/dashboard/applications/funding" />
                <Route path="/dashboard/applications/funding" component={Funding}></Route>
                <Route exact path="/dashboard/applications/jobs" component={Jobs}></Route>
                <Route exact path="/dashboard/applications/training" component={Training}></Route>
                <Route exact path="/dashboard/applications/insurance" component={Insurance}></Route>
            </Switch>
        </div>
    </div>)
}

export default ApplicationsNav;