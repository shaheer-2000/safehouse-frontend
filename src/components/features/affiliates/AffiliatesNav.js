import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, NavLink } from 'react-router-dom';

const AffiliatesNav = () => {
    var type = localStorage.getItem('type');

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 w-full px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end fixed z-10">
            <div>
                <NavLink to="/dashboard/affiliates/add-insurance-agency" className="tabLink" activeClassName="border-b-2 border-yellow-600">+Agency</NavLink>
                <NavLink to="/dashboard/affiliates/add-job-employers" className="tabLink" activeClassName="border-b-2 border-yellow-600">+JobEmployer</NavLink>
                <NavLink to="/dashboard/affiliates/add-rehablitation-center" className="tabLink" activeClassName="border-b-2 border-yellow-600">+RehabCenter</NavLink>
                <NavLink to="/dashboard/affiliates/add-training-instructor" className="tabLink" activeClassName="border-b-2 border-yellow-600">+TrainingInstructor</NavLink>
                    
            </div>
        </div>
        <div className="mt-20 h-full w-full overflow-auto relative">
            <Switch>
                <Redirect exact from="/dashboard/affiliates" to="/dashboard/affiliates/add-insurance-agency" />

            </Switch>
        </div>
    </div>)
}

export default AffiliatesNav;