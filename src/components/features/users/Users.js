import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Ngos from './Ngos';
import HouseMates from './HouseMates';
import Homeless from './Homeless';
import RegistrationForm from '../../forms/RegisterationForm';

const Users = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/users/ngos"} className="tabLink" activeClassName="border-b-2 border-yellow-600">NGOs</NavLink>
                <NavLink to={"/dashboard/users/managers"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Managers</NavLink>
                <NavLink to={"/dashboard/users/housemates"} className="tabLink" activeClassName="border-b-2 border-yellow-600">HouseMates</NavLink>
                <NavLink to={"/dashboard/users/homeless"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Homeless</NavLink>
            </div>
            <div>
                <NavLink to={"/dashboard/users/addmanager"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+User</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Route path={"/dashboard/users/ngos"} component={Ngos}></Route>
                <Route exact path={"/dashboard/users/housemates"} component={HouseMates}></Route>
                <Route exact path={"/dashboard/users/homeless"} component={Homeless}></Route>
                <Route exact path={"/dashboard/users/addmanager"} component={RegistrationForm}></Route>
            </Switch>
        </div>
    </div>)
}

export default Users;