import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, NavLink } from 'react-router-dom';
import Admins from './Admins';
import Ngos from './Ngos';
import Managers from './Managers';
import HouseMates from './HouseMates';
import Homeless from './Homeless';

const UsersNav = () => {
    var type = localStorage.getItem('type');

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 w-full px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end fixed z-10">
            <div>
                {
                    (type === 'admin') ?
                    <>
                    <NavLink to="/dashboard/users/admins" className="tabLink" activeClassName="border-b-2 border-yellow-600">Admins</NavLink>
                    <NavLink to="/dashboard/users/ngos" className="tabLink" activeClassName="border-b-2 border-yellow-600">NGOs</NavLink>
                    <NavLink to="/dashboard/users/managers" className="tabLink" activeClassName="border-b-2 border-yellow-600">Managers</NavLink>
                    <NavLink to="/dashboard/users/housemates" className="tabLink" activeClassName="border-b-2 border-yellow-600">HouseMates</NavLink>
                    <NavLink to="/dashboard/users/homeless" className="tabLink" activeClassName="border-b-2 border-yellow-600">Homeless</NavLink>
                    </> :
                    (type === 'ngo') ?
                    <>
                    <NavLink to="/dashboard/users/managers" className="tabLink" activeClassName="border-b-2 border-yellow-600">Managers</NavLink>
                    <NavLink to="/dashboard/users/housemates" className="tabLink" activeClassName="border-b-2 border-yellow-600">HouseMates</NavLink>
                    <NavLink to="/dashboard/users/homeless" className="tabLink" activeClassName="border-b-2 border-yellow-600">Homeless</NavLink>
                    </> :
                    (type === 'manager') ?
                    <>
                    <NavLink to="/dashboard/users/housemates" className="tabLink" activeClassName="border-b-2 border-yellow-600">HouseMates</NavLink>
                    <NavLink to="/dashboard/users/homeless" className="tabLink" activeClassName="border-b-2 border-yellow-600">Homeless</NavLink>
                    </> :
                    <NavLink to="/dashboard/users/homeless" className="tabLink" activeClassName="border-b-2 border-yellow-600">Homeless</NavLink>
                }
            </div>
            {
                (type === 'admin') ?
                <div className="border-l-2 border-gray-300">
                    <NavLink to="/dashboard/users/add-user" className="tabLink" activeClassName="border-b-2 border-yellow-600">+User</NavLink>
                </div> :
                null
            }
        </div>
        <div className="mt-20 h-full w-full overflow-auto relative">
            <Switch>
                {
                    (type === 'admin') ?
                    <Redirect exact from="/dashboard/users" to="/dashboard/users/admins" /> :
                    (type === 'ngo') ?
                    <Redirect exact from="/dashboard/users" to="/dashboard/users/managers" /> :
                    (type === 'manager') ?
                    <Redirect exact from="/dashboard/users" to="/dashboard/users/housemates" /> :
                    <Redirect exact from="/dashboard/users" to="/dashboard/users/homeless" />
                }
                {
                    (type === 'admin') ?
                    <>
                    <Route path="/dashboard/users/admins" component={Admins}></Route>
                    <Route path="/dashboard/users/ngos" component={Ngos}></Route>
                    <Route path="/dashboard/users/managers" component={Managers}></Route>
                    <Route exact path="/dashboard/users/housemates" component={HouseMates}></Route>
                    <Route exact path="/dashboard/users/homeless" component={Homeless}></Route>
                    </> :
                    (type === 'ngo') ?
                    <>
                    <Route path="/dashboard/users/managers" component={Managers}></Route>
                    <Route exact path="/dashboard/users/housemates" component={HouseMates}></Route>
                    <Route exact path="/dashboard/users/homeless" component={Homeless}></Route>
                    </> :
                    (type === 'manager') ?
                    <>
                    <Route exact path="/dashboard/users/housemates" component={HouseMates}></Route>
                    <Route exact path="/dashboard/users/homeless" component={Homeless}></Route>
                    </> :
                    <Route exact path="/dashboard/users/homeless" component={Homeless}></Route>
                }
            </Switch>
        </div>
    </div>)
}

export default UsersNav;