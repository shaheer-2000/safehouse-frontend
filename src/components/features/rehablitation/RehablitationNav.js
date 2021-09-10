import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Centers from './Centers';
import Plans from './Plans';

const RehablitationNav = () => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 w-full px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end fixed z-10">
            <div>
                <NavLink to="/dashboard/rehablitation/plans" className="tabLink" activeClassName="border-b-2 border-yellow-600">Plans</NavLink>
                <NavLink to="/dashboard/rehablitation/centers" className="tabLink" activeClassName="border-b-2 border-yellow-600">Centers</NavLink>
            </div>
            {
                (localStorage.getItem('type') === 'admin') ?
                <div className="border-l-2 border-gray-300">
                    <NavLink to="/dashboard/rehablitation/addplan" className="tabLink" activeClassName="border-b-2 border-yellow-600">+Plan</NavLink>
                </div> :
                null
            }
        </div>
        <div className="mt-20 h-full w-full overflow-auto relative">
            <Switch>
                <Redirect exact from="/dashboard/rehablitation" to="/dashboard/rehablitation/plans" />
                <Route exact path="/dashboard/rehablitation/plans" component={Plans}></Route>
                <Route exact path="/dashboard/rehablitation/centers" component={Centers}></Route>
            </Switch>
        </div>
    </div>)
}

export default RehablitationNav;