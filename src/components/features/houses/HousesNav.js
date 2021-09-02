import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import HouseRegistrationForm from '../../forms/HouseRegistrationForm';

const HousesNav = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/houses/houses"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Houses</NavLink>
            </div>
            <div>
            <NavLink to={"/dashboard/houses/addhouse"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+Houses</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Redirect exact from="/dashboard/houses" to="/dashboard/houses/houses" />
                {/* <Route path={"/dashboard/houses/addhouse"} component={HouseRegistrationForm}></Route> */}
            </Switch>
        </div>
    </div>)
}

export default HousesNav;