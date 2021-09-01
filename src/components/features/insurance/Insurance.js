import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

const Insurance = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div>
                <NavLink to={"/dashboard/insurance/packages"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Packages</NavLink>
                <NavLink to={"/dashboard/insurance/agencies"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Agencies</NavLink>
            </div>
            <div>
                {/* +packages */}
            </div>
        </div>
        <div>
            <Switch>
                {/* <Route path={"/dashboard/insurance/addagency"} component={InsuranceAgencyRegistrationForm}></Route> */}
            </Switch>
        </div>
    </div>)
}

export default Insurance;