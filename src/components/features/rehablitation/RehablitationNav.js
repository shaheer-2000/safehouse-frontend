import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import RehabPlansRegistrationForm from '../../forms/RehabPlansRegistrationForm';

const RehablitationNav = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/rehablitation/plans"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Plans</NavLink>
                <NavLink to={"/dashboard/rehablitation/centers"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Centers</NavLink>
            </div>
            <div>
                <NavLink to={"/dashboard/rehablitation/addplan"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+Plan</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Redirect exact from="/dashboard/rehablitation" to="/dashboard/rehablitation/plans" />
                <Route exact path={"/dashboard/rehablitation/addplan"} component={RehabPlansRegistrationForm}></Route>
            </Switch>
        </div>
    </div>)
}

export default RehablitationNav;