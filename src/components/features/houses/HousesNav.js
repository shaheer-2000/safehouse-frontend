import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import HouseRegistrationForm from '../../forms/HouseRegistrationForm';
import Houses from './Houses';

const HousesNav = () => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div>
                <NavLink to="/dashboard/houses/houselist" className="tabLink" activeClassName="border-b-2 border-yellow-600">Houses</NavLink>
            </div>
            {
                (localStorage.getItem('type') === 'admin') ?
                <div className="border-l-2 border-gray-300">
                    <NavLink to="/dashboard/houses/addhouse" className="tabLink" activeClassName="border-b-2 border-yellow-600">+House</NavLink>
                </div> :
                null
            }
        </div>
        <div>
            <Switch>
                <Redirect exact from="/dashboard/houses" to="/dashboard/houses/houselist" />
                <Route path="/dashboard/houses/houselist" component={Houses}></Route>
            </Switch>
        </div>
    </div>)
}

export default HousesNav;