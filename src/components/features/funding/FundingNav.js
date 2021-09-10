import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, NavLink } from 'react-router-dom';

const FundingNav = () => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 w-full px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end justify-between fixed z-10">
            <div>
                <NavLink to="/dashboard/funding/requestfunds" className="tabLink" activeClassName="border-b-2 border-yellow-600">Request funds</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Redirect exact from="/dashboard/funding" to="/dashboard/funding/requestfunds" />
                {/* <Route path="/dashboard/funding/requestfunds" component={CrowdFundingRegistrationForm}></Route> */}
            </Switch>
        </div>
    </div>)
}

export default FundingNav;