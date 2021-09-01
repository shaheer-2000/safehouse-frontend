import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import CrowdFundingRegistrationForm from '../../forms/CrowdFundingRegistrationForm';

const Funding = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end justify-between">
            <div>
                <NavLink to={"/dashboard/funding/requestFunds"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Request funds</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Route path={"/dashboard/funding/requestFunds"} component={CrowdFundingRegistrationForm}></Route>
            </Switch>
        </div>
    </div>)
}

export default Funding;