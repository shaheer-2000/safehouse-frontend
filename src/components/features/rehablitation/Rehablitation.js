import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import RehabCentersRegisterationForm from '../../forms/RehabCentersReigsterationForm';
import RehabPlansRegisterationForm from '../../forms/RehabPlansRegisterationForm';

const Rehablitation = (props) => {

    return (
    <div className="w-full h-full flex flex-col bg-secondary">
        <div className="h-20 px-10 border-b-2 border-gray-300 bg-white flex flex-row items-end">
            <div className="border-r-2 border-gray-300">
                <NavLink to={"/dashboard/rehablitation/centers"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Centers</NavLink>
                <NavLink to={"/dashboard/rehablitation/plans"} className="tabLink" activeClassName="border-b-2 border-yellow-600">Plans</NavLink>
            </div>
            <div>
                <NavLink to={"/dashboard/rehablitation/addcenter"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+Center</NavLink>
                <NavLink to={"/dashboard/rehablitation/addplan"} className="tabLink" activeClassName="border-b-2 border-yellow-600">+Plan</NavLink>
            </div>
        </div>
        <div>
            <Switch>
                <Route exact path={"/dashboard/rehablitation/addcenter"} component={() => <RehabCentersRegisterationForm />}></Route>
                <Route exact path={"/dashboard/rehablitation/addplan"} component={() => <RehabPlansRegisterationForm />}></Route>
            </Switch>
        </div>
    </div>)
}

export default Rehablitation;