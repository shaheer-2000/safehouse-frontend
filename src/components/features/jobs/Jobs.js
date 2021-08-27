import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import JobsListing from './JobsListing';
import Employers from './Employers';
import JobRegisterationForm from '../../forms/JobRegisterationForm';
import EmployerRegisterationForm from '../../forms/EmployerRegisterationForm';
import PageNotFound from '../../pages/PageNotFound';

const Jobs = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/jobs/joblist"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Jobs</NavLink>
                {
                    (props.user === 'admin') ?
                    <NavLink to={"/dashboard/jobs/employers"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Employers</NavLink> :
                    <></>
                }
            </div>
            <div>
                <NavLink to={"/dashboard/jobs/addjob"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+Job</NavLink>
                <NavLink to={"/dashboard/jobs/addemployer"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+Employer</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Route path={"/dashboard/jobs/joblist"} component={JobsListing}></Route>
                {
                    (props.user === 'admin') ?
                    <>
                    <Route path={"/dashboard/jobs/addjob"} component={JobRegisterationForm}></Route>
                    <Route path={"/dashboard/jobs/addemployer"} component={EmployerRegisterationForm}></Route>
                    </> :
                    <Route component={PageNotFound}></Route>
                }
            </Switch>
        </div>
    </div>)
}

export default Jobs;