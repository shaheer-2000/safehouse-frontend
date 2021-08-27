import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import InsuranceAgencyRegisterationForm from '../../forms/InsuranceAgencyRegisterationForm';

const Insurance = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/insurance/agencies"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Agencies</NavLink>
                <NavLink to={"/dashboard/insurance/packages"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Packages</NavLink>
            </div>
            <div>
                <NavLink to={"/dashboard/insurance/addagency"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+Agency</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Route path={"/dashboard/insurance/addagency"} component={InsuranceAgencyRegisterationForm}></Route>
            </Switch>
        </div>
    </div>)
}

export default Insurance;