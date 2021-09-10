import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Agencies from './Agencies';
import Packages from './Packages';

const InsuranceNav = () => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 w-full px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end fixed z-10">
            <div>
                <NavLink to="/dashboard/insurance/packages" className="tabLink" activeClassName="border-b-2 border-yellow-600">Packages</NavLink>
                <NavLink to="/dashboard/insurance/agencies" className="tabLink" activeClassName="border-b-2 border-yellow-600">Agencies</NavLink>
            </div>
            {
                (localStorage.getItem('type') === 'admin') ?
                <div className="border-l-2 border-gray-300">
                    <NavLink to="/dashboard/insurance/addpackage" className="tabLink" activeClassName="border-b-2 border-yellow-600">+Package</NavLink>
                </div> :
                null
            }
        </div>
        <div className="mt-20 h-full w-full overflow-auto relative">
            <Switch>
                <Redirect exact from="/dashboard/insurance" to="/dashboard/insurance/packages" />
                <Route path="/dashboard/insurance/packages" component={Packages}></Route>
                <Route path="/dashboard/insurance/agencies" component={Agencies}></Route>
            </Switch>
        </div>
    </div>)
}

export default InsuranceNav;